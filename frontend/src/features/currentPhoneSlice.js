const { createSlice } = require("@reduxjs/toolkit");
const constantSlice = createSlice({
  name: "currentPhone",
  initialState: {
    detail: {},
    lstColor: [],
  },
  reducers: {
    setPhoneDetail: (state, action) => {
      state.detail = action.payload;
    },
    setLstColor: (state, action) => {
      state.lstColor = action.payload;
    },
  },
});

export const { setPhoneDetail, setLstColor } = constantSlice.actions;
export default constantSlice.reducer;
