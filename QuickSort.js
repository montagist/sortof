var _ = require('lodash');

var config = require('./config');

var bubbleSort = require('./BubbleSort');

function arrcp( arr1, arr2Destroy, start ) {

	arr2Destroy.unshift( start, arr2Destroy.length );
	arr1.splice.apply( arr1, arr2Destroy );
}

function smallSort( arrToPiv, start, length ) {
/*
	var smallSort = arrToPiv.slice( start, start + length ).sort( function(a,b) { return a-b; } );
		
	if ( length <= 1 )
		return;
	
	arrcp( arrToPiv, smallSort, start );
*/
bubbleSort( arrToPiv, { subStart: start, subLen: length } );
}

function pivotRange( arrToPiv, pivDex, start, length ) {
	
	if (length < 6) {
		if (length > 1) smallSort(arrToPiv, start, length);
		return;
	}
	
	var pv = arrToPiv[ pivDex ], replacementArr = [ pv ], nPvDx = 0;
	for (var i = start; i < start+length; i++) {

		if (i == pivDex) continue;
		
		var vl=arrToPiv[ i ];
		
		if (arrToPiv[ i ] == pv) {
			
			replacementArr.splice(nPvDx,0,vl);
		
		} else if (arrToPiv[ i ] > pv) {
			
			replacementArr.push(vl);
			
		} else {
			
			replacementArr.unshift(vl);
			nPvDx++;
		}
	}
	
	arrcp( arrToPiv, replacementArr, start );
	return nPvDx + start;
}

module.exports = function( arrToSort, opts ) {
	
	var splitPoints = [],tmpMidDex,rStart = 0, rEnd = arrToSort.length;
	
	do {		

		if ( splitPoints.length > 0 ) {

			rEnd = splitPoints.pop();
			rStart = splitPoints.pop();
		}
		
		tmpMidDex = Math.floor( ( ( rEnd - rStart ) / 2 ) + rStart );
		
		var latestPivDex = pivotRange( arrToSort, tmpMidDex, rStart, rEnd-rStart );

		if ( typeof latestPivDex !== "undefined") {
			
			splitPoints.push( rStart, latestPivDex, 
							  latestPivDex + 1, rEnd );
		}
		
	} while ( splitPoints.length != 0 )

	return arrToSort;
}
		