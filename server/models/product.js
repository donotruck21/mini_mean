var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  	name: String,
  	image: String,
  	description: String,
  	quantity: Number,
  	created_at: {type: Date, default: Date.now}
});

mongoose.model('Product', ProductSchema);