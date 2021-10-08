import { alert, defaultModules } from "@pnotify/core";
import { useEffect } from "react";
import "@pnotify/core/dist/PNotify.css";
import * as PNotifyMobile from "@pnotify/mobile";
import "@pnotify/mobile/dist/PNotifyMobile.css";
import { connect, useDispatch } from "react-redux";
import actions from "./redux/phonebook/phonebook-actions";
import * as operations from "./redux/phonebook/phonebook-operations";
import { setContacts } from "./redux/phonebook/phonebook-api";

import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import Contacts from "./components/Contacts/Contacts";
import phonebookSelectors from "./redux/phonebook/phonebook-selectors";

import "./App.css";

function App({
  contacts,
  inputValue,
  visibleContacts,
  handleSubmit,
  deleteContact,
  inputChange,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fatchAllContacts());
  }, [dispatch]);

  useEffect(() => {
    if (contacts.length === 0) {
      return;
    } else {
      setContacts(contacts);
    }
  }, [contacts]);

  const submit = (data) => {
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      defaultModules.set(PNotifyMobile, {});
      alert({
        text: `${data.name} is olready in contacts`,
      });
    } else {
      handleSubmit(data);
    }
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <Form submit={submit} />
      <h2>Contacts</h2>
      {contacts.length === 0 ? null : (
        <Filter filterInput={inputChange} filterValue={inputValue} />
      )}
      {contacts.length === 0 ? (
        <p>No Contacts</p>
      ) : (
        <Contacts contacts={visibleContacts} deleteContact={deleteContact} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  contacts: phonebookSelectors.getcontacts(state),
  inputValue: phonebookSelectors.getinputValue(state),
  visibleContacts: phonebookSelectors.getVisibleContacts(state),
});
const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (value) => dispatch(actions.handleSubmit(value)),
  deleteContact: (id) => dispatch(actions.deleteContact(id)),
  inputChange: (event) =>
    dispatch(actions.inputChange(event.currentTarget.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
