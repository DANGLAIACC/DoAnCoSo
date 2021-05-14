import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios, { setToken } from "../utils/axiosClient";

import { setUserInfo, setLoged } from "../features/loginSlice";

export default function Login() {
  const [isMale, setIsMale] = useState(true);
  const [usrExists, setUsrExists] = useState(false);
  const [isUsrValid, setIsUsrValid] = useState(true);
  const [isPwdValid, setIsPwdValid] = useState(true);
  const [isFullnameValid, setIsFullnameValid] = useState(true);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const [isAddressValid, setIsAddressValid] = useState(true);

  const login = useSelector((state) => state.login);

  const history = useHistory();

  const dispatch = useDispatch();

  const [values, setValues] = useState({
    usr: "",
    pwd: "",
    fullname: "",
    phoneNumber: "",
    address: "",
  });

  useEffect(() => {
    if (login.loged) {
      history.push("/");
    }
    // eslint-disable-next-line
  }, []);

  const renderError = (err) => (
    <div className="tooltiptext" data-tooltiptext={err}>
      <svg
        width="22px"
        height="22px"
        viewBox="0 0 16 16"
        className="bi bi-exclamation-circle"
        fill="currentColor"
        stroke="#dc3545"
        strokeWidth="0.2"
      >
        <path
          fillRule="evenodd"
          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
        />
        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
      </svg>
    </div>
  );

  const warningUsrExists = () => (
    <div
      className="tooltiptext bg-warning"
      data-tooltiptext="Tên đăng nhập đã tồn tại."
    >
      <svg
        width="22px"
        height="22px"
        viewBox="0 0 16 16"
        className="bi bi-exclamation-triangle"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 5zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
        />
      </svg>
    </div>
  );

  const handleLogin = () => {
    axios
      .get("/getLogin", {
        params: {
          usr: values.usr,
          pwd: values.pwd,
        },
      })
      .then((result) => {
        if(result.data.length>0){
          const data = result.data[0];
          localStorage.setItem("userInfo", JSON.stringify(data));
          setToken(data.accessToken);
          
          dispatch(setLoged(true));
          dispatch(setUserInfo(data));
          history.push("/");
        }
        else{
          alert("Đăng nhập thất bại");
          setValues({
            usr: "",
            pwd: ""
          })
        }
      })
      .catch((err) => {
        alert("Đăng nhập thất bại");
      });
  };
  const handleLogUp = () => {
    console.log("click dang ky");
    // Kiểm tra nếu trống thì set false cho state
    const { usr, pwd, fullname, phoneNumber, address } = values;
    const gender = isMale;

    setIsUsrValid(usr.length > 0);
    setIsPwdValid(pwd.length > 0);
    setIsFullnameValid(fullname.length > 0);
    setIsPhoneNumberValid(phoneNumber.length === 10);
    setIsAddressValid(address.length > 0);

    if (
      isUsrValid &&
      isPwdValid &&
      isFullnameValid &&
      isPhoneNumberValid &&
      isAddressValid
    ) {
      axios
        .post("/addUser", {
          usr: usr,
          pwd: pwd,
          fullname: fullname,
          phoneNumber: phoneNumber,
          address: address,
          gender: gender,
          roles: 0,
        })
        .then((result) => {
          const { data } = result;
          /* backend trả về 1 là user đã tồn tại, 0 đăng ký thành công*/
          if (data[0].adduser === 1) setUsrExists(true);
          //history.push("/Login");
          else
            document
              .getElementById("container")
              .classList.remove("right-panel-active");
        })
        .catch((err) => {
          console.log("Đăng ký thành viên thất bại: " + err);
        });
    }
  };

  return (
    <div className="Login">
      <div className="container" id="container">
        <div className="form-container Log-up-container">
          <form>
            <h1>Tạo tài khoản mới</h1>
            {/* input username */}
            <div className="w-100 position-relative">
              <div className="w-100">
                <input
                  type="text"
                  name="usr"
                  value={values.usr}
                  className={`form-control ${isUsrValid ? "" : "is-invalid"}`}
                  onChange={(e) => {
                    const { name, value } = e.target;
                    setValues({
                      ...values,
                      [name]: value,
                    });
                    setIsUsrValid(value.length > 0);
                  }}
                  onBlur={(e) => setIsUsrValid(e.target.value.length > 0)}
                  placeholder="Nhập Tên đăng nhập"
                  required
                />
              </div>
              {isUsrValid
                ? usrExists
                  ? warningUsrExists()
                  : ""
                : renderError("Tên đăng nhập không được để trống.")}
            </div>
            {/* //input username */}
            
            {/* input password */}
            <div className="w-100 position-relative">
              <div className="w-100">
                <input
                  type="password"
                  name="pwd"
                  className={`form-control ${isPwdValid ? "" : "is-invalid"}`}
                  onChange={(e) => {
                    const { name, value } = e.target;
                    setValues({
                      ...values,
                      [name]: value,
                    });
                    setIsPwdValid(value.length > 0);
                  }}
                  value={values.pwd}
                  onBlur={(e) => setIsPwdValid(e.target.value.length > 0)}
                  placeholder="Nhập Mật khẩu"
                  required
                />
              </div>
              {isPwdValid ? "" : renderError("Mật khẩu không được để trống.")}
            </div>
            {/* //input password */}

            {/* input fullname */}
            <div className="w-100 position-relative">
              <div className="w-100">
                <input
                  type="text"
                  name="fullname"
                  value={values.fullname}
                  className={`form-control ${
                    isFullnameValid ? "" : "is-invalid"
                  }`}
                  onChange={(e) => {
                    const { name, value } = e.target;
                    setValues({
                      ...values,
                      [name]: value,
                    });
                    setIsFullnameValid(value.length > 0);
                  }} 
                  onBlur={(e) => setIsFullnameValid(e.target.value.length > 0)}
                  placeholder="Nhập Họ tên"
                  required
                />
              </div>
              {isFullnameValid
                ? ""
                : renderError("Họ tên không được để trống.")}
            </div>
            {/* //input fullname */}

            {/* input phoneNumber */}
            <div className="w-100 position-relative">
              <div className="w-100">
                <input
                  type="number"
                  name="phoneNumber"
                  value={values.phoneNumber}
                  className={`form-control ${
                    isPhoneNumberValid ? "" : "is-invalid"
                  }`}
                  onChange={(e) => {
                    const { name, value } = e.target;
                    setValues({
                      ...values,
                      [name]: value,
                    });
                    setIsPhoneNumberValid(value.length === 10);
                  }}
                  onBlur={(e) =>
                    setIsPhoneNumberValid(e.target.value.length === 10)
                  }
                  placeholder="Nhập Số điện thoại"
                  required
                />
              </div>
              {isPhoneNumberValid
                ? ""
                : renderError("Số điện thoại phải đủ 10 ký tự.")}
            </div>
            {/* //input phoneNumber */}

            {/* input address */}
            <div className="w-100 position-relative">
              <div className="w-100">
                <input
                  type="text"
                  name="address"
                  value={values.address}
                  className={`form-control ${
                    isAddressValid ? "" : "is-invalid"
                  }`}
                  onChange={(e) => {
                    const { name, value } = e.target;
                    setValues({
                      ...values,
                      [name]: value,
                    });
                    setIsAddressValid(value.length > 0);
                  }}
                  onBlur={(e) => setIsAddressValid(e.target.value.length > 0)}
                  placeholder="Nhập Địa chỉ"
                  required
                />
              </div>
              {isAddressValid
                ? ""
                : renderError("Địa chỉ không được để trống.")}
            </div>
            {/* //input address */}

            <div className="custom-control custom-radio custom-control-inline my-2 text-align-left w-100 pl-0">
              <span className="mx-2">Giới tính:</span>
              <div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="customerGender1"
                    name="customerGender"
                    className="custom-control-input"
                    onChange={() => setIsMale(true)}
                    checked={isMale ? "checked" : ""}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customerGender1"
                  >
                    Nam
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="customerGender2"
                    name="customerGender"
                    className="custom-control-input"
                    onClick={() => {
                      setIsMale(false);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customerGender2"
                  >
                    Nữ
                  </label>
                </div>
              </div>
            </div>
            <button type="button" onClick={handleLogUp}>
              Đăng ký
            </button>
          </form>
        </div>
        <div className="form-container Log-in-container">
          <form action="#">
            <h1>Đăng nhập</h1>
            <div className="social-container">
              <a href="a.html" className="social">
                <i className="fa fa-facebook" />
              </a>
              <a href="a.html" className="social">
                <i className="fa fa-google" />
              </a>
              <a href="a.html" className="social">
                <i className="fa fa-linkedin" />
              </a>
            </div>
            <span>hoặc sử dụng tài khoản</span>

            {/* input username */}
            <div className="w-100 position-relative">
              <div className="w-100">
                <input
                  type="text"
                  name="usr"
                  className={`form-control ${isUsrValid ? "" : "is-invalid"}`}
                  onChange={(e) => {
                    const { name, value } = e.target;
                    setValues({
                      ...values,
                      [name]: value,
                    });
                    setIsUsrValid(value.length > 0);
                  }}
                  value={values.usr}
                  onBlur={(e) => setIsUsrValid(e.target.value.length > 0)}
                  placeholder="Nhập Tên đăng nhập"
                  required
                />
              </div>
              {isUsrValid
                ? ""
                : renderError("Tên đăng nhập không được để trống.")}
            </div>
            {/* //input username */}

            {/* input password */}
            <div className="w-100 position-relative">
              <div className="w-100">
                <input
                  type="password"
                  name="pwd"
                  value={values.pwd}
                  className={`form-control ${isPwdValid ? "" : "is-invalid"}`}
                  onChange={(e) => {
                    const { name, value } = e.target;
                    setValues({
                      ...values,
                      [name]: value,
                    });
                    setIsPwdValid(value.length > 0);
                  }}
                  onBlur={(e) => setIsUsrValid(e.target.value.length > 0)}
                  placeholder="Nhập Mật khẩu"
                  required
                />
              </div>
              {isPwdValid ? "" : renderError("Mật khẩu không được để trống.")}
            </div>
            {/* //input password */}

            <a href="a.html">Quên mật khẩu</a>
            <button type="button" onClick={handleLogin}>
              Đăng nhập
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Bạn đã có tài khoản?</h1>
              <p>Để kết nối với chúng tôi, vui lòng đăng nhập.</p>
              <button
                className="ghost"
                id="Login"
                onClick={() =>
                  document
                    .getElementById("container")
                    .classList.remove("right-panel-active")
                }
              >
                Đăng nhập
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Khách hàng mới?</h1>
              <p>Đăng ký thông tin và tham gia cùng chúng tôi</p>
              <button
                className="ghost"
                id="LogUp"
                onClick={() =>
                  document
                    .getElementById("container")
                    .classList.add("right-panel-active")
                }
              >
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
