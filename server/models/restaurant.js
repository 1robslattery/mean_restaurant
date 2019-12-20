console.log("restaurant.js is running");
const mongoose = require('mongoose');
const ReviewSchema = require('./review');
const uniqueValidator = require('mongoose-unique-validator');

const RestaurantSchema = mongoose.Schema({
	
	name: {
		type: String,
		required: [true, "The restaurant must have a name."],
		minlength: [3, "The restaurant must have at least 3 characters"],
		unique: [true]
	},

	cuisine: {
		type: String,
		required: [true, "The restaurant must have a cuisine!"],
		minlength: [3, "The cuisine must have at least 3 characters"],
		unique: [true]
	},

	reviews: [ ReviewSchema ]

}, {timestamps: true}).plugin(uniqueValidator);

mongoose.model("Restaurant", RestaurantSchema);