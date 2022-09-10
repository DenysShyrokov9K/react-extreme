import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const API_URL = '/api/data/contacts/ContactsData';

const initialState = {
  contacts: [],
  contactContent: 1,
  contactSearch: '',
  editContact: false,
  currentFilter: 'show_all',
};

interface StateType {
  contacts: any[];
  contactContent: number;
  contactSearch: string;
  editContact: boolean;
  currentFilter: string;
}

export const ContactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    getContacts: (state : StateType, action) => {
      state.contacts = action.payload;
    },
    SearchContact: (state : StateType, action) => {
      state.contactSearch = action.payload;
    },
    SelectContact: (state : StateType, action) => {
      state.contactContent = action.payload;
    },
    DeleteContact: (state : StateType, action) => {
      const index = state.contacts.findIndex((contact) => contact.id === action.payload);
      state.contacts.splice(index, 1);
    },
    toggleStarredContact: (state : StateType, action) => {
      state.contacts = state.contacts.map((contact) =>
        contact.id === action.payload ? { ...contact, starred: !contact.starred } : contact,
      );
    },
    isEdit: (state) => {
      state.editContact = !state.editContact;
    },
    setVisibilityFilter: (state, action) => {
      state.currentFilter = action.payload;
    },
    UpdateContact: {
      reducer: (state : StateType, action) => {
        state.contacts = state.contacts.map((contact) =>
          contact.id === action.payload.id
            ? { ...contact, [action.payload.field]: action.payload.value }
            : contact,
        );
      },//@ts-ignore
      prepare: (id, field, value) => {
        return {
          payload: { id, field, value },
        };
      },
    },
    addContact: {
      reducer: (state, action) => {//@ts-ignore
        state.contacts.push(action.payload);
      },//@ts-ignore
      prepare: (
        id,
        firstname,
        lastname,
        image,
        department,
        company,
        phone,
        email,
        address,
        notes,
      ) => {
        return {
          payload: {
            id,
            firstname,
            lastname,
            image,
            department,
            company,
            phone,
            email,
            address,
            notes,
            frequentlycontacted: false,
            starred: false,
            deleted: false,
          },
        };
      },
    },
  },
});

export const {
  getContacts,
  SearchContact,
  isEdit,
  SelectContact,
  DeleteContact,
  toggleStarredContact,
  UpdateContact,
  addContact,
  setVisibilityFilter,
} = ContactSlice.actions;

export const fetchContacts = () => async (dispatch : () => undefined) => {
  try {
    const response = await axios.get(`${API_URL}`);//@ts-ignore
    dispatch(getContacts(response.data));
  } catch (err : any) {
    throw new Error(err);
  }
};

export default ContactSlice.reducer;
