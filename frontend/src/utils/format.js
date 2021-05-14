import React from "react";

export const renderStar = (number) => {
  const result = [];
  for (let i = 0; i < number; i++) {
    result.push(<i className="ico-ystar" key={i}></i>);
  }
  const tru = 5 - number;
  for (let i = 0; i < tru; i++) {
    result.push(<i className="ico-gstar" key={i + 5}></i>);
  }
  return result;
};

export const formatMoney = (x) => {
  if (x) return x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + "₫";
};
