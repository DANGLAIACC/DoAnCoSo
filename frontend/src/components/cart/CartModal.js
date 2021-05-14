import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import CartItem from "./CartItem";

export default function CartModal() {
  const history = useHistory();
  const { cart } = useSelector((state) => state.cart);
  return (
    <div className="cart-modal">
      <div
        className="modal fade"
        id="cartModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              {cart.length > 0 ? (
                cart.map((item, key) => <CartItem item={item} key={key} />)
              ) : (
                <div className="cart__empty text-center">
                  <img
                    src="https://salt.tikicdn.com/desktop/img/mascot@2x.png"
                    alt="cart__empty"
                    className="cart__empty__img"
                  />
                  <p className="cart__empty__note">
                    Không có sản phẩm nào trong giỏ hàng của bạn.
                  </p>
                  <button
                    type="button"
                    className="btn p-0 cart__empty__btn text-center"
                    data-dismiss="modal"
                  >
                    TIẾP TỤC MUA SẮM
                  </button>
                </div>
              )}

              {cart.length > 0 ? (
                <button
                  type="button"
                  className="btn p-0 cart__empty__btn text-center"
                  data-dismiss="modal"
                  onClick={() => {
                    history.push("/Shipping");
                  }}
                >
                  Đặt hàng & thanh toán
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
