const { createSlice } = require("@reduxjs/toolkit");
const constantSlice = createSlice({
  name: "constants",
  initialState: {
    colorId: "",
    lstImgColorSlide: "",
    invoiceId: "",
  },
  reducers: {
    setColorId: (state, action) => {
      state.colorId = action.payload.id;
      state.lstImgColorSlide = action.payload.img_slide;
    },
    setInvoiceId: (state, action) => {
      state.invoiceId = action.payload.invoiceId;
    },
  },
});

export const { setColorId } = constantSlice.actions;
export default constantSlice.reducer;
