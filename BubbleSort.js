var _ = require('lodash');

var config = require('./config');

module.exports = function( arrToSort, opts ) {

	var oLen=opts ? opts.subLen || arrToSort.length : arrToSort.length,
		start=opts ? opts.subStart || 0 : 0;

	for ( var outter = start; outter < oLen; outter++ ) {
		var iLen=oLen - 1 - outter;
		// length minus 1 to avoid spilling over array edge
		for ( var i2c = start; i2c <iLen ; i2c++ ) {
		
			if ( arrToSort[ i2c ] > arrToSort[ i2c + 1] ) {
				
				var tmp = arrToSort[ i2c + 1];
				
				arrToSort[ i2c + 1] = arrToSort[ i2c ];
				
				arrToSort[ i2c ] = tmp;
			}
		}
	}
	
	return arrToSort;
}