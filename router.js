'use strict';

class BaseRouter {
	constructor(app) {
		// Home route
		app.all('/', (req, res) => {
			res.render('all-questions');
		});

		app.all('/single', (req, res) => {
			res.render('single-question');
		});

		app.all('/modal', (req, res) => {
			res.render('modal');
		});
	}
}

class ResourcesRouter {
	constructor(app) {
		// CSS stylesheets
		app.all('/css/style.min.css', (req, res) => {
			res.sendFile(__dirname + '/css/style.min.css');
		});

		// JS
		app.all('/js/script.min.js', (req, res) => {
			res.sendFile(__dirname + '/js/script.min.js');
		});

		// Web fonts
		app.all('/fonts/Agfa-Rotis(-bold|-italic)?.woff', (req, res) => {
			res.sendFile(__dirname + '/' + req.url);
		});

		// Images
		app.all('/images/sprite.svg', (req, res) => {
			res.sendFile(__dirname + '/images/sprite.svg');
		});

		app.all('/images/sprite.png', (req, res) => {
			res.sendFile(__dirname + '/images/sprite.png');
		});

		app.all('/images/pattern.png', (req, res) => {
			res.sendFile(__dirname + '/images/pattern.png');
		});

		app.all('/images/face.png', (req, res) => {
			res.sendFile(__dirname + '/images/face.png');
		});
	}
}

module.exports = (app) => {
	app.set('view engine', 'pug');
	app.set('views dir', __dirname + '/views');

	new BaseRouter(app);
	new ResourcesRouter(app);

	return true;
};
