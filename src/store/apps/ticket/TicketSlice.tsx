import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const API_URL = '/api/data/ticket/TicketData';

const initialState = {
  tickets: [],
  currentFilter: 'total_tickets',
  ticketSearch: '',
};

interface StateTypte  {
  tickets: any[];
  currentFilter: string;
  ticketSearch: string;
  }

export const TicketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    getTickets: (state : StateTypte, action) => {
      state.tickets = action.payload;
    },
    setVisibilityFilter: (state : StateTypte, action) => {
      state.currentFilter = action.payload;
    },
    SearchTicket: (state : StateTypte, action) => {
      state.ticketSearch = action.payload;
    },
    DeleteTicket: (state : StateTypte, action) => {
      const index = state.tickets.findIndex((ticket : any) => ticket.Id === action.payload);
      state.tickets.splice(index, 1);
    },
  },
});

export const { getTickets, setVisibilityFilter, SearchTicket, DeleteTicket } = TicketSlice.actions;

export const fetchTickets = () => async (dispatch : any) => {
  try {
    const response = await axios.get(`${API_URL}`);
    dispatch(getTickets(response.data));
  } catch (err : any) {
    throw new Error(err);
  }
};

export default TicketSlice.reducer;
