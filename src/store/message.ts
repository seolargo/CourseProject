import {createSlice} from '@reduxjs/toolkit';

const messageSlice = createSlice({
  name: 'message',
  initialState: {
    messages: 'Initial message',
  },
  /*
    A "slice" refers to a portion of your application's state 
    and 
    the corresponding set of actions and reducers that operate on that state. 
    A slice typically includes a reducer function and a set of action creators that are related to that specific piece of state.
  */
  reducers: {
    setMessage(state, action) {
      state.messages = action.payload;
    },
  },
});

export const {setMessage} = messageSlice.actions;
export default messageSlice.reducer;
