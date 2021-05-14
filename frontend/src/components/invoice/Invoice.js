import React from "react";
import { NavLink } from "react-router-dom";

export default function Invoice() {
  return (
    <div className="invoice">
      <div className="invoice__left">
        <NavLink to="/">Danh sách đơn hàng đã mua</NavLink>
        <NavLink to="/profile">Thông tin cá nhân</NavLink>
      </div>
      <div className="invoice__right"></div>
    </div>
  );
}
