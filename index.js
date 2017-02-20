const app = require('express')();
const http = require('http').Server(app);
const router = require('./router')(app);

http.listen(3000, () => {
	console.log('Listening on port 3000');
});
