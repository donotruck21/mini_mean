var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');


module.exports = (function() {
	return{
		index: function(req, res) {
			Order.find({}, function(err, orders) {
				if(err){
					console.log("errors:", err);
				} else {
					res.json(orders);
				}
			})
		},

		create: function(req, res) {
			// console.log("in backend controller", req.body)

			console.log("check quantity of", req.body.product)

			Product.findOne({name:req.body.product}, function(err, result){
				var product_quantity = result.quantity
				var order_quantity = req.body.quantity
				console.log("product quantity:", product_quantity)
				console.log("order quantity:", order_quantity)

				if(product_quantity - order_quantity < 0){
					console.log("error")
				}else{
					var newQuantity = product_quantity - order_quantity
					console.log(newQuantity)
					Product.update({name: result.name}, {quantity: newQuantity}, function (err, product){
				        console.log("updated!")

				        var order = new Order({customer_name: req.body.customer_name, product: req.body.product, quantity: req.body.quantity})

						order.save(function(err){
							if(err){
					    		console.log("something went wrong")
					    		console.log(err)
					    	}
					    	else{
					    		console.log("added a order!")
								res.json(order);
					    	}
						})
				    })


				}


			})

		},

		getThree: function(req, res) {
			var q = Order.find({}).sort({'created_at': -1}).limit(3);
			q.exec(function(err, orders) {
			     // console.log("orders:", orders)
			     if(err){
					console.log("errors:", err);
				} else {
					res.json(orders);
				}
			});
		}
	}
})();




