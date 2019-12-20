console.log("restaurants.js is running");
const mongoose = require('mongoose');
const Restaurant = mongoose.model("Restaurant");
const Review = mongoose.model("Review");

class RestaurantController {

	getAll(req, res) {
		Restaurant.find({})
			.then(restaurants => res.json(restaurants))
			.catch(err => res.json(err));
	}

	getOne(req, res) {
		Restaurant.findOne({_id: req.params._id})
			.then(one_restaurant => res.json(one_restaurant))
			.catch(err => res.json(err));
	}

	create(req, res) {
		const restaurant = new Restaurant(req.body);
		restaurant.save()
			.then( () => res.json({'msg': 'restaurant is operational'}))
			.catch(err => res.json(err));
	}

	review(req, res) {
		let _id = req.params._id;
		let review = new Review(req.body);
		Restaurant.findByIdAndUpdate({_id}, {$push:{reviews: review}}, {runValidators: true, context: 'query'})
			.then( () => res.json({'msg': 'Better be 5 stars!'}))
			.catch(err => res.json(err));
	}

	star(req, res) {
		Restaurant.findOneAndUpdate({_id: req.params._id})
			.then(() => res.json({'msg': 'I like this Restaurant!'}))
			.catch(err => res.json(err));
	}

	delete(req, res) {
		Restaurant.remove({_id: req.params._id})
			.then(() => res.json({'msg': 'Deleted Restaurant'}))
			.catch(err => res.json(err));
	}

	update(req, res) {
		let _id = req.params._id;
		Restaurant.findByIdAndUpdate({_id}, req.body, {runValidators: true, context: 'query'})
			.then(() => res.json({'msg': 'Update restaurant information!'}))
			.catch(err => res.json(err));
	}
}

module.exports = new RestaurantController();
