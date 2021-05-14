import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "../utils/axiosClient";

import { renderStar } from "../utils/format";

import PhoneDetailCenter from "../components/phoneDetail/PhoneDetailCenter";
import PhoneDetailRight from "../components/phoneDetail/PhoneDetailRight";
import PhoneDetailLeft from "../components/phoneDetail/PhoneDetailLeft";
import BlogLeft from "../components/phoneDetail/BlogLeft";
import BlogRight from "../components/phoneDetail/BlogRight";
import { useDispatch } from "react-redux";

export default function PhoneDetail() {
  const { modalId, restUrl } = useParams();
  const [phoneDetail, setPhoneDetail] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/getPhoneDetail", {
        params: {
          modalId: modalId,
        },
      })
      .then((result) => {
        const data = result.data[0];

        dispatch({
          type: "currentPhone/setPhoneDetail",
          payload: {
            ...data,
            restUrl: restUrl,
          },
        });
        setPhoneDetail(data);

        document.title = `${result.data[0].phonename} | Giá rẻ, chính hãng`;
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, [modalId]);

  if (phoneDetail)
    return (
      <div className="phone-detail">
        <ul className="phone-detail__breadcrumb">
          <li>
            <Link to="/">Trang chủ</Link>
            <span>›</span>
          </li>
          <li>
            <Link to="/dtdd">Điện thoại </Link>
            <span>›</span>
          </li>
          <li className="brand">
            <Link to="/dtdd-samsung">{phoneDetail.manu_text} </Link>
          </li>
        </ul>

        <div className="phone-detail__row-top d-flex">
          <h1>Điện thoại {phoneDetail.phonename}</h1>
          <div className="rating-result">{renderStar(4)}</div>
        </div>

        <div className="phone-detail__demo">
          <PhoneDetailLeft />
          <PhoneDetailCenter />
          <PhoneDetailRight />
        </div>

        <div className="blog">
          <div className="blog__left">
            <BlogLeft item={phoneDetail} />
          </div>
          <div className="blog__right">
            <BlogRight item={phoneDetail} />
          </div>
          <div className="clear-float"></div>
        </div>
      </div>
    );
  else return <div>Đang đợi phản hồi từ backend</div>;
}
