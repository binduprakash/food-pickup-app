"use strict";

const express = require("express");
const customerRoutes = express.Router();
const bodyParser = require("body-parser");
const twilio = require("../public/scripts/twilio.js");

//--------Functions--------------------->

function itemRowCost(itemRow) {
  //calculates cost of each item in cart for order review page
  let itemCost = itemRow.Qty * itemRow.price;
  return itemCost;
}

function calculateCart(cartData) {
  //calculates total cost of cart for order review page
  let subtotal = 0;
  for (let i = 0; i < cartData.length; i++) {
    subtotal += itemRowCost(cartData[i]);
  }
  return subtotal;
}

//renders number in currency format
function displayDollars(number) {
  var dollars = parseFloat(number).toFixed(2);
  return dollars.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

//-------customer routes---------------->

module.exports = function(knex) {
  // Home page
  customerRoutes.get("/", (req, res) => {
    res.render("index");
  });

  customerRoutes.post("/revieworder", (req, res) => {

    //passes on data for each menu item with qty> 1 for templateVars
    let menuItems;
    knex
      .select("*")
      .from("menu_items")
      .then(results => {
        menuItems = results;
        let orderForm = [];
        let tempForm = Object.entries(req.body);
        tempForm.forEach(function(element) {
          if (element[1] > 0) {
            menuItems.forEach(function(item) {
              if (item.id === Number(element[0])) {
                orderForm.push({ itemID: element[0], Qty: element[1], itemName: item.name, price: item.price });
              }
            });
          }
        });

        let subtotal = calculateCart(orderForm);
        let templateVars = { orders: orderForm, subtotal: subtotal, displayDollars: displayDollars };
        res.render("order_review", templateVars);
      });
  });

  customerRoutes.get("/revieworder", (req, res) => {
    res.redirect("/");
  });
  customerRoutes.get("/confirmorder", (req, res) => {
    res.redirect("/");
  });

  customerRoutes.post("/confirmorder", (req, res) => {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var phoneNumber = req.body.phoneNumber;
    var ids = req.body.id;
    var qtys = req.body.qty;
    var totalprice = parseFloat(req.body.totalprice);

    //pushing order into database
    knex("orders")
      .insert({
        status_id: 1,
        total_cost: totalprice,
        customer_first_name: firstName,
        customer_last_name: lastName,
        customer_phone_number: phoneNumber
      })
      .returning("id")
      .then(id => {
        var count = ids.length;
        for (var i = 0; i < count; i++) {
          knex("order_menu_items")
            .insert({
              order_id: parseInt(id),
              menu_items_id: parseInt(ids[i]),
              quantity: parseInt(qtys[i])
            })
            .then(() => {});
        }
      });

    let templateVars = { phone: req.body.phoneNumber, name: req.body.firstName };

    // Text Admin Phone #
    let adminPhoneNumber = "+16046006082";
    let stringMessage = "Naan Stop - you have a new order to verify";
    twilio.twilioTextMessage(stringMessage, adminPhoneNumber);

    res.render("order_confirmation", templateVars);
  });

  // Order Complete - Thank You
  customerRoutes.get("/order/complete", (req, res) => {
    res.render("order_confirmation");
  });
  return customerRoutes;
};
