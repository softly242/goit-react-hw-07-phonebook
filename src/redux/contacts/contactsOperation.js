import { createAsyncThunk } from '@reduxjs/toolkit';
import * as APIcontacts from './APIcontacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await APIcontacts.fetchContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (item, { rejectWithValue }) => {
    try {
      const { data } = await APIcontacts.addContacts(item);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await APIcontacts.deleteContacts(id);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
