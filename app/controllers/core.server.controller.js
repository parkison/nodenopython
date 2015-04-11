'use strict';

var PythonShell = require('python-shell');

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('index', {
		user: req.user || null,
		request: req
	});
};

exports.adder = function(req, res){

	var options = {
	  		args: 	[	parseFloat(req.params.firstnumber),
	  					parseFloat(req.params.secondnumber)
	  				]
		};

	PythonShell.run('addfive.py', options, function (err, results) {
		if (err) throw err;
		res.send(results)
	});
}