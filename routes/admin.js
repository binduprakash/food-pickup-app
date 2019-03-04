"use strict";
const express = require("express");
const adminRoutes = express.Router();
const twilio = require("../public/scripts/twilio.js");

module.exports = function(knex) {

  // Admin Orders API
  adminRoutes.get("/orders_json", (req, res) => {
    knex
      .select("orders.id", "order_status.name", "orders.created_at", "orders.customer_first_name", "orders.customer_last_name")
      .from("orders")
      .innerJoin("order_status", "orders.status_id", "order_status.id")
      .then(results => {
        res.json(results);
      });
  });

  // Admin Order Details API
  adminRoutes.get("/orders_details_json/:orderID", (req, res) => {
    /*
      Join Order table with Order Status, Order Menu Item and Menu Items tables
      for the given order.
    */
    knex
      .select(
        "orders.id",
        "orders.status_id",
        "orders.created_at",
        "orders.customer_first_name",
        "orders.customer_last_name",
        "orders.customer_phone_number",
        "order_menu_items.menu_items_id",
        "order_menu_items.quantity",
        "menu_items.name",
        "menu_items.price",
        "orders.total_cost"
      )
      .from("orders")
      .where({ "orders.id": req.params.orderID })
      .orderBy("orders.created_at", "desc")
      .innerJoin("order_status", "orders.status_id", "order_status.id")
      .innerJoin("order_menu_items", "orders.id", "order_menu_items.order_id")
      .innerJoin("menu_items", "order_menu_items.menu_items_id", "menu_items.id")
      .then(results => {
        res.json(results);
      });
  });

  // Admin Orders Page
  adminRoutes.get("/orders", (req, res) => {
    res.render("admin_orders");
  });

  //Admin Order ID Page
  adminRoutes.get("/order_edit", (req, res) => {
    res.render("admin_order_edit");
  });

  //Admin Order ID page POST to save status
  adminRoutes.post("/order_edit", (req, res) => {
    let new_status = req.body["order_status_select"];
    let order_id = req.body["order_id"];
    let pick_up_minutes = req.body["pick_up_select"];
    let temp = req.body["phone"];
    let phoneWithCode = `+1${temp.substring(14)}`;
    knex("orders")
      .where({ id: order_id })
      .update({ status_id: new_status })
      .then(results => {
        let stringMessage = "";
        if (new_status === "2") {
          stringMessage = `Thanks for ordering at Naan Stop. Your Order (#${order_id}) will be ready in ${pick_up_minutes} minutes. Payment expected upon pickup.`;
        } else if (new_status === "4") {
          stringMessage = "Sorry we are unable to process your order at this moment. We are cancelling your order.";
        }
        twilio.twilioTextMessage(stringMessage, phoneWithCode);
        res.json(results);
      });
  });
  return adminRoutes;
};
