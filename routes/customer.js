"use strict";
const express = require("express");
const customerRoutes = express.Router();
const bodyParser = require("body-parser");
//const twilio = require('./public/scripts/twilio')

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
        console.log(orderForm);
        res.render("order_review", orderForm);
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
    console.log("---------------", req.body);
    /*
        let time = "30 minutes";
        let phoneNumber = "+17789274265"

        let stringMessage = `Your order will be ready in ${time}`
        
        twilio.twilioTextMessage(stringMessage, phoneNumber)
        */
    res.redirect("/order/complete");
  });

  // Order Complete - Thank You
  customerRoutes.get("/order/complete", (req, res) => {
    res.render("order_confirmation");
  });
  return customerRoutes;
};
