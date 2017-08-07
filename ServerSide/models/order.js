var mongoose = require("mongoose");
var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var ordersSchema = new Schema({
    id:{
        type: String,
  
   
    },
  items: {
    type: Array
   
  },
     username: {
    type: String,
    required: true
  }
}, {timestamps: true}
                           );


var Orders = mongoose.model("Order", ordersSchema);
module.exports = Orders;
