import React from "react";
import { Link } from "react-router-dom";
import HeaderLogin from "./HeaderLogin";

export default function Header() {
  return (
    <header className="header">
      <div className="header__main">
        <Link
          className="header__main__logo"
          title="Về trang chủ Thegioididong.com"
          to="/"
        >
          <i className="ico-logo" />
        </Link>
        <form className="header__main__form">
          <input
            className="header__main__input"
            aria-label="Bạn tìm gì..."
            placeholder="Bạn tìm gì..."
            maxLength={50}
          />
          <button
            className="header__main__button"
            type="submit"
            aria-label="tìm kiếm"
          >
            <i className="ico-search" />
          </button>
        </form>
        <div className="header__main__detail">
          <div className="header__main__detail__left">
            <Link
              to="/"
              className="header__main__detail__gio-hang"
              data-toggle="modal"
              data-target="#cartModal"
            >
              <i className="ico-card" />
              <span>Giỏ hàng</span>
            </Link>
            <Link
              to="/lich-su-mua-hang"
              className="header__main__detail__lich-su"
            >
              LỊCH SỬ MUA HÀNG
            </Link>
          </div>
          <div className="header__main__detail__right">
            <HeaderLogin />

            <Link to="/hoi-dap">HỎI ĐÁP</Link>
            <Link to="/tin-tuc">24h CÔNG NGHỆ</Link>
            <Link to="/game-app">GAME APP</Link>
          </div>
        </div>
      </div>
      <div className="header__nav">
        <div className="header__nav__content">
          <Link
            to="/dtdd"
            className="mobile"
            title="Điện thoại di động, smartphone"
          >
            <i className="ico-mobile" />
            <span>Điện thoại</span>
          </Link>
          <Link
            to="/laptop"
            className="laptop"
            title="Máy tính xách tay, Laptop"
          >
            <i className="ico-laptop" />
            <span>Laptop</span>
          </Link>
          <Link
            to="/may-tinh-bang"
            className="tablet"
            title="Máy tính bảng, tablet"
          >
            <i className="ico-tablet" />
            <span>Tablet</span>
          </Link>
          <Link
            to="/phu-kien"
            className="phukien"
            title="Phụ kiện điện thoại di động, phụ kiện tablet, phụ kiện laptop"
          >
            <i className="ico-phukien" />
            <span>Phụ kiện</span>
          </Link>
          <Link
            to="/dong-ho"
            className="fashionwatch"
            title="Đồng hồ thời trang"
          >
            <i className="ico-fashionwatch" />
            <span>Đồng hồ thời trang</span>
          </Link>
          <Link
            to="/dong-ho-thong-minh"
            className="smartwatch"
            title="Đồng hồ thông minh"
          >
            <i className="ico-watch" />
            <span>Đồng hồ thông minh</span>
          </Link>
          <Link to="/may-tinh-de-ban" className="pc" title="PC, Máy in">
            <i className="ico-pc" />
            <span>PC, Máy in</span>
          </Link>
          <Link to="/may-doi-tra" className="maydoitra" title="Máy cũ giá rẻ">
            Máy cũ giá rẻ
          </Link>
          <Link to="/sim-so-dep" className="sim" title="Sim, Thẻ cào">
            Sim, Thẻ cào
          </Link>
          <Link
            to="/tien-ich/thanh-toan-tra-gop"
            className="utility"
            title="Trả góp, điện nước"
          >
            Trả góp, điện nước
          </Link>
        </div>
      </div>
    </header>
  );
}
