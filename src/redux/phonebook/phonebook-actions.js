import { createAction } from "@reduxjs/toolkit";

const handleSubmit = createAction("contact/Submit");

const deleteContact = createAction("contact/Delete");

const inputChange = createAction("contact/inputChange");

const fatchContactsRequest = createAction("contact/fatchContactsRequest");

const fatchContactsSuccess = createAction("contact/fatchContactsSuccess");

const fatchContactsError = createAction("contact/fatchContactsError");

const setContactRequest = createAction("contact/setContactsRequest");

const setContactSuccess = createAction("contact/setContactsSucces");

const setContactError = createAction("contact/setContactsError");

const actions = {
  handleSubmit,
  deleteContact,
  inputChange,
  fatchContactsRequest,
  fatchContactsSuccess,
  fatchContactsError,
  setContactRequest,
  setContactSuccess,
  setContactError,
};
export default actions;
