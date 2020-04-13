import React from "react";
import ContactItem from "./ContactItemContainer";
import PropTypes from "prop-types";
import styles from "./ContactsList.module.css";

const { contactsList } = styles;

const ContactsList = ({ contacts }) => (
  <ul className={contactsList}>
    {contacts.map(({ id }) => (
      <ContactItem key={id} id={id} />
    ))}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ContactsList;
