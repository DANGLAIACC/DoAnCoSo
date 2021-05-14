import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { formatMoney } from "../../utils/format";
import { changeQuantity, removeProduct } from "../../features/cartSlice";

export default function CartItem(props) {
  const { item } = props;
  // console.log("item: ", item);

  const [showLstColor, setShowLstColor] = useState(false);

  const dispatch = useDispatch();
  return (
    <div className="cart__item d-flex">
      <div className="cart__item__img cart__item__img d-flex flex-column">
        <img
          alt={item.phonename}
          src={`https://cdn.tgdd.vn/Products/Images/42/${item.id}/${
            item.lstColor[item.indexColor].img_demo
          }-180x125.png`}
          className="img-fluid"
        />
      </div>
      <div className="cart__item__content w-100 mr-4">
        <div className="cart__item__description">
          <Link
            to={`/dtdd/${item.id}/${item.restUrl}`}
            className="cart__item__name text-decoration-none"
          >
            {item.phonename}
          </Link>
          <div className="d-flex justify-content-between">
            <div
              className="cart__item__color dropdown"
              onClick={() => setShowLstColor(!showLstColor)}
            >
              <span>Màu: {item.lstColor[item.indexColor].text}</span>
              <ul
                className={
                  showLstColor ? "listcolor d-block" : "listcolor d-none"
                }
              >
                {item.lstColor.map((i, index) => (
                  <li
                    className="colorItem"
                    key={index}
                    onClick={() => {
                      // setCurrentColor(i);
                      dispatch({
                        type: "cart/setColorId",
                        payload: {
                          id: item.id,
                          indexColor: index,
                        },
                      });
                    }}
                  >
                    <img
                      src={`https://cdn.tgdd.vn/Products/Images/42/${item.id}/${i.img_demo}-180x125.png`}
                      className="mr-2"
                      alt="i.id"
                    />
                    {i.text}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="btn text-danger d-flex align-items-center"
              onClick={() => {
                dispatch(removeProduct(item.id));
              }}
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-x-circle mr-2"
                fill="#dc3545"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fillRule="evenodd"
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
              Xóa
            </div>
          </div>
        </div>
      </div>
      <div className="cart__item__quantity d-flex">
        <div
          className={`abate ${item.quantity > 1 ? "active" : ""}`}
          onClick={() => dispatch(changeQuantity({ id: item.id, delta: -1 }))}
        />
        <div className="number">{item.quantity}</div>
        <div
          className="augment"
          onClick={() => dispatch(changeQuantity({ id: item.id, delta: 1 }))}
        />
      </div>
      <div className="cart__item__price">
        <b className="d-block text-right">{formatMoney(item.price)}</b>
        <div className="cart__item__discount text-right">
          <del>23.990.000đ</del>
          <span>-27%</span>
        </div>
      </div>
    </div>
  );
}
