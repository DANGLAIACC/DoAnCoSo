import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "../../utils/axiosClient";

export default function Shipping() {
  const [isMale, setIsMale] = useState(true);
  const [address] = useState(true);

  const [receiver, setReceiver] = useState(false);
  const [phoneBook, setPhoneBook] = useState(false);
  const [anotherPhone, setAnotherPhone] = useState(false);
  const [vat, setVat] = useState(false);
  const [userInfo, setUserInfo] = useState({
    usr: "",
    fullname: "",
    phonenumber: "",
    address: "",
  });

  const { loged } = useSelector((s) => s.login);
  const { cart } = useSelector((s) => s.cart);
  const { invoiceId } = useSelector((state) => state.constants);

  const history = useHistory();
  const userInfoLocal = JSON.parse(localStorage.getItem("userInfo"));

  const dispatch = useDispatch();

  const tongTien = cart.reduce(function (sum, item) {
    return sum + item.price * item.quantity;
  }, 0);

  useEffect(() => {
    if (!loged) {
      history.push("/Login");
    } else if (cart.length < 1) {
      history.push("/");
    } else {
      setUserInfo({
        usr: userInfoLocal.usr,
        fullname: userInfoLocal.fullname,
        phonenumber: userInfoLocal.phonenumber,
        address: userInfoLocal.address,
      });
    }
    // eslint-disable-next-line
  }, []);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };
  const handleDatHang = () => {
    axios
      .post("/addInvoice", {
        usr: userInfo.usr,
        address: userInfo.address,
        fullname: userInfo.fullname,
        phonenumber: userInfo.phonenumber,
        pay: tongTien,
        note: "ghi chu gi do",

        modalId: cart[0].id,
        colorId: cart[0].lstColor[cart[0].indexColor].id,
        quantity: cart[0].quantity,
        price: cart[0].price,
      })
      .then((result) => {
        dispatch({
          type: "constants/setInvoiceId",
          payload: {
            invoiceId: result.data[0].addinvoice,
          },
        });
        alert("Đặt hàng thành công");
      })
      .catch((err) => {
        console.log("Đặt hàng thất bại: " + err);
      });
    for (var i = 1; i < cart.length; i++) {
      axios
        .post("/addInvoiceMore", {
          invoiceId: invoiceId,
          modalId: cart[i].id,
          colorId: cart[i].lstColor[cart[i].indexColor].id,
          quantity: cart[i].quantity,
          price: cart[i].price,
        })
        .then((result) => {
          console.log("Thêm đơn hàng thành công");
        })
        .catch((err) => {
          console.log("Đặt hàng thất bại  hhj  : " + err);
        });
    }
  };

  return (
    <div className="shipping mx-auto">
      <h3 className="text-center">Điền thông tin người nhận</h3>
      <div className="shipping__user text-center">
        <div className="shipping__gender text-left">
          <label
            className={isMale ? "active" : ""}
            onClick={() => {
              setIsMale(true);
            }}
          >
            <i className="ico-radio" />
            Anh
          </label>
          <label
            className={isMale ? "" : "active"}
            onClick={() => {
              setIsMale(false);
            }}
          >
            <i className="ico-radio" />
            Chị
          </label>
        </div>
        <div className="shipping__info">
          <div className="container">
            <div className="row">
              <div className="col-md-6 pl-0">
                <input
                  type="text"
                  name="fullname"
                  onChange={(e) => handleChange(e)}
                  placeholder="Họ và tên"
                  value={userInfo.fullname}
                />
              </div>
              <div className="col-md-6 pr-0">
                <input
                  type="tel"
                  name="phonenumber"
                  onChange={(e) => handleChange(e)}
                  value={userInfo.phonenumber}
                  placeholder="Số điện thoại"
                  maxLength={10}
                />
              </div>
              <div className="col-12 px-0">
                <input
                  type="text"
                  name="address"
                  onChange={(e) => handleChange(e)}
                  value={userInfo.address}
                  className="saveinfo"
                  placeholder="Yêu cầu khác (Địa chỉ)"
                  maxLength={300}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="shipping__more text-left my-2">
          <p>
            <b>Để được phục vụ nhanh hơn</b>, hãy chọn thêm:
          </p>
          <label className={address ? "active" : ""}>
            <i className="ico-radio" />
            Giao hàng tận nơi
          </label>
          <label className={address ? "" : "active"}>
            <i className="ico-radio" />
            Nhận tại siêu thị
          </label>

          <div className={address ? "address-more" : "d-none"}>
            <div className="address-detail d-flex flex-wrap">
              <div className="address__city dropdown">
                <span>Hồ Chí Minh</span>
              </div>
              <div className="address__district dropdown ml-auto">
                <span>Quận 2</span>
              </div>
              <div className="address__ward dropdown">
                <span>Phường Bình An</span>
              </div>
              <div className="ml-auto d-flex align-items-end">
                <input
                  type="text"
                  placeholder="Số nhà, tên đường"
                  className="my-0"
                />
              </div>
            </div>
            <div className="address__time">
              <p>CHỌN THỜI GIAN NHẬN HÀNG</p>
              <div className="address__time__content">
                <p>Miễn phí giao hàng</p>
                <div className="d-flex">
                  <div className="address__time__date dropdown">
                    <span>Hôm nay 29/10</span>
                  </div>
                  <div className="address__time__hour dropdown ml-auto">
                    <span>Trước 17h</span>
                  </div>
                </div>
              </div>
              <label
                className={receiver ? "active" : ""}
                onClick={() => setReceiver(!receiver)}
              >
                <i className="ico-checkbox" />
                Gọi người khác nhận hàng nếu có
              </label>{" "}
              <label
                className={phoneBook ? "active" : ""}
                onClick={() => setPhoneBook(!phoneBook)}
              >
                <i className="ico-checkbox" />
                Chuyển danh bạ, dữ liệu qua máy mới
              </label>{" "}
              <label
                className={anotherPhone ? "active mr-5" : "mr-5"}
                onClick={() => setAnotherPhone(!anotherPhone)}
              >
                <i className="ico-checkbox" />
                Mang thêm điện thoại khác để xem
              </label>
              <label
                className={vat ? "active mr-5" : "mr-5"}
                onClick={() => setVat(!vat)}
              >
                <i className="ico-checkbox" />
                Xuất hóa đơn cho công ty
              </label>
            </div>
          </div>
          <div className={address ? "shop-more" : "d-none"}></div>
        </div>

        <div
          className="btn mt-3 mx-auto btn-success"
          onClick={() => handleDatHang()}
        >
          Đặt hàng
        </div>
      </div>
    </div>
  );
}
