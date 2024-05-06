import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
const Modal = ({ closeModal }) => {
  const [openModal, setOpenModal] = useState(true);

  return (
    <>
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-blue-400 flex items-center space-x-[50px] p-5 rounded-[50px]">
            <p className="uppercase text-white font-bold">Completed</p>

            <IoClose
              className="text-[20px] text-white"
              onClick={() => {
                setOpenModal(false);
                closeModal();
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
