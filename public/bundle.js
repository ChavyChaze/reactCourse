/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	var GreeterMessage = React.createClass({
	  displayName: "GreeterMessage",

	  render: function render() {
	    var props = this.props;
	    var name = props.name;
	    var message = props.message;

	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "h1",
	        null,
	        "Hello ",
	        name,
	        "!"
	      ),
	      React.createElement(
	        "p",
	        null,
	        message
	      )
	    );
	  }
	});

	var GreeterForm = React.createClass({
	  displayName: "GreeterForm",

	  onFormSubmit: function onFormSubmit(e) {
	    e.preventDefault();

	    var refs = this.refs;
	    var updates = {};
	    var name = refs.name.value;
	    var message = refs.message.value;

	    if (name.length > 0 || message.length > 0) {
	      refs.name.value = "";
	      refs.message.value = "";
	      updates.name = name;
	      updates.message = message;
	    }
	    this.props.onNewData(updates);
	  },
	  render: function render() {
	    return React.createElement(
	      "form",
	      { onSubmit: this.onFormSubmit },
	      React.createElement(
	        "div",
	        null,
	        React.createElement("input", { type: "text", ref: "name", placeholder: "Enter name" })
	      ),
	      React.createElement(
	        "div",
	        null,
	        React.createElement("textarea", { ref: "message", placeholder: "Enter message" })
	      ),
	      React.createElement(
	        "div",
	        null,
	        React.createElement(
	          "button",
	          null,
	          "Submit"
	        )
	      )
	    );
	  }
	});

	var Greeter = React.createClass({
	  displayName: "Greeter",

	  getDefaultProps: function getDefaultProps() {
	    return {
	      name: "React",
	      message: "This is from a component"
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      name: this.props.name,
	      message: this.props.message
	    };
	  },
	  handleNewData: function handleNewData(updates) {
	    this.setState({
	      name: updates.name ? updates.name : this.state.name,
	      message: updates.message ? updates.message : this.state.message
	    });
	  },
	  render: function render() {
	    var state = this.state;
	    var name = state.name;
	    var message = state.message;
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(GreeterMessage, { name: name, message: message }),
	      React.createElement(GreeterForm, { onNewData: this.handleNewData })
	    );
	  }
	});

	var firstName = "Vitaliy";
	var defaultMessage = "A component";

	ReactDOM.render(React.createElement(Greeter, { name: firstName, message: defaultMessage }), document.getElementById("app"));

/***/ }
/******/ ]);