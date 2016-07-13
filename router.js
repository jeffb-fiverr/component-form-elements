'use strict';
const router = require('express').Router();
const pkg = require('./package.json');

// model setup

const model = {
	'pkg': pkg,
	'home': require('./models/' + pkg.moduleName),
  '404': require('./models/404'),
  'dropdown': require('./models/dropdown'),
  'range-slider': require('./models/range-slider'),
  'star-rating': require('./models/star-rating'),
  'tag-boolean': require('./models/tag-boolean'),
  'textarea': require('./models/textarea')
};

function getModel(modelName) {
	let formattedModel;

	if (!model[modelName]) {
		return false;
	}

	formattedModel = model[modelName];
	formattedModel.pkg = model.pkg;
  formattedModel.yield = () => (modelName === 'home') ? pkg.moduleName : modelName;

	return formattedModel;
};

// routing
router
	.get('/home', (req, res) => {
		res.render('index', getModel('home'));
	})
	.get('/:template', (req, res, next) => {
    const template = req.params.template;

		// test for root level 404
		if (!getModel(template)) {
			next();
    } else {
			res.render('index', getModel(template));
		}
	})
	.get('/', (req, res) => {
		res.render('index', getModel('home'));
	})
	.get('*', (req, res) => {
		res.render('404', getModel('404'));
	})

module.exports = router
