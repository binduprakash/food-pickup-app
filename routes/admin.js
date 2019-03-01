"use strict";

const express     = require("express");
const adminRoutes   = express.Router();

module.exports = function(knex) {

    // Admin Orders JSON response
    adminRoutes.get("/orders_json", (req, res) => {
      knex
      .select("orders.id", "order_status.name", "orders.created_at", "orders.customer_first_name")
      .from("orders")
      .innerJoin('order_status', 'orders.status_id', 'order_status.id')
      .then(results => {
        console.log("results appear", results);
        res.json(results);
      });
    });

    adminRoutes.get("/orders_details_json/:orderID", (req, res) => {
      knex
      .select("orders.id", "order_status.name", "orders.created_at", "orders.customer_first_name", "orders.customer_phone_number", "order_menu_items.menu_items_id", "order_menu_items.quantity", "menu_items.name", "menu_items.price", "orders.total_cost")
      .from("orders")
      .where({"orders.id": req.params.orderID})
      .innerJoin('order_status', 'orders.status_id', 'order_status.id')
      .innerJoin('order_menu_items', 'orders.id', 'order_menu_items.order_id')
      .innerJoin('menu_items', 'order_menu_items.menu_items_id', 'menu_items.id')
      .then(results => {
        console.log("results appear", results);
        res.json(results);
      });
    });

    // Admin Orders Page
    adminRoutes.get("/orders", (req, res) => {
        res.render("admin_orders");
    });

    //Admin Order ID Page
    adminRoutes.get('/orders/:orderID', (req, res) => {
        res.render("admin_order_edit");
    });

    adminRoutes.post('/orders/:orderID', (req, res) => {
        res.render("admin_order_edit");
    });
    return adminRoutes;
}
