import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function HeaderLogin() {
  const loged = useSelector((state) => state.login);

  const checkLocal = localStorage.getItem("userInfo");
  const userInfo = checkLocal ? JSON.parse(checkLocal) : {};

  useEffect(() => {}, [loged]);

  if (userInfo.fullname) {
    const name = userInfo.fullname.substr(userInfo.fullname.lastIndexOf(" "));
    return (
      <Link to="/ClickSignOut" className="text-capitalize">
        Chào {name}
      </Link>
    );
  } else return <Link to="/Login">Đăng nhập</Link>;
}
