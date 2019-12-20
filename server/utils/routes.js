const Restaurants = require('../controllers/restaurants');

module.exports = function(app) {
	app.post("/restaurants", Restaurants.create);
	app.get("/restaurants", Restaurants.getAll);
	app.get("/restaurants/:_id", Restaurants.getOne);
	app.post("/review/:_id", Restaurants.review);
	app.put("/restaurants/:_id", Restaurants.update);
	app.put("/star/:_id", Restaurants.update);
	app.delete("/restaurants/:_id", Restaurants.delete);
}