import React from "react";
import { renderStar, formatMoney } from "../utils/format";
import { Link } from "react-router-dom";

export default function PhoneItem(props) {
  const { item } = props;

  const baseUrl = `https://cdn.tgdd.vn/Products/Images/42/${item.id}/${item.img_small}-600x600.jpg`;
  return (
    <Link
      to={`/dtdd/${item.id}/${item.manu_id}-${item.version_id}${item.url === "" ? "" : "-" + item.url
        }`}
      className="large"
    >
      <img src={baseUrl} alt="a" />
      <h3>{item.phone_name}</h3>
      <div className="price">
        <strong>{formatMoney(item.price)}</strong>
      </div>
      <div className="ratingresult">
        {renderStar(item.average)}
        <span>{item.total} đánh giá</span>
      </div>
      <div className="promo noimage">
        <p>
          Giảm thêm <b>9.000.000₫</b>
        </p>
      </div>
      <label className="installment">Trả góp 0%</label>
    </Link>
  );
}
