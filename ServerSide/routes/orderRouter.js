var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Verify = require('./verify');
var Orders = require('../models/order');

var orderRouter = express.Router();
orderRouter.use(bodyParser.json());

orderRouter.route('/')

.get(function (req, res, next) {
    Orders.find(req.query)
        
        .exec(function (err, order) {
        if (err) next(err);
        res.json(order);
    });
})

.post(function (req, res, next ) {
    Orders.create(req.body, function (err, order) {
        if (err) return next(err);
        console.log('Order Placed!');
        var id = order._id ;
   
        
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        res.end('Added the order with id: ' +id);
    });
})

.delete( function (req, res, next) {
    Orders.remove({}, function (err, resp) {
         if (err) return next(err);
        res.json(resp);
    });
});



module.exports = orderRouter;