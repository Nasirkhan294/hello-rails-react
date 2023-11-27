import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = '/api/greetings/random';
const initialState = {
  greeting: '',
  isLoading: true,
};

export const fetchRandomGreeting = createAsyncThunk('greeting/fetchRandomGreeting', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch greeting');
  }
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomGreeting.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRandomGreeting.fulfilled, (state, action) => {
        state.isLoading = false;
        state.greeting = action.payload;
      })
      .addCase(fetchRandomGreeting.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default greetingSlice.reducer;