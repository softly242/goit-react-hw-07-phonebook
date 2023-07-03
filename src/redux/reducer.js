import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from 'redux/contacts/contactsSlice';
import { filterReducer } from 'redux/filter/filterSlice';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
