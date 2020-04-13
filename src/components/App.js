import React, { Component } from "react";
import { connect } from "react-redux";
import ThemeSelector from "./ThemeSelector";
import PhoneBookPage from "./PhoneBookPage";
import contactsOperations from "../redux/contacts/contactsOperations";
import ThemeContext from "../context/ThemeContext";

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }
  render() {
    return (
      <ThemeContext>
        <ThemeSelector toggleTheme={this.props.toggleTheme} />
        <PhoneBookPage />
      </ThemeContext>
    );
  }
}

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchCotacts,
};

export default connect(null, mapDispatchToProps)(App);
