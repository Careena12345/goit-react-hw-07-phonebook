import React from "react";
import { connect } from "react-redux";
import Phonebook from "./PhoneBook";
import ContactsList from "./ContactsList/ContactsListContainer";
import ContactFilter from "./ContactFilter";
import Section from "./Section";
import Notification from "./Notification";
import Spinner from "./Spinner";
import contactsSelectors from "../redux/contacts/contactsSelectors";
import withTheme from "./hoc/withTheme";
import PropTypes from "prop-types";

const PhoneBookPage = ({ items, loading, error, theme }) => (
  <div className={`phoneBook ${theme.config.bodyBg}`}>
    <Section title="Phonebook">
      <Phonebook />
    </Section>
    <Section title="Contacts">
      {loading && <Spinner />}
      {error && <Notification message={error.message} />}
      {items.length > 1 && <ContactFilter />}
      {!error && items.length < 1 ? (
        <Notification message="There is no contact yet..." />
      ) : (
        <ContactsList />
      )}
    </Section>
  </div>
);

PhoneBookPage.propTypes = {
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
  theme: PropTypes.shape({
    config: PropTypes.shape({
      bodyBg: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  items: contactsSelectors.getContactsItems(state),
  loading: contactsSelectors.getLoading(state),
  error: contactsSelectors.getError(state),
});

export default connect(mapStateToProps)(withTheme(PhoneBookPage));
