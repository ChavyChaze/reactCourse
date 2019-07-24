const React = require("react");
const ReactDOM = require("react-dom");

const Greeter = require("Greeter");

const firstName = "Vitaliy";
const defaultMessage = "A component";

ReactDOM.render(
  <Greeter name={firstName} message={defaultMessage} />,
  document.getElementById("app")
);
