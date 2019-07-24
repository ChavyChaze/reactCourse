const React = require("react");

const GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    const refs = this.refs;
    const updates = {};
    const name = refs.name.value;
    const message = refs.message.value;

    if (name.length > 0 || message.length > 0) {
      refs.name.value = "";
      refs.message.value = "";
      updates.name = name;
      updates.message = message;
    }
    this.props.onNewData(updates);
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="Enter name" />
        </div>
        <div>
          <textarea ref="message" placeholder="Enter message" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
});

module.exports = GreeterForm;