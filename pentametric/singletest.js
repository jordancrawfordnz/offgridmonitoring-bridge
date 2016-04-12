'use strict';

if (!process.argv[2]) {
	console.log("node singletest.js [device]");
	process.exit();
}

var Pentametric = require('./interaction.js');
var test = require('./test.js');
var pentametricDevice = new Pentametric(process.argv[2]);

test.singleTest(pentametricDevice).then(function() {
	console.log('done');
	process.exit();
});