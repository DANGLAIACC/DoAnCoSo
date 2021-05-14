import React from "react";

export default function BlogRight(props) {
  const { item } = props;
  return (
    <div className="blog_right">
      <h2>Thông số kỹ thuật</h2>

      <ul className="blog_right__parameter">
        <li>
          <span>Màn hình:</span>
          <div>{item.screen}</div>
        </li>
        <li>
          <span>Hệ điều hành:</span>
          <div>{item.os}</div>
        </li>
        <li>
          <span>Camera sau:</span>
          <div>{item.camera_sau}</div>
        </li>
        <li>
          <span>Camera trước:</span>
          <div>{item.camera_truoc}</div>
        </li>
        <li>
          <span>CPU:</span>
          <div>{item.cpu}</div>
        </li>
        <li>
          <span>RAM:</span>
          <div>{item.ram}</div>
        </li>
        <li>
          <span>Bộ nhớ trong:</span>
          <div>{item.rom}</div>
        </li>
        <li>
          <span>Thẻ nhớ:</span>
          <div>{item.microsd}</div>
        </li>
        <li>
          <span>Thẻ SIM:</span>
          <div className="isim">
            <a href="https://www.thegioididong.com/tin-tuc/tim-hieu-cac-loai-sim-thong-dung-sim-thuong-micro--590216#nanosim">
              2 SIM Nano (SIM 2 chung khe thẻ nhớ)
            </a>
            ,
            <a href="https://www.thegioididong.com/hoi-dap/4g-la-gi-731757">
              Hỗ trợ 4G
            </a>
          </div>
          <div className="ibsim">
            <b className="hot">HOT</b>
            <a href="https://www.thegioididong.com/sim-so-dep/vietnamobile?t=59">
              SIM VNMB Siêu sim (5GB/ngày)
            </a>
          </div>
        </li>
        <li>
          <span>Dung lượng pin:</span>
          <div>{item.pin}</div>
        </li>
      </ul>
      <button className="blog_right__parameter_detail">
        Xem thêm cấu hình chi tiết
      </button>
    </div>
  );
}
