import React from "react";
import { NavLink } from "react-router-dom";
import { formatMoney } from "../utils/format";
export default function SameVersionItem(props) {
  const { item } = props;
  return (
    <div>
      <NavLink
        className="item i1"
        activeClassName="active"
        to={`/dtdd/${item.id}/${item.manu_id}-${item.version_id}${item.url === "" ? "" : "-" + item.url
          }`}
      >
        <span>
          <i className="ico-opt"></i>
          {item.text}
        </span>
        <strong>{formatMoney(item.price)}</strong>
      </NavLink>
    </div>
  );
}
