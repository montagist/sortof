var assert = require('assert');

var _ = require('lodash');

var sortof = require('./index');
		
var inArr = [ 123,534,56,768,5,34,67,87,789,56,34,2,456,3,675,87,5,3,5,7,6,3,4,7,9,4,2,23,6,675,5,3,23,65,565,72,5,7,7,3,5,8,3,1,6,8,0,7,5,3,4,7,9,9,6,5 ];

inArr = sortof.quickSort( inArr.slice(0, inArr.length ) );

var expArr = inArr.slice(0, inArr.length ).sort();
console.log( inArr.slice(0, inArr.length ) )

//assert.equal( true, _.isEqual( expArr, inArr ) );
			
