import actions from "./phonebook-actions";
import { getContacts } from "./phonebook-api";

export const fatchAllContacts = () => async (dispatch) => {
  dispatch(actions.fatchContactsRequest());
  try {
    const contacts = await getContacts();
    dispatch(actions.fatchContactsSuccess(contacts));
  } catch (error) {
    dispatch(actions.fatchContactsError(error.message));
  }
};
