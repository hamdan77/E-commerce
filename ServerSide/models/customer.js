var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');


var Customer = new Schema({
    username: String,
    password: String,
    name: {
      type: String,
        default: ''
    },
    email: {
      type: String,
        default: ''
    },
    cellnumber: {
        type: String,
        default: ''
        
    }
    ,
    address: {
        type: String,
        default: ''
        
    }
    
   
});
Customer.methods.getName = function() {
    return (this.firstname + ' ' + this.lastname);
};
Customer.plugin(passportLocalMongoose);

module.exports = mongoose.model(' Customer', Customer);