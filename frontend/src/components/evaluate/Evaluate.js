import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "../../utils/axiosClient";

import EvaluateInput from "./EvaluateInput";
import EvaluateItem from "./EvaluateItem";
import { addProduct } from "../../features/cartSlice";

export default function Evaluate() {
  const item = useSelector((state) => state.currentPhone).detail;
  const lstColor = useSelector((state) => state.currentPhone).lstColor;
  const { userInfo } = useSelector((state) => state.login);

  const [lstEvaluate, setLstEvaluate] = useState([]);
  const [lstRateStar, setLstRateStar] = useState([]);
  const [isRenderEvaluate, setIsRenderEvaluate] = useState(false);
  // mặc định ko cho đánh giá, chỉ đánh giá khi đã có hóa đơn user và sản phẩm

  const pushLstEvaluate = (newEvaluate) => {
    setLstEvaluate([newEvaluate, ...lstEvaluate]);
  };

  const dispatch = useDispatch();
  const handleMuaNgay = () => {
    dispatch(
      addProduct({
        id: item.id,
        url: item.url,
        phonename: item.phonename,
        price: item.price,
        lstColor: lstColor,
        restUrl: item.restUrl,
        indexColor: 0,
      })
    );
  };
  useEffect(() => {
    axios
      .get("/getEvaluateTop3", {
        params: {
          modalId: item.id,
        },
      })
      .then((result) => {
        setLstEvaluate(result.data);

      })
      .catch((err) => console.log(err));

    axios
      .get("/getRateStar", {
        params: {
          modalId: item.id,
        },
      })
      .then((result) => {
        // Lưu ý mảng danh sách đánh giá trả theo thứ tự ngược, ví dụ 5* rồi tới 4* rồi 3*,...
        // và mảng luôn trả về 5 row, ví dụ nếu 3* ko ai đánh giá thì trả về null
        setLstRateStar(result.data);
      })
      .catch((err) => console.log(err));

    axios
      .get("/checkHadEnvoice", {
        params: {
          modalId: item.id,
          usr: userInfo.usr,
        },
      })
      .then((result) => {
        setIsRenderEvaluate(result.data.rowCount === 1);
      })
      .catch((err) => console.log(err));
    // thêm lstEvaluate rơi vào vòng lặp vô hạn
  }, [item.id, userInfo.usr]);

  const renderEvaluate = () =>
    isRenderEvaluate ? (
      <>
        <div
          data-toggle="collapse"
          data-target="#evaluateInput"
          className="btnEvaluate"
        >
          Gửi đánh giá của bạn
        </div>
        <EvaluateInput pushLstEvaluate={pushLstEvaluate} />
      </>
    ) : (
        <div
          className="btnEvaluate bg-yellow"
          data-toggle="modal"
          data-target="#cartModal"
          onClick={handleMuaNgay}
        >
          Mua ngay & bình luận
        </div>
      );

  const sumRateStar = lstRateStar.reduce(
    (total, rateStar) => total + +rateStar.tinh,
    0
  );

  const avgRate =
    lstRateStar.reduceRight(
      (sum, item, index) => sum + (5 - index) * +item.tinh,
      0
    ) / sumRateStar;

  return (
    <div className="evaluate">
      {lstEvaluate.length > 0 ? (
        <>
          <div className="evaluate__top">
            <h3>{sumRateStar} đánh giá</h3>
            <input
              className="cmtKey"
              type="text"
              placeholder="Tìm theo nội dung đánh giá"
            />
          </div>
          <div className="evaluate__center">
            <b>
              {avgRate.toFixed(1)}
              <i className="iconcom-star-large " />
            </b>
            <div className="rate-analyst">
              <table>
                <tbody>
                  {lstRateStar.map((item, key) => (
                    <tr key={key}>
                      <td>{5 - key}</td>
                      <td>
                        <div className="progressbar__out">
                          <div
                            className="progressbar__in"
                            style={{
                              width: (item.tinh / sumRateStar) * 100 + "%",
                            }}
                          />
                        </div>
                      </td>
                      <td>
                        {item.tinh ? (
                          <Link to="a.html">
                            <b>{item.tinh ? item.tinh : 0}</b> đánh giá
                          </Link>
                        ) : (
                            // eslint-disable-next-line
                            <a>
                              <b>{item.tinh ? item.tinh : 0}</b> đánh giá
                            </a>
                          )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {renderEvaluate()}
          </div>
          <div className="evaluate__bottom">
            {lstEvaluate.map((item, key) => (
              <EvaluateItem item={item} key={key} />
            ))}
          </div>

          {sumRateStar > 3 ? (
            <Link to={`/dtdd/${item.id}/${item.restUrl}/danh-gia`} className='evaluate__all'>
              Xem tất cả đánh giá
            </Link>
          ) : ""}
        </>
      ) : (
          <div className="text-center">
            <svg width={80} height={80} viewBox="0 0 80 80">
              <defs>
                <path
                  id="e1ef8c21-52dc-490c-a6d0-6b06b6ce7ffa-a"
                  d="M43.716 5.432l2.859 10.239a7.29 7.29 0 004.228 4.796l9.682 3.99c5.349 2.204 6.112 9.605 1.327 12.87l-8.661 5.913a7.327 7.327 0 00-3.158 5.57l-.708 10.613c-.39 5.86-7.057 8.872-11.592 5.235l-8.212-6.585a7.085 7.085 0 00-6.18-1.354l-10.12 2.57c-5.59 1.418-10.473-4.122-8.492-9.635l3.585-9.982a7.441 7.441 0 00-.66-6.407L2.067 24.24c-3.064-4.985.584-11.419 6.344-11.189l10.428.415a7.106 7.106 0 005.772-2.606l6.692-8.147C35-1.787 42.136-.223 43.716 5.433z"
                />
                <path
                  id="e1ef8c21-52dc-490c-a6d0-6b06b6ce7ffa-c"
                  d="M28.34 5.431l2.86 10.24c.608 2.176 2.168 3.947 4.227 4.796l9.683 3.99c5.348 2.204 6.111 9.604 1.328 12.87l-8.662 5.913a7.326 7.326 0 00-3.158 5.57l-.709 10.613c-.026.39-.08.766-.159 1.13C12.394 55.609-1.723 35.19.251 13.338l3.213.127a7.1 7.1 0 005.77-2.606l6.694-8.147c3.696-4.499 10.834-2.935 12.412 2.72z"
                />
                <path
                  id="e1ef8c21-52dc-490c-a6d0-6b06b6ce7ffa-e"
                  d="M29.628 11.393c.658-3.136 3.67-5.132 6.73-4.458 3.06.673 5.007 3.761 4.35 6.897-.657 3.135-3.67 5.132-6.73 4.458-3.06-.674-5.007-3.761-4.35-6.897zM7.276.53c3.059.674 5.006 3.762 4.349 6.898-.657 3.135-3.67 5.132-6.729 4.457-3.06-.674-5.007-3.762-4.35-6.897.657-3.136 3.67-5.131 6.73-4.458z"
                />
                <path
                  id="e1ef8c21-52dc-490c-a6d0-6b06b6ce7ffa-g"
                  d="M.75 8.56c.165-.784.919-1.283 1.683-1.114l3.957.87c.765.169 1.252.942 1.087 1.725-.164.784-.917 1.283-1.682 1.114l-.499-.11c-.422 5.407 3.124 10.446 8.436 11.616 5.311 1.17 10.564-1.932 12.346-7.04l-.5-.11c-.764-.168-1.251-.94-1.086-1.724.163-.784.917-1.283 1.682-1.114l3.957.871c.765.169 1.252.94 1.087 1.724-.164.784-.918 1.283-1.682 1.114l-.666-.146c-2.126 6.674-8.892 10.77-15.734 9.264-6.84-1.506-11.369-8.09-10.633-15.069l-.665-.147C1.074 10.116.587 9.344.75 8.56zm21.025-4.917c.164-.783.917-1.282 1.683-1.114l.276.06c.765.17 1.252.941 1.087 1.725-.164.784-.917 1.283-1.682 1.114l-.277-.06c-.764-.169-1.251-.94-1.087-1.725zM12.655.15l.277.061c.765.168 1.252.941 1.087 1.724-.164.785-.917 1.284-1.682 1.115l-.278-.06c-.764-.17-1.25-.941-1.087-1.725.165-.785.918-1.283 1.683-1.115z"
                />
              </defs>
              <g fill="none" fillRule="evenodd" opacity="0.997">
                <g transform="rotate(-12 67.32 3.796)">
                  <mask id="e1ef8c21-52dc-490c-a6d0-6b06b6ce7ffa-b" fill="#fff">
                    <use xlinkHref="#e1ef8c21-52dc-490c-a6d0-6b06b6ce7ffa-a" />
                  </mask>
                  <path
                    fill="#C7C7C7"
                    d="M-6.732-7.793h79.409v81.922H-6.732z"
                    mask="url(#e1ef8c21-52dc-490c-a6d0-6b06b6ce7ffa-b)"
                  />
                </g>
                <g transform="rotate(-12 59.633 -69.346)">
                  <mask id="e1ef8c21-52dc-490c-a6d0-6b06b6ce7ffa-d" fill="#fff">
                    <use xlinkHref="#e1ef8c21-52dc-490c-a6d0-6b06b6ce7ffa-c" />
                  </mask>
                  <path
                    fill="#E0E0E0"
                    d="M-7.62-7.793h64.921v76.236H-7.62z"
                    mask="url(#e1ef8c21-52dc-490c-a6d0-6b06b6ce7ffa-d)"
                  />
                </g>
                <g transform="rotate(-12 159.533 -57.659)">
                  <mask id="e1ef8c21-52dc-490c-a6d0-6b06b6ce7ffa-f" fill="#fff">
                    <use xlinkHref="#e1ef8c21-52dc-490c-a6d0-6b06b6ce7ffa-e" />
                  </mask>
                  <path
                    fill="#C7C7C7"
                    d="M-7.269-7.49h55.792v33.801H-7.269z"
                    mask="url(#e1ef8c21-52dc-490c-a6d0-6b06b6ce7ffa-f)"
                  />
                </g>
                <g transform="rotate(-12 162.44 -80.152)">
                  <mask id="e1ef8c21-52dc-490c-a6d0-6b06b6ce7ffa-h" fill="#fff">
                    <use xlinkHref="#e1ef8c21-52dc-490c-a6d0-6b06b6ce7ffa-g" />
                  </mask>
                  <path
                    fill="#000"
                    fillOpacity="0.54"
                    d="M-6.969-7.773h45.907v41.475H-6.969z"
                    mask="url(#e1ef8c21-52dc-490c-a6d0-6b06b6ce7ffa-h)"
                  />
                </g>
              </g>
            </svg>
            <p>Không tìm thấy nhận xét phù hợp.</p>
            {renderEvaluate()}
          </div>
        )}
    </div>
  );
}
