import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

const title = "World Countries List";

class App extends Component {
  state = {
    test: "A",
    typing: "",
    start: true
  };
  handleChange = e => {
    this.setState({
      typing: e.target.value.toLowerCase()
    });
  };
  handleSelection = start => {
    this.setState({ start });
  };
  render() {
    return (
      <React.Fragment>
        <Header
          title={title}
          value={this.state.typing}
          handleChange={this.handleChange}
          handleSelection={this.handleSelection}
        />
        <Main typing={this.state.typing} start={this.state.start} />
      </React.Fragment>
    );
  }
}

export default App;
