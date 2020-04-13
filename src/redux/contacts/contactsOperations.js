import axios from "axios";
import contactsActions from "./contactsActions";

const BASE_URL = "https://goit-phonebook-api.herokuapp.com";
const AUTH_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTk0OTA3NTczMTRkNTAwMTdjODBhZDYiLCJpYXQiOjE1ODY3OTQ2MTN9.tBWVyTuA2Agqcd667Dnfv24MtG6Xjy_FnJLS37ae3-A";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
axios.defaults.headers.post["Content-Type"] = "application/json";

const addContact = (name, number) => (dispatch) => {
  dispatch(contactsActions.addContactRequest());

  axios
    .post("/contacts", { name, number })
    .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
    .catch((error) => dispatch(contactsActions.addContactError(error)));
};

const fetchCotacts = () => (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(contactsActions.fetchContactsSuccess(data)))
    .catch((error) => contactsActions.fetchContactsError(error));
};

const deleteContact = (id) => (dispatch) => {
  dispatch(contactsActions.deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.deleteContactSuccess(id)))
    .catch((error) => dispatch(contactsActions.deleteContactError(error)));
};

export default {
  addContact,
  fetchCotacts,
  deleteContact,
};
