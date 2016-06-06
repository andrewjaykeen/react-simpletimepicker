'use strict';
var React = require('react');

var SimpleTimePicker = React.createClass({
	
	render: function() {
        var DOM = React.DOM;
		return DOM.div({ className: 'simple-time-picker'}, [
			DOM.button({ key:'up', className: 'rdtBtn', type: 'button' }, '▲' ),
			DOM.div({ key:'c', className: 'test' }, 'hello' ),
			DOM.button({ key:'do', className: 'rdtBtn', type: 'button' }, '▼' )
		]);
	}
});

module.exports = SimpleTimePicker;
