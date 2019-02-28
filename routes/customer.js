"use strict";

const express     = require("express");
const customerRoutes   = express.Router();

module.exports = function() {

    // Home page
    customerRoutes.get("/", (req, res) => {
        res.render("index");
    });
    
    customerRoutes.post('/orders', (req, res) => {
        /*if ( cart is empty) {
        res.status(403);
        res.send('Cart is Empty');
        } else { */
        res.redirect('/order');
        //}
        //set cookie
    });
    
    // Order Confirmation
    customerRoutes.get("/order", (req, res) => {
        let orderID = 5000;
        req.session.orderID = orderID;
        console.log("----------", req.session.orderID)
        //need to clear cookie when? req.session = null
        res.render("order_review");
    });
    
    customerRoutes.post("/order", (req, res) => {
        //const orderID = req.params.orderID
        res.send('User confirms and places order on this html page');
    });
    
    // Order Complete - Thank You
    customerRoutes.get("/order/complete", (req, res) => {
        res.render("order_confirmation");
    });
    return customerRoutes;
}