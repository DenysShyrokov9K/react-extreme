import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const API_URL = '/api/data/chat/ChatData';

const initialState = {
  chats: [],
  chatContent: 1,
  chatSearch: '',
};

interface StateType  {
  chats: any[];
  chatContent: number;
  chatSearch: string;
}

export const ChatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    getChats: (state : StateType, action) => {
      state.chats = action.payload;
    },
    SearchChat: (state : StateType, action) => {
      state.chatSearch = action.payload;
    },
    SelectChat: (state : StateType, action) => {
      state.chatContent = action.payload;
    },
    sendMsg: {
      reducer: (state : StateType, action) => {
        state.chats = state.chats.map((chat : any) =>
          chat.id === action.payload.id
            ? {
                ...chat,
                ...chat.chatHistory[0][1].to.push(action.payload.chatMsg),
              }
            : chat,
        );
      },//@ts-ignore
      prepare: (id, chatMsg) => {
        return {
          payload: { id, chatMsg },
        };
      },
    },
  },
});

export const { SearchChat, getChats, sendMsg, SelectChat } = ChatSlice.actions;

export const fetchChats = () => async (dispatch : any) => {
  try {
    const response = await axios.get(`${API_URL}`);
    dispatch(getChats(response.data));
  } catch (err : any) {
    throw new Error(err);
  }
};

export default ChatSlice.reducer;
