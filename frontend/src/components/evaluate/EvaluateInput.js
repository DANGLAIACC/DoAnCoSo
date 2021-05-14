import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "../../utils/axiosClient";

export default function EvaluateInput({ pushLstEvaluate }) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [content, setContent] = useState("");

  const { usr,fullname } = useSelector((state) => state.login).userInfo;
  const { id } = useSelector((state) => state.currentPhone).detail;

  const arrComment = [
    "",
    "Không thích",
    "Tạm được",
    "Bình thường",
    "Rất tốt",
    "Tuyệt vời",
  ];

  const handlePostEvaluate = () => {
    if (content.trim() !== "") {
      axios
        .post("/addEvaluate", {
          usr: usr,
          modalId: id,
          content: content,
          rateStar: rating,
        })
        .then((result) => {
          alert("Đăng bình luận thành công");
          pushLstEvaluate({
            content: content,
            fullname: fullname,
            rate_star: rating,
          })
          setRating(null);
          setHover(null);
          setContent("");
        })
        .catch((err) => {
          console.log("Thêm bình luận thất bại: " + err);
        });
    }
  };

  return (
    <div className="collapse w-100 evaluateInput" id="evaluateInput">
      <div className="selectStar d-flex">
        <span>Chọn đánh giá của bạn</span>

        <div className="lstStar">
          {[...Array(5)].map((star, key) => {
            const ratingValue = key + 1;
            return (
              <div key={key} className="d-inline-block">
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  className="d-none"
                />
                <i
                  className={
                    ratingValue <= (hover || rating)
                      ? "iconcom-star"
                      : "iconcom-unstar"
                  }
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => {
                    setRating(ratingValue);
                  }}
                />
              </div>
            );
          })}
          {/* <p>Bạn chọn {rating} sao</p> */}
        </div>

        <span
          className={`resultStar ${hover > 0 || rating > 0 ? "" : "invisible"}`}
        >
          {arrComment[hover || rating]}
        </span>
      </div>
      {rating > 0 ? (
        <div className="addEvaluate">
          <div className="card">
            <div className="card-body">
              <textarea
                name="txtAddEvaluate"
                id="txtAddEvaluate"
                placeholder="Nhập đánh giá về sản phẩm"
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
            </div>
            <div className="card-footer d-flex justify-content-between">
              <div className="btn btn-primary">Đính kèm ảnh</div>
              <div
                className="btn btn-success"
                data-toggle="collapse"
                data-target="#evaluateInput"
                onClick={handlePostEvaluate}
              >
                Đăng bình luận
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
