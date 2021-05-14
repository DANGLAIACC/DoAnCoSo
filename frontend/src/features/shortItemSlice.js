const { createSlice } = require("@reduxjs/toolkit");

const shortItemSlice = createSlice({
  name: "shortItems",
  initialState: {
    isLoading: true,
    hasError: false,
    lstShortItem: [],
  },
  reducers: {
    loading: (state) => {
      state.isLoading = true;
    },
    loadSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.hasError = false;
      state.lstShortItem = payload;
    },
    loadError: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});
const { reducer, actions } = shortItemSlice;
export const { loading, loadError, loadSuccess } = actions;
export default reducer;
