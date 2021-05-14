import React from "react";

export default function PhoneDetailRight() {
  return (
    <div className="right">
      <strong className="hangTonTai">
        <i className="ico-local"></i>Kiểm tra có hàng tại nơi bạn ở không?
      </strong>

      <ul className="policy">
        <li>
          <i className="ico2-box"></i>
          <span>
            Bộ sản phẩm gồm:
            <a className="stdImg" href="a.html">
              Hộp, Sạc, Tai nghe, Sách hướng dẫn, Bút cảm ứng, Cáp, Cây lấy sim,
              Ốp lưng
            </a>
          </span>
        </li>
        <li>
          <i className="ico2-quantity"></i>
          <span>Bảo hành chính hãng 12 tháng.</span>
        </li>
        <li>
          <i className="ico2-return"></i>
          <span>
            Lỗi là đổi mới trong 1 tháng tại hơn 2020 siêu thị toàn quốc
            <a href="a.html">Xem chi tiết</a>
          </span>
        </li>
      </ul>

      <div className="productOld">
        <a
          className="viewold"
          target="_blank"
          href="/may-doi-tra/dien-thoai/samsung-galaxy-note-10?pid=206176&amp;c=42"
        >
          Xem Samsung Galaxy Note 10+ cũ
          <div>
            <span>
              Giá dưới: <strong>20.930.000₫</strong>
            </span>
            <span>Bảo hành tới 11.5 tháng</span>
          </div>
        </a>
      </div>
    </div>
  );
}
