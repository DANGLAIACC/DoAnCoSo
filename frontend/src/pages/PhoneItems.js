import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PhoneItem from "../components/PhoneItem";
import { getShortItem } from "../api/getShortItem";
export default function PhoneItems() {
  const dispatch = useDispatch();
  const { lstShortItem } = useSelector((state) => state.lstShortItem);
  const { lstManu } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(getShortItem({ lstManu: lstManu }));
    // eslint-disable-next-line
  }, [lstManu]);

  return (
    <div className="phone">
      <h1 className="h1">Điện thoại nổi bật nhất</h1>

      <ul className="phone__ul">
        <li className="phone__ul__li large">
          <a href="/dtdd/samsung-galaxy-a71">
            <img
              src="https://cdn.tgdd.vn/Products/Images/42/210246/Feature/samsung-galaxy-a71-spec-fixed-720x333.jpg"
              alt="abc"
            />
            <h3>Galaxy A71</h3>
            <div className="d-flex justify-content-space-between">
              <div className="price">
                <strong>10.490.000₫</strong>
              </div>
              <label className="installment">Trả góp 0%</label>
            </div>
            <div className="ratingresult">
              <i className="ico-ystar" />
              <i className="ico-ystar" />
              <i className="ico-ystar" />
              <i className="ico-ystar" />
              <i className="ico-gstar" />
              <span>344 đánh giá</span>
            </div>
          </a>
        </li>
        {(lstShortItem || []).map((item) => (
          <li className="phone__ul__li" key={item.id}>
            <PhoneItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
