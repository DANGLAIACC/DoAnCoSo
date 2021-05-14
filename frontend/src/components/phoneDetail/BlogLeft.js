import React from "react";
import ReactHtmlParser from "react-html-parser";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import Evaluate from "../evaluate/Evaluate";

export default function BlogLeft() {
  const item = useSelector((state) => state.currentPhone).detail;
  const listImgSlider =
    item.img_slider === "" ? "" : item.img_slider.split(",");

  const settingSlider = {
    dots: true,
    lazyLoad: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  const renderSlider = () => {
    const result = [];
    const length = listImgSlider.length - 1;
    for (var i = 0; i < length; i++) {
      result.push(
        <div key={i}>
          <img
            src={`https://cdn.tgdd.vn/Products/Images/42/${item.id}/Slider/${listImgSlider[i]}`}
            alt="a"
          />
        </div>
      );
    }
    result.push(
      <div key={100}>
        <img
          src={`https://cdn.tgdd.vn/Products/Images/42/${item.id}/Kit/${listImgSlider[length]}`}
          alt="a"
        />
      </div>
    );
    return result;
  };

  return (
    <div>
      <h2>Đặc điểm nổi bật của {item.phonename}</h2>
      <Slider {...settingSlider}>{renderSlider()}</Slider>

      <div className="blogLeft_Article">{ReactHtmlParser(item.article)}</div>

      <Evaluate />
    </div>
  );
}
