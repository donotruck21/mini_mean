var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
  	customer_name: String,
  	product: String,
  	quantity: Number,
  	created_at: {type: Date, default: Date.now}
});

mongoose.model('Order', OrderSchema);