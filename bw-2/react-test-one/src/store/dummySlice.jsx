const dummySlice = createSlice({
  name: "dummy-name",
  initialState: {
    value: 0,
  },
  reducers: {
    setValue(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setValue } = dummySlice.reducers;

export default dummySlice;
