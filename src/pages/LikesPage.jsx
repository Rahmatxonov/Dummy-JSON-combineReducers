import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_BOUGHT } from "../redux/types";

const LikesPage = () => {
  const likeProData = useSelector((state) => state.likeList.likeProData);
  console.log(likeProData);
  const dispatch = useDispatch();
  const buyProduct = (item) => {
    dispatch({ type: ADD_BOUGHT, data: item });
  };
  return (
    <div className="container flex items-center flex-wrap justify-center">
      {likeProData.length > 0 &&
        likeProData.map(({ id, images, brand, description }) => (
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
              onClick={() => buyProduct({ id, images, brand, description })}
              className="bg-blue-400 p-3 rounded-md w-full hover:bg-blue-500 mt-5 hover:text-white font-semibold uppercase"
            >
              buy
            </button>
          </div>
        ))}
    </div>
  );
};

export default LikesPage;
