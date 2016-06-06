react-simpletimepicker
======================
A simple time picker React.js component. 

It currently supports hours : minutes : am/pm

This project started as a fork of https://github.com/YouCanBookMe/react-datetime, simplified considerably to support time selection in 12-hour (AM/PM) format.

Usage
===============================

Installation :
```
npm install react-simpletimepicker
```

[React.js](http://facebook.github.io/react/) and [Moment.js](http://momentjs.com/) are peer dependencies for react-datetime. These dependencies are not installed along with react-datetime automatically, but your project needs to have them installed in order to make the datetime picker work.

Then
```javascript
require('react-simpletimepicker');

...

render: function() {
  return <SimpleTimePicker />;
}
```


Running local example using webpack
===================================
Install peer dependencies: 
```
npm install moment react-dom
```

Start webpack server on port 8080: 
```
npm run-script dev
```

Open http://localhost:8080


Running unit tests
==================
```
npm test
```
