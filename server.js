const express = require('express'),
		 port = 1964,
		  app = express(),
	  DB_NAME = "Restaurants";

app.use(express.static(__dirname + "/client/dist/client"));
app.use(express.json());

require('./server/utils/mongoose')(DB_NAME);
require('./server/utils/routes')(app);

app.all('*', (req, res, next) => {
	res.sendfile(__dirname + "/client/dist/client/index.html");
});

app.listen(port, () => console.log(`Listening on port ${port}`));