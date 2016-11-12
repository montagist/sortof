var _ = require('lodash');

//var config = require('./config');

function arrcp( arr1, arr2Destroy, start ) {

	arr2Destroy.unshift( start, arr2Destroy.length );
	arr1.splice.apply( arr1, arr2Destroy );
}

function mergeInPlace( arrToSort, dex, len ) {
	
	var firstArrDex = dex,
		secArrDex = dex + len;
		
	// Check for easy win edge case
	if ( arrToSort[ firstArrDex ] >= arrToSort[ secArrDex+len ] ) {
		///...
	}
	
	var tmpArr = [],
		firstTmpPtr = firstArrDex,
		secTmpPtr = secArrDex,
		firstEnd = firstArrDex + len - 1,
		secEnd = secArrDex + len - 1;
	
	while( tmpArr.length < len * 2 ) {
		
		if ( firstTmpPtr > firstEnd ) {
		
			tmpArr.push( arrToSort[ secTmpPtr ] );
			
			if ( secTmpPtr < secEnd ) secTmpPtr++;

		} else if ( secTmpPtr > secEnd ) {
		
			tmpArr.push( arrToSort[ firstTmpPtr ] );
			firstTmpPtr++;
		
		} else if ( arrToSort[ firstTmpPtr ] < arrToSort[ secTmpPtr ] ) {
			
			tmpArr.push( arrToSort[ firstTmpPtr ] );
			firstTmpPtr++;
		
		} else if ( arrToSort[ firstTmpPtr ] > arrToSort[ secTmpPtr ] ) {
			
			tmpArr.push( arrToSort[ secTmpPtr ] );

			secTmpPtr++;
			
		} else if (  arrToSort[ firstTmpPtr ] == arrToSort[ secTmpPtr ] ) {
			
			tmpArr.push( arrToSort[ firstTmpPtr ] );
			tmpArr.push( arrToSort[ secTmpPtr ] );
			
			firstTmpPtr++;
			secTmpPtr++;
		
		} else {
			
			console.log( "other: ", arrToSort[ firstTmpPtr ], arrToSort[ secTmpPtr ] );
		}

	}
	
	arrcp( arrToSort, tmpArr, dex );
	
	return arrToSort;
}

function mergeSort( arrToSort ) {
	
	for ( var i = 0; i < arrToSort.length; i+=2 ) {
		
		if ( arrToSort[ i ] > arrToSort[ i+1 ] ) {
			
			var tmp = arrToSort[ i+1 ];
			arrToSort[ i+1 ] = arrToSort[ i ];
			arrToSort[ i ] = tmp;
		}
	}
	
	for ( var sortedLen = 2; sortedLen <= Math.floor( arrToSort.length / 2); sortedLen*=2 ) {
		
		console.log( "sortedLen: ", sortedLen, arrToSort.length );
		
		for ( var sortDex = 0; sortDex < arrToSort.length; sortDex += sortedLen*2 ) {
			
			console.log( "sortDex: ", sortDex, sortedLen, arrToSort.length );
			
			mergeInPlace( arrToSort, sortDex, sortedLen );
		}
	}
	
	return arrToSort;
}

module.exports = { Merge: mergeInPlace, MergeSort: mergeSort };