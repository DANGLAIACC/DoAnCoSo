import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLstManu } from "../../features/filterSlice";

export default function Filter() {
  const { lstManu } = useSelector((state) => state.filter);
  const arrManu = [
    { manuId: "iphone", img: "iPhone-(Apple)42-b_16.jpg" },
    { manuId: "samsung", img: "Samsung42-b_25.jpg" },
    { manuId: "oppo", img: "OPPO42-b_27.png" },
    { manuId: "xiaomi", img: "Xiaomi42-b_45.jpg" },
    { manuId: "vivo", img: "Vivo42-b_50.jpg" },
    { manuId: "realme", img: "Realme42-b_37.png" },
    { manuId: "vsmart", img: "Vsmart42-b_40.png" },
    { manuId: "nokia", img: "Nokia42-b_21.jpg" },
  ];
  const dispatch = useDispatch();

  const handleManu = (manuId) => {
    dispatch(setLstManu(manuId));
  };

  useEffect(() => {}, [lstManu]) 

  return (
    <div className="filter">
      <div className="filter__manufacturer">
        {arrManu.map((x) => (
          // eslint-disable-next-line
          <a onClick={() => handleManu(x.manuId)} key={x.manuId} className={lstManu.indexOf(x.manuId)>-1?'check':''}>
            <img src={`https://cdn.tgdd.vn/Brand/1/${x.img}`} alt={x.manuId} />
          </a>
        ))}
      </div>
      <div className="d-flex">
        <div className="filter__left d-flex">
          <div className="filter__price">
            <label>Chọn mức giá: </label>
            <a href="/dtdd?p=duoi-2-trieu" data-id="7">
              Dưới 2 triệu
            </a>
            <a href="/dtdd?p=tu-2-4-trieu" data-id="9">
              Từ 2 - 4 triệu
            </a>
            <a href="/dtdd?p=tu-4-7-trieu" data-id="289">
              Từ 4 - 7 triệu
            </a>
            <a href="/dtdd?p=tu-7-13-trieu" data-id="562">
              Từ 7 - 13 triệu
            </a>
            <a href="/dtdd?p=tren-13-trieu" data-id="253">
              Trên 13 triệu
            </a>
          </div>

          <div className="filter__feature">
            <span className="muiTenXanh">Bộ lọc</span>
            <div className="property muiTenTrang" style={{ display: "none" }}>
              <i className="ico-close"></i>
              <div className="prop">
                <strong>Loại điện thoại</strong>
                <a
                  href="/dtdd?g=dien-thoai-pho-thong"
                  className=""
                  data-id="62879"
                >
                  <i className="ico-checkbox"></i>
                  Điện thoại phổ thông
                </a>
                <a href="/dtdd?g=android" className="" data-id="39237">
                  <i className="ico-checkbox"></i>
                  Android
                </a>
                <a href="/dtdd?g=iphone-ios" className="" data-id="39238">
                  <i className="ico-checkbox"></i>
                  iPhone (iOS)
                </a>
              </div>
              <div className="prop">
                <strong>Dung lượng pin</strong>
                <a
                  href="/dtdd-pin-3000-den-5000-mah"
                  className=""
                  data-id="163466"
                >
                  <i className="ico-checkbox"></i>
                  Từ 3000 đến 5000 mAh
                </a>
                <a href="/dtdd-pin-khung" className="" data-id="163467">
                  <i className="ico-checkbox"></i>
                  Pin khủng trên 5000 mAh
                </a>
              </div>
              <div className="prop">
                <strong>Dung lượng RAM</strong>
                <a href="/dtdd-ram-duoi-4gb" className="" data-id="172937">
                  <i className="ico-checkbox"></i>
                  Dưới 4 GB
                </a>
                <a href="/dtdd-ram-4-den-6gb" className="" data-id="172938">
                  <i className="ico-checkbox"></i>
                  Từ 4 - 6 GB
                </a>
                <a href="/dtdd-ram-8gb-tro-len" className="" data-id="172939">
                  <i className="ico-checkbox"></i>8 GB trở lên
                </a>
              </div>
              <div className="prop">
                <strong>Bộ nhớ trong</strong>
                <a href="/dtdd-rom-duoi-32gb" className="" data-id="172941">
                  <i className="ico-checkbox"></i>
                  Dưới 32 GB
                </a>
                <a href="/dtdd-rom-32-den-64gb" className="" data-id="172942">
                  <i className="ico-checkbox"></i>
                  Từ 32 - 64 GB
                </a>
                <a href="/dtdd-rom-128-den-256gb" className="" data-id="172943">
                  <i className="ico-checkbox"></i>
                  Từ 128 - 256 GB
                </a>
                <a href="/dtdd-rom-512gb-tro-len" className="" data-id="172944">
                  <i className="ico-checkbox"></i>
                  512 GB trở lên
                </a>
              </div>
              <div className="prop">
                <strong>Tính năng camera</strong>
                <a href="/dtdd-camera-goc-rong" className="" data-id="140894">
                  <i className="ico-checkbox"></i>
                  Camera góc rộng
                </a>
                <a href="/dtdd-camera-xoa-phong" className="" data-id="140895">
                  <i className="ico-checkbox"></i>
                  Camera xóa phông
                </a>
                <a href="/dtdd-camera-zoom" className="" data-id="140896">
                  <i className="ico-checkbox"></i>
                  Camera zoom chụp xa
                </a>
                <a href="/dtdd-camera-macro" className="" data-id="163409">
                  <i className="ico-checkbox"></i>
                  Camera macro chụp cận cảnh
                </a>
              </div>
              <div className="prop">
                <strong>Tính năng đặc biệt</strong>
                <a href="/dtdd-bao-mat-khuon-mat" className="" data-id="173170">
                  <i className="ico-checkbox"></i>
                  Bảo mật khuôn mặt
                </a>
                <a href="/dtdd-bao-mat-van-tay" className="" data-id="173171">
                  <i className="ico-checkbox"></i>
                  Bảo mật vân tay
                </a>
                <a href="/dtdd-sac-pin-nhanh" className="" data-id="173172">
                  <i className="ico-checkbox"></i>
                  Sạc pin nhanh
                </a>
                <a href="/dtdd-sac-khong-day" className="" data-id="173173">
                  <i className="ico-checkbox"></i>
                  Sạc không dây
                </a>
                <a href="/dtdd-chong-nuoc-bui" className="" data-id="173174">
                  <i className="ico-checkbox"></i>
                  Chống nước, bụi
                </a>
              </div>

              <div className="prop">
                <strong>Kiểu màn hình</strong>
                <a
                  href="/dtdd-man-hinh-sieu-tran-vien"
                  className=""
                  data-id="140891"
                >
                  <i className="ico-checkbox"></i>
                  Siêu tràn viền
                </a>
                <a
                  href="/dtdd-man-hinh-tran-vien"
                  className=""
                  data-id="140890"
                >
                  <i className="ico-checkbox"></i>
                  Tràn viền (tai thỏ, giọt nước...)
                </a>
              </div>
              <div className="prop">
                <strong>Kích thước màn hình</strong>
                <a href="/dtdd-tu-6-inch" className="" data-id="40435">
                  <i className="ico-checkbox"></i>
                  Màn hình lớn 6 inch trở lên
                </a>
                <a href="/dtdd-nho-gon" className="" data-id="163351">
                  <i className="ico-checkbox"></i>
                  Nhỏ gọn dễ cầm
                </a>
              </div>
              <div className="prop">
                <strong>Chất liệu vỏ</strong>
                <a
                  href="/dtdd?g=kim-loai-nguyen-khoi"
                  className=""
                  data-id="57279"
                >
                  <i className="ico-checkbox"></i>
                  Kim loại
                </a>
                <a href="/dtdd?g=kim-loai-va-kinh" className="" data-id="57311">
                  <i className="ico-checkbox"></i>
                  Kim loại và kính
                </a>
              </div>
            </div>
          </div>

          <div className="filter__barpage">
            <a href="?s=moi-ra-mat" data-id="moi-ra-mat" className="check">
              <i className="ico-checkbox"></i> Mới
            </a>
            <a
              href="?s=tra-gop-0-phan-tram"
              data-id="tra-gop-0-phan-tram"
              className=""
            >
              <i className="ico-checkbox"></i> Trả góp 0%
            </a>
            <a href="?s=doc-quyen" data-id="doc-quyen" className="">
              <i className="ico-checkbox"></i> Độc quyền
              <span className="n">MỚI</span>
            </a>
          </div>
        </div>

        <div className="filter__right">
          <span className="muiTenXanh">Sắp xếp</span>
          <div className="muiTenTrang" style={{ display: "none" }}>
            {/* style={{ display: 'none' }} */}
            <i className="ico-close"></i>
            <a href="a.html" className="check" data-id="5">
              <i className="ico-checklist"></i>Nổi bật nhất
            </a>
            <a href="a.html" data-id="6">
              <i className="ico-checklist"></i>Bán chạy nhất
            </a>
            <a href="a.html" data-id="1">
              <i className="ico-checklist"></i>Giá cao đến thấp
            </a>
            <a href="a.html" data-id="2">
              <i className="ico-checklist"></i>Giá thấp đến cao
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
