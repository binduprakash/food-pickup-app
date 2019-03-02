"use strict";

const express           = require("express");
const customerRoutes    = express.Router();
const bodyParser        = require("body-parser");
const twilio            = require('../public/scripts/twilio.js')

function itemRowCost (itemRow) {
    let itemCost = itemRow.Qty * itemRow.price;
    return itemCost;
}

function calculateCart(cartData){
    console.log("-------",cartData)
    let subtotal = 0;
    for (let i = 0; i < cartData.length; i++) {
        subtotal += itemRowCost(cartData[i])
    }
    return subtotal;
}

function displayDollars(number){
    var dollars = number; 
    return dollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
} 






module.exports = function(knex) {
  // Home page
  customerRoutes.get("/", (req, res) => {
    res.render("index");
  });

  customerRoutes.post("/revieworder", (req, res) => {
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
        //console.log(orderForm);

        let subtotal = calculateCart(orderForm);
        console.log(subtotal)

        let templateVars = {orders: orderForm, subtotal: subtotal, displayDollars: displayDollars}
        res.render("order_review", templateVars);
      });
  });

  // Order Confirmation
  customerRoutes.get("/revieworder", (req, res) => {
    // let orderID = 5000;
    // req.session.orderID = orderID;
    // console.log("---********-", req.session.orderID);
    //need to clear cookie when? req.session = null
    res.redirect("/");
  });

  customerRoutes.post("/order", (req, res) => {
    //const orderID = req.params.orderID
    console.log("---------------",req.body)
        
    //Admin Phone #     
    let phoneNumber = "+17789274265";
    let stringMessage = "Naan Stop - you have a new order to verify";
    
    twilio.twilioTextMessage(stringMessage, phoneNumber)
    res.redirect("/order/complete");
  });

  // Order Complete - Thank You
  customerRoutes.get("/order/complete", (req, res) => {
    res.render("order_confirmation");
  });
  return customerRoutes;
};




//--------------------------------

