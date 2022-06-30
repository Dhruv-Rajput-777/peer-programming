import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideError } from "../actions/error";

const ErrorBanner = () => {
  const { show, error } = useSelector((state) => state.errorReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        dispatch(hideError());
      }, 3000);
    }
  }, [show]);

  return show ? (
    <div
      className="sticky top-0 bg-lime-500 flex justify-center items-center"
      style={{ height: "8vh", width: "100%" }}
    >
      <div className="text-xs font-semibold py-2">{error}</div>
    </div>
  ) : null;
};

export default ErrorBanner;
