const getcontacts = (state) => state.data.contacts;
const getinputValue = (state) => state.data.inputValue;
const getVisibleContacts = (state) => {
  const inputValue = getinputValue(state);
  const contacts = getcontacts(state);
  const normalizedFilter = inputValue.toLowerCase();
  if (contacts.length === 0) {
    return;
  } else {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
};

const selectors = { getcontacts, getinputValue, getVisibleContacts };

export default selectors;
