const { createSlice } = require("@reduxjs/toolkit");

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    lstManu: "",
  },
  reducers: {
    setLstManu: (state, action) => {
      // dùng để thay đổi giá trị của lstManu -> gọi về backend
      var thisManu = `'${action.payload}'`;

      switch (state.lstManu.indexOf(thisManu)) {
        case -1:
          // var comma = state.lstManu.length === 0?'':',';
          // state.lstManu = thisManu.concat(comma + state.lstManu);
          state.lstManu = thisManu.concat(',' + state.lstManu);
          break;
        case 0: // hiện ở đầu, xóa thêm dấu ,
          state.lstManu = state.lstManu.replace(`${thisManu},`, "");
          break;
        default:
          state.lstManu = state.lstManu.replace(`,${thisManu}`, "");
          break;
      }
    },
  },
});

export const { setLstManu } = filterSlice.actions;
export default filterSlice.reducer;
