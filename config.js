const COMPARISONS = {
	LESS_THAN: -1,
	EQUAL: 0,
	GRTR_THAN: 1
};

var defaultOptions = {
	
	reverse: false,
	customAccessor: undefined,										// undefined for primitives,
	// customAccessor: function( item ) { return item.[...] },		// custom method for getting nested value
	// customAccessor: "someProp.someSubProp.nestedProps",			// dot notation string for object (gets converted to func)
	customComparator: undefined
};

var _processOpts = function( opts ) {
	
	opts = opts || {};
	return Object.assign( {}, defaultOptions, opts );
}

module.exports = {
	
	defaultOptions: defaultOptions,
	COMPARISONS: COMPARISONS,
	_processOpts: _processOpts
}