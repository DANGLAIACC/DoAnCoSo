import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../utils/axiosClient";

import { formatMoney } from "../../utils/format";
import SameVersionItem from "../SameVersionItem";
import { addProduct } from "../../features/cartSlice";

export default function PhoneDetailCenter() {
  const item = useSelector((state) => state.currentPhone).detail;
  const lstColor = useSelector((state) => state.currentPhone).lstColor;
  const dispatch = useDispatch();

  const [listSameVersion, setListSameVersion] = useState([]);

  useEffect(() => {
    if (item.version_id !== "")
      axios
        .get("/getPhoneSameVersion", {
          params: {
            version_id: item.version_id,
          },
        })
        .then((result) => {
          setListSameVersion(result.data);
        })
        .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, [item.version_id]);

  const handleMuaNgay = () => {
    dispatch(
      addProduct({
        id: item.id,
        url: item.url,
        phonename: item.phonename,
        price: item.price,
        lstColor: lstColor,
        restUrl: item.restUrl,
        indexColor: 0,
      })
    );
  };
  const settingSlider = {
    dots: false,
    // infinite: listSameVersion > 0,
    speed: 500,
    slidesToShow: listSameVersion.length > 1 ? 2 : 1,
    swipeToSlide: true,
    focusOnSelect: true,
  };

  return (
    <div className="phone-detail__center">
      <div className="version">
        Bạn đang xem phiên bản: <b>{item.phonename}</b>
      </div>
      <div className="list-version">
        <Slider {...settingSlider} initialSlide={3}>
          {listSameVersion.map((s) => (
            <SameVersionItem item={s} key={s.id} />
          ))}
        </Slider>
      </div>
      <div className="price">
        <strong>{formatMoney(item.price)}</strong>
        <label className="installment">Trả góp 0%</label>
      </div>
      <div className="promotion">
        <strong>Khuyến mãi</strong>
        <div className="promotion__info">
          <span>
            Trả góp 0% thẻ tín dụng
            <a href="https://www.thegioididong.com/tin-tuc/samsung-galaxy-voi-uu-dai-tra-gop-qua-the-tin-dung-1246400">
              Xem chi tiết
            </a>
          </span>
          <span>
            Thu cũ đổi mới - Lên đời Samsung sành điệu (Áp dụng đặt và nhận hàng
            từ 10 - 31/8)
            <a href="https://www.thegioididong.com/thu-cu-doi-moi">
              Xem chi tiết
            </a>
          </span>
          <span>
            Tặng 2 suất mua Đồng hồ thời trang giảm 40% (không áp dụng thêm
            khuyến mãi khác)
            <a href="https://www.thegioididong.com/tin-tuc/san-dong-ho-deo-tay-thoi-thuong-gia-re-het-hon-1266764">
              Xem chi tiết
            </a>
          </span>
          <span>
            Phụ kiện mua kèm giảm 20% (không áp dụng phụ kiện hãng, không áp
            dụng đồng thời KM khác)
          </span>
        </div>
        {/* //promotion */}
        <hr />
        <div className="vip-service">
          <b>
            Chọn thêm các dịch vụ <b>miễn phí chỉ có ở TGDĐ</b>
          </b>
          <div className="o1">
            <a className="first check" href="a.html">
              <i className="ico-checkbox"></i>
              <span>Giao ngay từ cửa hàng gần bạn nhất</span>
            </a>
          </div>
          <div className="o2">
            <a className="first" href="a.html">
              <i className="ico-checkbox"></i>
              <span>Chuyển danh bạ, dữ liệu qua máy mới</span>
            </a>
          </div>

          <div className="o3">
            <div className="first ">
              <i className="ico-checkbox"></i>
              <span>Mang nhiều màu để lựa chọn</span>
            </div>
          </div>
          <div className="o4">
            <a className="first" href="a.html">
              <i className="ico-checkbox"></i>
              <span>Mang thêm điện thoại khác để bạn xem</span>
            </a>
          </div>
        </div>
      </div>
      <button
        className="btn-mua-ngay"
        data-toggle="modal"
        data-target="#cartModal"
        onClick={handleMuaNgay}
      >
        <b>MUA NGAY</b>
        <span>Giao tận nơi hoặc nhận tại siêu thị</span>
      </button>
    </div>
  );
}
