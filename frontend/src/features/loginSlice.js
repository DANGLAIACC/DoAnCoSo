const { createSlice } = require("@reduxjs/toolkit");

const userInfo = localStorage.getItem("userInfo");

const loginSlice = createSlice({
  name: "login",
  initialState: {
    loged: userInfo ? userInfo.usr !== "" : false,
    userInfo: userInfo ? JSON.parse(userInfo) : {},
  },
  reducers: {
    setLoged: (state, action) => {
      state.loged = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setLoged, setUserInfo } = loginSlice.actions;
export default loginSlice.reducer;
