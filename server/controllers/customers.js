var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function() {
	return{
		index: function(req, res) {
			Customer.find({}, function(err, customers) {
				if(err){
					console.log("errors:", err);
				} else {
					res.json(customers);
				}
			})
		},

		create: function(req, res) {
			console.log("in backend controller, creating", req.body)
			
			var customer = new Customer({name: req.body.name})

			customer.save(function(err){
				if(err){
		    		console.log("something went wrong")
		    		console.log(err)
		    	}
		    	else{
		    		console.log("added a customer!")
					res.json(customer);
		    	}
			})
		},

		delete: function(req, res) {
			console.log("in controller, find", req.params.id, "and delete it")

			Customer.remove({_id: req.params.id}, function (err, customer){
		        console.log("customer removed")
		        res.json(customer);
		    })

		},

		getThree: function(req, res) {
			var q = Customer.find({}).sort({'created_at': -1}).limit(3);
			q.exec(function(err, customers) {
			     // console.log("customers:", customers)
			     if(err){
					console.log("errors:", err);
				} else {
					res.json(customers);
				}
			});
		}
	}
})();








