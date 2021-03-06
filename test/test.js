var assert = require('assert');
var _ = require('lodash');

var sortof = require('../index');


var bubbleSort = require('bubble-sort');
var MergeSort = require('../MergeSort');

describe( 'Sortof', function() {

	var testArr = [ 4, 3, 3, 7, 9, 5, 3, 7, 9, 5, 435, 76 ];

	/*
	describe( 'Bubble Sort', function() {
		
		it( 'should sort when using no custom functionality or methods', function( done ) {
			
			var inArr = _.shuffle( testArr );
			
			console.time("Bubble Sort Time");
			inArr = sortof.bubbleSort( inArr, { subLen: inArr.length, subStart: 0 } );
			console.timeEnd("Bubble Sort Time");
			
			var expArr = [ 3, 3, 3, 4, 5, 5, 7, 7, 9, 9, 76, 435 ];
			
			assert.equal( true, _.isEqual( expArr, inArr ) );
			
			var jsSortArr = _.shuffle( testArr );
			
			console.time("JS Sort Time");
			jsSortArr = jsSortArr.sort( function(a,b) { return a-b; } );
			console.timeEnd("JS Sort Time");
			
			var ascending;
			var jsSortArrB = _.shuffle( testArr );
			console.time("NPM Bubble-Sort Time");
			ascending = bubbleSort( jsSortArrB );
			console.timeEnd("NPM Bubble-Sort Time");
			
			done();
			
		} );

		
		it( 'should sort when using custom comparator', function( done ) {
			
			var inArr = _.shuffle( testArr );
			
			inArr = sortof.bubbleSort( inArr, { customComparator: function( a, b ) { return a-b; } } );
			
			var expArr = [ 3, 3, 3, 4, 5, 5, 7, 7, 9, 9, 76, 435 ];
			
			assert.equal( true, _.isEqual( expArr, inArr ) );
			
			done();
			
		} );
		
		
		it( 'should reverse when using opposite custom comparator', function( done ) {
			
			var inArr1 = _.shuffle( testArr ),
				inArr2 = _.shuffle( testArr );
			
			inArr1 = sortof.bubbleSort( inArr1, { customComparator: function( a, b ) { return a-b; } } );
			inArr2 = sortof.bubbleSort( inArr1, { customComparator: function( a, b ) { return b-a; } } );
			
			assert.equal( true, _.isEqual( inArr1, inArr2.reverse() ) );
			
			done();
			
		} );
		
	} );
	
	describe( 'Quick Sort', function() {
		
		it( 'should sort when using no custom functionality or methods', function( done ) {
		
			var inArr = [ 123,534,56,768,5,34,67,87,789,56,34,2,456,3,675,87,5,3,5,7,6,3,4,7,9,4,2,23,6,675,5,3,23,65,565,72,5,7,7,3,5,8,3,1,6,8,0,7,5,3,4,7,9,9,6,5 ];
			
			var testArr = inArr.slice(0, inArr.length );
			
			console.time("QuickSort Time");
			inArr = sortof.quickSort( testArr );
			console.timeEnd("QuickSort Time");
			
			var expArr = _.shuffle( inArr );
			
			console.time("JS Sort Time pt2");
			expArr = expArr.sort( function(a,b) { return a-b; } );
			console.timeEnd("JS Sort Time pt2");
			console.log( inArr );
			assert.equal( true, _.isEqual( expArr, inArr ) );
			
			done();
		
		} );
		
	} );
	*/

	describe( 'Merge', function() {
		
		it( 'should merge when using no custom functionality or methods', function( done ) {
		
			var inArr = [ 123,534,56,768,5,34,67,87,789,56,34,2,456,3,675,87,5,3,5,7,6,3,4,7,9,4,2,23,6,675,5,3,23,65,565,72,5,7,7,3,5,8,3,1,6,8,0,7,5,3,4,7,9,9,6,5 ];
			
			var testArr = inArr.slice(0, inArr.length );
			
			console.time("Merge Time");
			inArr = MergeSort.Merge( [  1, 3, 5, 7, 9,
										0, 2, 4, 6, 8  ], 0, 5 );
			console.timeEnd("Merge Time");
			
			var expArr = _.shuffle( inArr );
			
			assert.equal( true, _.isEqual( [ 0,1,2,3,4,5,6,7,8,9 ], inArr ) );
			
			done();
		
		} );
		
	} );

	describe( 'Merge Sort', function() {
		
		it( 'should sort when using no custom functionality or methods', function( done ) {
		
			var inArr = [ 123,534,56,768,5,34,67,87,789,56,34,2,456,3,675,87,5,3,5,7,6,3,4,7,9,4,2,23,6,675,5,3,23,65,565,72,5,7,7,3,5,8,3,1,6,8,0,7,5,3,4,7,9,9,6,5 ];
			
			var testArr = inArr.slice(0, inArr.length );
			
			console.time("Mergesort Time");
			inArr = MergeSort.MergeSort( testArr );
			console.timeEnd("Mergesort Time");
			
			var expArr = _.shuffle( inArr );
			
			console.time("JS Sort Time pt2");
			expArr = expArr.sort( function(a,b) { return a-b; } );
			console.timeEnd("JS Sort Time pt2");
			console.log( inArr );
			assert.equal( true, _.isEqual( expArr, inArr ) );
			
			done();
		
		} );
		
	} );

} );