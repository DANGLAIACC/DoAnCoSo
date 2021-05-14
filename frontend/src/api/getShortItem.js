import axios from "../utils/axiosClient";
import { loading, loadError, loadSuccess } from "../features/shortItemSlice";
export const getShortItem = (props) => {
  return (dispatch) => {
    dispatch(loading());
    axios
      .get("/getShortItem", {
        params: {
          lstManu: props.lstManu
        },
      })
      .then((result) => {
        dispatch(loadSuccess(result.data));
      })
      .catch((err) => {
        dispatch(loadError());
      });
  };
};
