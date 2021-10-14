import {
  fatchContactsRequest,
  fatchContactsSuccess,
  fatchContactsError,
  setContactRequest,
  setContactSuccess,
  setContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from "./phonebook-actions";

import axios from "axios";

axios.defaults.baseURL = `http://localhost:3000`;

const fatchAllContacts = () => async (dispatch) => {
  dispatch(fatchContactsRequest());
  try {
    const { data } = await axios.get("/contacts");
    dispatch(fatchContactsSuccess(data));
  } catch (error) {
    dispatch(fatchContactsError(error));
  }
};

const addContact = (newcontact) => (dispatch) => {
  dispatch(setContactRequest());
  axios
    .post("/contacts", newcontact)
    .then(({ data }) => dispatch(setContactSuccess(data)))
    .catch((error) => dispatch(setContactError(error)));
};

const deleteContact = (contactId) => (dispatch) => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch((error) => dispatch(deleteContactError(error)));
};

const operati = {
  fatchAllContacts,
  addContact,
  deleteContact,
};

export default operati;
