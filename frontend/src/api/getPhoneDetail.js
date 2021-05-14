import axios from "../utils/axiosClient";
import { loading, loadError, loadSuccess } from "../features/phoneDetailSlice";
export const getPhoneDetail = (modalId) => {
  return (dispatch) => {
    dispatch(loading());
    axios
      .get("/getPhoneDetail", {
        params: {
          modalId: modalId,
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
