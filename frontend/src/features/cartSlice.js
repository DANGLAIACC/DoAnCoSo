const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const phone = action.payload;
      const index = state.cart.findIndex((p) => p.id === phone.id);

      if (index === -1) {
        // sản phẩm chưa tồn tại trong giỏ hàng
        const newItem = { ...phone, quantity: 1 };
        state.cart.push(newItem);
      } else {
        // sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng sản phẩm lên 1 đơn vị
        state.cart[index].quantity++;
      }
    },
    removeProduct: (state, action) => {
      const index = state.cart.findIndex((p) => p.id === action.payload);
      state.cart.splice(index, 1); // mặc định là sản phẩm đã tồn tại
    },
    changeQuantity: (state, action) => {
      const { id, delta } = action.payload;
      const index = state.cart.findIndex((p) => p.id === id);
      state.cart[index].quantity += +delta;
    },
    setColorId: (state, action) => {
      const { id, indexColor } = action.payload;
      const i = state.cart.findIndex((p) => p.id === id);
      state.cart[i].indexColor = indexColor;
    },
  },
});

const { actions, reducer } = cartSlice;
export const {
  addProduct,
  removeProduct,
  changeQuantity,
  setColorId,
} = actions;
export default reducer;
