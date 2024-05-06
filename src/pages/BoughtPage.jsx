// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import Modal from "../components/Modal";
// import { PRODUCTS } from "../redux/types";

// const BoughtPage = () => {
//   const boughtProduct = useSelector((state) => state.boughtList.boughtData);
//   const dispatch = useDispatch();
//   const [dataClose, setDataClose] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const handleBuy = (item) => {
//     setSelectedProduct(item);
//     setShowModal(true);
//     dispatch({ type: PRODUCTS, data: item });
//   };

//   return (
//     <div className="container flex items-center flex-wrap justify-center">
//       {boughtProduct.length > 0 &&
//         boughtProduct.map(({ id, images, brand, description }) => (
//           <div
//             className="card w-[220px] bg-gray-300 m-2 p-3 rounded-md hover:bg-gray-400"
//             key={id}
//           >
//             <img
//               className="object-contain w-full h-[150px]"
//               src={images[0]}
//               alt="images"
//             />
//             <h3 className="font-bold text-[20px] text-center">{brand}</h3>
//             <p className="">{description}</p>
//             <button
//               onClick={() => handleBuy({ id, images, brand, description })}
//               className="bg-blue-400 p-3 rounded-md w-full hover:bg-blue-500 mt-5 hover:text-white font-semibold uppercase"
//             >
//               Products
//             </button>
//           </div>
//         ))}
//       {showModal && (
//         <Modal
//           product={selectedProduct}
//           closeModal={() => setShowModal(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default BoughtPage;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../components/Modal";
import { PRODUCTS } from "../redux/types";

const BoughtPage = () => {
  const boughtProduct = useSelector((state) => state.boughtList.boughtData);
  const dispatch = useDispatch();
  const [dataClose, setDataClose] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleBuy = (item) => {
    setSelectedProduct(item);
    setShowModal(true);
    dispatch({ type: PRODUCTS, data: item });
    setDataClose(false);
  };

  return (
    <>
      {dataClose && (
        <div className="container flex items-center flex-wrap justify-center">
          {boughtProduct.length > 0 &&
            boughtProduct.map(({ id, images, brand, description }) => (
              <div
                className="card w-[220px] bg-gray-300 m-2 p-3 rounded-md hover:bg-gray-400"
                key={id}
              >
                <img
                  className="object-contain w-full h-[150px]"
                  src={images[0]}
                  alt="images"
                />
                <h3 className="font-bold text-[20px] text-center">{brand}</h3>
                <p className="">{description}</p>
                <button
                  onClick={() => handleBuy({ id, images, brand, description })}
                  className="bg-blue-400 p-3 rounded-md w-full hover:bg-blue-500 mt-5 hover:text-white font-semibold uppercase"
                >
                  Products
                </button>
              </div>
            ))}
        </div>
      )}
      {showModal && (
        <Modal
          product={selectedProduct}
          closeModal={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default BoughtPage;
