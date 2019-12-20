const mongoose = require('mongoose');


module.exports = function(DB_NAME) {
	mongoose.connect(`mongodb://localhost/${DB_NAME}`)
		.then().catch(err => console.log(err));
	require('../models/restaurant');
}