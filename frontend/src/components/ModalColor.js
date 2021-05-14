import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";

const strFromDatabase = "1,2,3,4,5,6,7,8,9,10,11,12";
let arrUrlImgLarge = strFromDatabase.split(",");

export default function ModalColor() {
  const constants = useSelector((state) => state.constants);
  const colorId = constants ? constants.colorId : "xanh";

  const lstImgColorSlide = constants ? constants.lstImgColorSlide : "";
  if (lstImgColorSlide !== "") {
    arrUrlImgLarge = lstImgColorSlide.split(",");
  }

  const modalId = useLocation().pathname.substr(6, 6);

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  if (colorId !== "") {
    const settingSliderMain = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      focusOnSelect: true,
      lazyLoad: true,
    };

    const settingSliderThumb = {
      slidesToShow: arrUrlImgLarge.length,
      arrows: true,
      dots: false,
      swipeToSlide: true,
      focusOnSelect: true,
      centerPadding: "8px",
    };

    return (
      <div className="modalColor">
        <div
          className="modal fade"
          id="ModalColor"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <img
                  alt="iPhone 11 Pro Max 256GB"
                  src="https://cdn.tgdd.vn/Products/Images/42/210653/iphone-11-pro-max-256gb-black-400x460.png"
                />
                <div className="phoneInfo">
                  <h3>iPhone 11 Pro Max 256GB</h3>
                  <strong>34.990.000₫</strong>
                </div>
                <div className="button-group">
                  <div className="btnMuaNgay" type="button">
                    Mua ngay
                  </div>
                  <div className="btnTraGop" type="button">
                    Mua trả góp
                  </div>
                  <div className="btnTraGop" type="button">
                    Trả góp 0% qua thẻ
                  </div>
                </div>
              </div>
              <div className="modal-body">
                <button data-dismiss="modal"></button>
                <Slider
                  {...settingSliderMain}
                  asNavFor={nav2}
                  ref={(s) => setNav1(s)}
                >
                  {arrUrlImgLarge.map((str) => (
                    <img
                      src={`https://cdn.tgdd.vn/Products/Images/42/${modalId}/${str}-org.jpg`}
                      alt="a"
                      key={str}
                    />
                  ))}
                </Slider>
              </div>
              <div className="modal-footer">
                <Slider
                  {...settingSliderThumb}
                  asNavFor={nav1}
                  ref={(s) => setNav2(s)}
                >
                  {arrUrlImgLarge.map((str) => (
                    <img
                      src={`https://cdn.tgdd.vn/Products/Images/42/${modalId}/${str}-180x125.jpg`}
                      alt="a"
                      key={str}
                    />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else return <></>;
}
