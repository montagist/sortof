var _ = require('lodash');

var config = require('./config');

function pivotRange( arrToPiv, pivDex, start, length ) {
	
	
	if ( length < 4 ) {
	
		var smallSort = arrToPiv.slice( start, start + length ).sort( function(a,b) { return a-b; } );
		//console.log( "small: ", smallSort );
		
		if ( length <= 1 )
			return;
		
		for ( var ix = 0; ix < length; ix++ )
			arrToPiv[ ix + start ] = smallSort[ ix ];
			
		//console.log( "reg sorted: ", arrToPiv );
		return;
	}
	
	//console.log( arrToPiv, pivDex, start, length );
	
	start = start || 0;
	length = length || arrToPiv.length;
	
	var end = start + length,
		pivotVal = arrToPiv[ pivDex ],
		replacementArr = [ pivotVal ];
		
		
	var newPivDex = 0;
	
	for ( var i = start; i < start + length; i++ ) {
		
		if ( i == pivDex )
			continue;
		
		//console.log( " -- ", arrToPiv[ i ], pivotVal );
		
		if ( arrToPiv[ i ] == pivotVal ) {
			
			replacementArr.splice( newPivDex, 0, arrToPiv[ i ] );
		
		} else if ( arrToPiv[ i ] > pivotVal ) {
			
			replacementArr.push( arrToPiv[ i ] );
		
		} else {
			
			replacementArr.unshift( arrToPiv[ i ] );
			newPivDex++;
		}
	}
	
	for ( var ix = 0; ix < length; ix++ )
		arrToPiv[ ix + start ] = replacementArr[ ix ];
	
	//console.log( "replaced: ", replacementArr );// pivDex, start, length );
	//console.log( arrToPiv );
	
	return newPivDex + start;
}

module.exports = function( arrToSort, opts ) {
	
	//console.log( "start: ", arrToSort );
	
	opts = config._processOpts( opts );
	
	var splitPoints = [];

	// Plain sort - no custom funcs w/in loop for speed's sake
	// as we must be dealing w/ js primitives
	if ( !opts.customComparator && !opts.customAccessor ) {
		
		var tmpMidDex,
			rangeStart = 0,
			rangeEnd = arrToSort.length;
		
		do {		

			if ( splitPoints.length > 0 ) {

				rangeEnd = splitPoints.pop();
				rangeStart = splitPoints.pop();
			}
			
			tmpMidDex = Math.floor( ( ( rangeEnd - rangeStart ) / 2 ) + rangeStart );
			
			//console.log( "about to partition: ", rangeStart, tmpMidDex, rangeEnd - rangeStart );
			
			var latestPivDex = pivotRange( arrToSort, tmpMidDex, rangeStart, rangeEnd-rangeStart );

			if ( typeof latestPivDex !== "undefined") {
				
				// Bisect range by the latest pivot index
				splitPoints.push( rangeStart, latestPivDex, 
								  latestPivDex + 1, rangeEnd );
			}
			
		} while ( splitPoints.length != 0 )
	}
	
	return arrToSort;
}
		