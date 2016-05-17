var products = require('./../controllers/products.js');
var customers = require('./../controllers/customers.js');
var orders = require('./../controllers/orders.js');


module.exports = function(app) {

	// -- PRODUCT ROUTES

	app.get('/products', function(req, res) {
		products.index(req, res)
	});

	app.post('/products', function(req, res) {
		products.create(req, res)
	});

	app.get('/products/five', function(req, res) {
		products.getFive(req, res)
	});

	// -- CUSTOMER ROUTES

	app.get('/customers', function(req, res) {
		customers.index(req, res)
	});

	app.post('/customers', function(req, res) {
		console.log("in routes")
		customers.create(req, res)
	});

	app.delete('/customers/:id', function(req, res) {
		console.log("in delete route")
		customers.delete(req, res)
	});

	app.get('/customers/three', function(req, res) {
		customers.getThree(req, res)
	});

	// -- ORDERS ROUTES

	app.get('/orders', function(req, res) {
		orders.index(req, res)
	});

	app.post('/orders', function(req, res) {
		orders.create(req, res)
	})

	app.get('/orders/three', function(req, res) {
		orders.getThree(req, res)
	});

};