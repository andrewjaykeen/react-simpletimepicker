var SimpleTimePicker = require('../SimpleTimePicker.js');
var React = require('react');
ReactDOM = require('react-dom');

ReactDOM.render(
  React.createElement(SimpleTimePicker, {}),
  document.getElementById('datetime')
);
