const React = require("react");

const GreeterMessage = require("GreeterMessage");
const GreeterForm = require("GreeterForm");

const Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: "React",
      message: "This is from a component"
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewData: function(updates) {
    this.setState({
      name: updates.name ? updates.name : this.state.name,
      message: updates.message ? updates.message : this.state.message
    });
  },
  render: function() {
    const state = this.state;
    const name = state.name;
    const message = state.message;
    return (
      <div>
        <GreeterMessage name={name} message={message} />
        <GreeterForm onNewData={this.handleNewData} />
      </div>
    );
  }
});

module.exports = Greeter;
