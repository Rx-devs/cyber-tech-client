import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchServices = createAsyncThunk(
  'service/fetchServices',
  async () => {
    const response = await fetch('https://cyber-tech-server.herokuapp.com/services/')
    .then(res=>res.json())
  return response
})

const serviceSlice = createSlice({
  name: 'service',
  initialState: {
    services: [],
    
  },
  reducers: {
    addServices: (state, {payload}) => {
      state.services.push(payload)
    },
    removeServices: (state, { payload }) => {
      state.services = state.services.filter(service => service.id !== payload.id)
    }
  },

  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchServices.fulfilled, (state, action) => {
      // Add user to the state array
      state.services = action.payload;
    })
  },
})


export const { addServices,removeServices } = serviceSlice.actions;

export default serviceSlice.reducer;