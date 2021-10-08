import axios from "axios";

axios.defaults.baseURL = `http://localhost:3000`;

export async function getContacts() {
  const { data } = await axios.get("/database/Contacts");
  return data.contacts;
}

export async function setContacts(newcontacts) {
  const { data } = await axios.put("/database/Contacts", {
    contacts: newcontacts,
  });
  return data;
}
