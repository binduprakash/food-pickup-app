"use strict";

const express = require("express");
const customerRoutes = express.Router();
const bodyParser = require("body-parser");
const twilio = require("../public/scripts/twilio.js");

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

  customerRoutes.get("/revieworder", (req, res) => {
    res.redirect("/");
  });
  customerRoutes.get("/confirmorder", (req, res) => {
    res.redirect("/");
  });

  customerRoutes.post("/confirmorder", (req, res) => {
    let templateVars = { phone: req.body.phoneNumber, name: req.body.firstName };

    //Admin Phone #
    // let phoneNumber = "+17789274265";
    // let stringMessage = "Naan Stop - you have a new order to verify";

    // twilio.twilioTextMessage(stringMessage, phoneNumber);
    res.render("order_confirmation", templateVars);
  });

  // Order Complete - Thank You
  customerRoutes.get("/order/complete", (req, res) => {
    res.render("order_confirmation");
  });
  return customerRoutes;
};
