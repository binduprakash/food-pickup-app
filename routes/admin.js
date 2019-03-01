"use strict";

const express     = require("express");
const adminRoutes   = express.Router();

module.exports = function() {

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
