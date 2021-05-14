import React, { useEffect, useState } from "react";

import axios from "../../utils/axiosClient";
import { useDispatch, useSelector } from "react-redux";

export default function PhoneDetailLeft() {
  const { detail } = useSelector((state) => state.currentPhone);

  const dispatch = useDispatch();

  const [listColor, setListColor] = useState([]);

  useEffect(() => {
    if (detail.id !== "")
      axios
        .get("/getColorById", {
          params: {
            modalId: detail.id,
          },
        })
        .then((result) => {
          setListColor(result.data);
          dispatch({
            type: "currentPhone/setLstColor",
            payload: result.data.map((i) => ({
              id: i.id,
              text: i.text,
              img_demo: i.img_demo,
            })),
          });
        })
        .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, [detail.id]);
  return (
    <div className="phone-detail__left">
      <img
        src={
          detail.id
            ? `https://cdn.tgdd.vn/Products/Images/42/${detail.id}/${detail.img_large}-400x460.png`
            : ""
        }
        alt="phone name gi do"
      />
      <span className="phone-detail__span">Xem hình thực tế sản phẩm</span>
      <div className="color-pic">
        <ul className="d-flex justify-content-center">
          {listColor.map((color) => {
            const { id, img_slide } = color;
            return (
              <li
                className="color-pic__li"
                key={color.id}
                data-toggle="modal"
                data-target="#ModalColor"
                onClick={() => {
                  dispatch({
                    type: "constants/setColorId",
                    payload: {
                      id,
                      img_slide,
                    },
                  });
                  // setColorId(color.id);
                }}
              >
                <div>
                  <img
                    alt={color.id}
                    src={`https://cdn.tgdd.vn/Products/Images/42/${detail.id}/${color.img_demo}-180x125.png`}
                  />
                </div>
                {color.text}
              </li>
            );
          })}
          <li className="color-pic__li">
            <div>
              <i alt="a" className="ico-video" />
            </div>
            Video
          </li>

          <li className="color-pic__li">
            <div>
              <i alt="a" className="ico-openBox" />
            </div>
            Mở hộp, k.mãi
          </li>

          <li className="color-pic__li">
            <div>
              <i alt="a" className="ico-360" />
            </div>
            Hình 360<sup>o</sup>
          </li>
        </ul>
      </div>
    </div>
  );
}
