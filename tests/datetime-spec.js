// Create the dom before requiring react
var DOM = require( './testdom');
DOM();


// Needs to be global to work in Travis CI
React = require('react');
ReactDOM = require('react-dom');

var SimpleTimePicker = require('../SimpleTimePicker'),
	assert = require('assert'),
	moment = require('moment'),
	TestUtils = require('react-addons-test-utils')
;

var createSimpleTimePicker = function( props ){
	document.body.innerHTML = '<div id="root"></div>';

	ReactDOM.render(
		React.createElement( SimpleTimePicker, props ),
		document.getElementById('root')
	);

	return document.getElementById('root').children[0];
};

describe( 'SimpleTimePicker', function(){
	it( 'Create SimpleTimePicker', function(){
		var component = createSimpleTimePicker({});
		assert( component );
		assert.equal( component.children.length, 3 );
		assert.equal( component.children[0].tagName , 'BUTTON' );
		assert.equal( component.children[1].tagName , 'DIV' );
	});
});
