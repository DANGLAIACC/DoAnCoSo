import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__ho-tro">
        <ul className="footer__ho-tro__ul d-flex">
          <li className="footer__ho-tro__li">
            <i className="ico2-gh"></i>
            <span>Giao hàng nhanh chóng</span>
          </li>
          <li className="footer__ho-tro__li">
            <i className="ico2-tt"></i>
            <span>Thanh toán: tiền mặt, visa / master, trả góp</span>
          </li>
          <li className="footer__ho-tro__li">
            <i className="ico2-tn"></i>
            <span>Trải nghiệm sản phẩm tại nhà</span>
          </li>
          <li className="footer__ho-tro__li">
            <i className="ico2-dt"></i>
            <span>Lỗi đổi tại nhà nhanh chóng</span>
          </li>
          <li className="footer__ho-tro__li">
            <i className="ico2-ht"></i>
            <span>
              Hỗ trợ suốt thời gian sử dụng. Hotline:{" "}
              <a href="tel:18001763">1800.1763</a>
            </span>
          </li>
        </ul>
      </div>

      <div className="footer__thong-tin d-flex">
        <ul className="col">
          <li>
            <a href="/lich-su-mua-hang" title="Lịch sử mua hàng">
              Lịch sử mua hàng
            </a>
          </li>
          <li>
            <a href="/tra-gop" title="Hướng dẫn mua trả góp">
              Tìm hiểu về mua trả góp
            </a>
          </li>
          <li>
            <a href="/bao-hanh" title="Tìm trung tâm bảo hành">
              Chính sách bảo hành
            </a>
          </li>
          <li>
            <a href="/chinh-sach-bao-hanh-san-pham" title="Chính sách đổi trả">
              Chính sách đổi trả
            </a>
          </li>
        </ul>

        <ul className="col">
          <li>
            <a href="http://mwg.vn" title="Giới thiệu công ty (mwg.vn)">
              Giới thiệu công ty <span>(mwg.vn)</span>
            </a>
          </li>
          <li>
            <a href="//vieclam.thegioididong.com" title="Tuyển dụng">
              Tuyển dụng
            </a>
          </li>
          <li>
            <a href="/lien-he" title="Gửi góp ý, khiếu nại">
              Gửi góp ý, khiếu nại
            </a>
          </li>
          <li>
            <a
              href="/he-thong-sieu-thi-the-gioi-di-dong"
              title="Tìm siêu thị (2.017 shop)"
            >
              Tìm siêu thị <span>(2.017 shop)</span>
            </a>
          </li>
        </ul>

        <ul className="col">
          <li>
            <p>
              Gọi mua hàng <a href="tel:18001060">1800.1060</a> (7:30 - 22:00)
            </p>
            <p>
              Gọi khiếu nại &nbsp; <a href="tel:18001062">1800.1062</a> (8:00 -
              21:30)
            </p>
            <p>
              Gọi bảo hành &nbsp; <a href="tel:18001064">1800.1064</a> (8:00 -
              21:00)
            </p>
            <p>
              Kỹ thuật &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
              <a href="tel:18001763">1800.1763</a> (7:30 - 22:00)
            </p>
          </li>
        </ul>

        <ul className="col-last">
          <li>
            <a href="https://facebook.com/thegioididongcom" className="linkfb">
              <i className="ico-fb"></i>3.5tr
            </a>
            <a
              href="https://www.youtube.com/user/TGDDVideoReviews?sub_confirmation=1"
              className="linkyt"
            >
              <i className="ico-yt"></i>734k
            </a>
            <div className="group">
              <label>Website cùng tập đoàn:</label>
              <a href="//www.maiamtgdd.vn" className="ma">
                <i className="icologo-maiam"></i>
              </a>
              <a href="//www.dienmayxanh.com" className="dm">
                <i className="icologo-dmx"></i>
              </a>
              <a href="//www.bachhoaxanh.com" className="bhx">
                <i className="icologo-bhx"></i>
              </a>
            </div>
          </li>
        </ul>
      </div>

      <div className="footer__copyright">
        <p>
          © 2018. Công ty cổ phần Thế Giới Di Động. GPMXH: 238/GP-BTTTT do Bộ
          Thông Tin và Truyền Thông cấp ngày 04/06/2020. Điện thoại: 028
          38125960.
        </p>
      </div>
    </div>
  );
}
