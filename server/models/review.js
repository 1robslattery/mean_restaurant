const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
	customer: {
		type: String,
		required: [true, "You must give your name."],
		minlength: [3, "Your name must have at least 3 characters."]
	},

	stars: {
		type: Number,
		required: [true, "You must have a star"],
		default: 3
	},
	
	description: {
		type: String,
		required: [true, "You must have a description"],
		minlength: [3, "The description must have at least 3 characters."]
	}

}, {timestamps: true});

mongoose.model("Review", ReviewSchema);

module.exports = ReviewSchema;

	