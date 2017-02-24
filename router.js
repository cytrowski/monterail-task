'use strict';

const fs = require('fs');

class BaseRouter {
	constructor(app) {
		// Home route
		app.all(/^\/([a-zA-Z0-9\-]+)?$/, (req, res) => {
			res.render('index');
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

		// User photos
		app.all(/^\/photo\/(john|bob|andrea|sarah).jpg$/, (req, res) => {
			res.sendFile(__dirname + '/user-photos/' + req.params[0] + '.jpg');
		});
	}
}

class APIRouter {
	constructor(app) {
		// Get questions
		app.post('/api/get-questions/:skip', (req, res) => {
			fs.readFile(__dirname + '/data/questions.json', (err, data) => {
				let skip = parseInt(req.params.skip);
				let questions = JSON.parse(data).questions;
				let partition = {
					questions: [],
					hasMore: skip + 3 < questions.length,
				};

				for (let i = skip; i < Math.min(skip+3,questions.length); i++) {
					partition.questions.push(questions[i]);
				}

				res.send(JSON.stringify(partition));
			});
		});

		// Get single question with provided slug
		app.post('/api/get-question/:slug', (req, res) => {
			let slug = req.params.slug;

			fs.readFile(__dirname + '/data/questions.json', (err, contents) => {
				if (err) {
					res.send();
				} else {
					let data = JSON.parse(contents);

					for (let i = 0; i < data.questions.length; i++) {
						let q = data.questions[i];

						console.log(q.slug, slug);

						if (q.slug == slug) {
							res.send(q);
							return;
						}
					}

					res.send();
				}
			});
		});

		// Get user profile with given ID
		app.post('/api/get-user/:id', (req, res) => {
			let id = req.params.id;

			fs.readFile(__dirname + '/data/users.json', (err, contents) => {
				if (err) {
					res.send();

				} else {
					let data = JSON.parse(contents);

					for (let i = 0; i < data.users.length; i++) {
						let u = data.users[i];

						if (u.id == id) {
							res.send(u);
							return;
						}
					}

					res.send();
				}
			});
		});
	}
}

module.exports = (app) => {
	app.set('view engine', 'pug');
	app.set('views dir', __dirname + '/views');

	new BaseRouter(app);
	new ResourcesRouter(app);
	new APIRouter(app);

	return true;
};
