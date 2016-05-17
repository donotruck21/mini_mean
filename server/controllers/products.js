var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = (function() {
	return{
		index: function(req, res) {
			Product.find({}, function(err, products) {
				if(err){
					console.log("errors:", err);
				} else {
					res.json(products);
				}
			})
		},

		create: function(req, res) {
			console.log("in backend controller, creating", req.body)
			
			var product = new Product({name: req.body.name, image: req.body.image, description: req.body.description, quantity: req.body.quantity})

			product.save(function(err){
				if(err){
		    		console.log("something went wrong")
		    		console.log(err)
		    	}
		    	else{
		    		console.log("added a product!")
					res.json(product);
		    	}
			})
		},

		getFive: function(req, res) {
			var q = Product.find({}).sort({'created_at': -1}).limit(5);
			q.exec(function(err, products) {
			     // console.log("products:", products)
			     if(err){
					console.log("errors:", err);
				} else {
					res.json(products);
				}
			});
		}
	}
})();