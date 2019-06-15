import React, { Component } from "react";
import "../styles/ContactPage.css";
import { Prompt } from "react-router-dom";

class ContactPage extends Component {
  timeOutIndex = 0;

  state = {
    msg: "",
    confirmation: "",
    prompt: false,
    timeOutIndex: 0
  };

  handleChange = e => {
    const msg = e.target.value;
    this.setState({ 
      msg,
      prompt: true
     });
    if (e.target.value.length < 1) {
      this.setState({prompt: false})
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      msg: "",
      confirmation: "Wiadomość wysłana",
      prompt: false,
      timeOutIndex: setTimeout(() => {
          this.setState({
            confirmation: ""
          });
        }, 3000)
    })
  };
  componentWillUnmount() {
    clearTimeout(this.state.timeOutIndex)
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea
            name="msg"
            id="msg"
            cols="50"
            rows="20"
            placeholder="Wpisz wiadomość..."
            value={this.state.msg}
            onChange={this.handleChange}
          />
          <span>{this.state.confirmation}</span>
          <button>Wyślij</button>
        </form>
        <Prompt
          when={this.state.prompt}
          message="Masz niewypełniony fromularz. Czy napewno chcesz opuścić tę stronę"
        />
      </div>
    );
  }
}

export default ContactPage;
