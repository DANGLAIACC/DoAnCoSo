import React from "react";
import { renderStar } from "../../utils/format";

export default function EvaluateItem(props) {
  const { item } = props;
  return (
    <div className="evaluate__item">
      <div className="customer__name">
        <b>{item.fullname}</b>
        <p>Đã mua tại TheGioiDiDong.com</p>
      </div>
      <div className="customer__comment">
        {renderStar(item.rate_star)}
        <i>{item.content}</i>
      </div>
      <div className="customer__discuss">
        <i className="ico-like" />
        <a href="ab.html">Hữu ích</a>
        <span>{item.time_up}</span>
      </div>
      {item.handler && item.handler !== "" ? (
        <div className="response">
          <i className="iconcom-logo"></i>
          {item.handler} đã liên hệ hỗ trợ ngày {item.time_resolved}
        </div>
      ) : (
          ""
        )}
    </div>
  );
}
