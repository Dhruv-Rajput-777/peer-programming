import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { hideRoomModal } from "../../actions/roomModal";

const RoomModal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { show, roomId } = useSelector((state) => state.roomModalReducer);

  return (
    <div className="">
      <div
        id="err-modal"
        className="fixed inset-0"
        aria-modal="true"
        style={{ display: show ? "block" : "none", top: "30%"}}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="flex flex-col">
                <div className="flex items-center gap-4">
                  <div
                    id="modal-img-bg"
                    className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10"
                  >
                    <svg
                      id="modal-img"
                      className="h-6 w-6 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900 py-1"
                    id="modal-title"
                  >
                    Join Room
                  </h3>
                </div>
                <div className="mt-2 ml-12 pl-2">
                  <h5
                    id="modal-body"
                    className="text-sm text-gray-900 cursor-pointer underline"
                    onClick={() => {
                      dispatch(hideRoomModal());
                      navigate(`/room/${roomId}`);
                    }}
                  >
                    Room Link
                  </h5>
                </div>
              </div>
            </div>
            <hr />
            <div className="bg-gray-50 px-4 py-2 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                onClick={() => {
                  dispatch(hideRoomModal(false));
                }}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-1 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RoomModal;
