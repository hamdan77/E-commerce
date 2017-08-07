var express = require('express');
var router = express.Router();
var passport = require('passport');
var Customer = require('../models/customer');
var Verify    = require('./verify');
//var Customer = require('../models/customer');
/* GET users listing. */

router.route('/') // only admin should have access
.get( function(req,res,next){
  Customer.find({}, function(err,customer){
    if (err) throw err;
    res.json(customer);
  });
});


router.post('/registercustomer', function(req, res) {
    Customer.register(new Customer({ username : req.body.username }),
        req.body.password, function(err, customer) {
        if (err) {
            return res.status(500).json({err: err});
        }
                if(req.body.name) {
            customer.name = req.body.name;
        }
                customer.save(function(err,customer) {
            passport.authenticate('local')(req, res, function () {
                return res.status(200).json({status: 'Registration Successful!'});
            });
        });
    });
});

module.exports = router;