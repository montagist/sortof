var _ = require('lodash');

var config = require('./config');

module.exports = function( arrToSort, opts ) {
	
	opts = config._processOpts( opts );

	// Plain sort - no custom funcs w/in loop for speed's sake
	// as we must be dealing w/ js primitives
	if ( !opts.customComparator && !opts.customAccessor ) {
		
		for ( var outter = 0; outter < arrToSort.length; outter++ ) {
			
			// length minus 1 to avoid spilling over array edge
			for ( var i2c = 0; i2c < arrToSort.length - 1 - outter; i2c++ ) {
			
				if ( arrToSort[ i2c ] > arrToSort[ i2c + 1] ) {
					
					var tmp = arrToSort[ i2c + 1];
					
					arrToSort[ i2c + 1] = arrToSort[ i2c ];
					
					arrToSort[ i2c ] = tmp;
				}
			}
		}

	} else 	if ( opts.customComparator && !opts.customAccessor ) {

		var comp = opts.customComparator;
		
		for ( var outter = 0; outter < arrToSort.length; outter++ ) {
			
			for ( var i2c = 0; i2c < arrToSort.length - 1 - outter; i2c++ ) {
			
				if ( comp(arrToSort[ i2c ], arrToSort[ i2c + 1] ) > 0 ) {
					
					var tmp = arrToSort[ i2c + 1];
					
					arrToSort[ i2c + 1] = arrToSort[ i2c ];
					
					arrToSort[ i2c ] = tmp;
				}
			}
		}

	} else 	if ( !opts.customComparator && opts.customAccessor ) {
		
	} else 	if ( opts.customComparator && !opts.customAccessor ) {
		 
	}
	
	return arrToSort;
}