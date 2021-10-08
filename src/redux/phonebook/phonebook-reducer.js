import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./phonebook-actions";

const isLoading = createReducer(false, {
  [actions.fatchContactsRequest]: () => true,
  [actions.fatchContactsSuccess]: () => false,
  [actions.fatchContactsError]: () => false,
});

const contactReducer = createReducer([], {
  [actions.fatchContactsSuccess]: (_, action) => action.payload,
  [actions.handleSubmit]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter((contacts) => !contacts.id.includes(payload)),
});

const inputValueReducer = createReducer("", {
  [actions.inputChange]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts: contactReducer,
  inputValue: inputValueReducer,
  isLoading,
});
