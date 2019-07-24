const React = require("react");

const GreeterMessage = React.createClass({
  render: function() {
    const props = this.props;
    const name = props.name;
    const message = props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

module.exports = GreeterMessage;
