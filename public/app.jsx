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

const firstName = "Vitaliy";
const defaultMessage = "A component";

ReactDOM.render(
  <Greeter name={firstName} message={defaultMessage} />,
  document.getElementById("app")
);
