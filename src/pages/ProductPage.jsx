import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_LIKE } from "../redux/types";

const ProductPage = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  console.log(product);
  useEffect(() => {
    fetch("https://dummyjson.com/products").then((res) =>
      res.json().then((data) => setProduct(data.products))
    );
  }, []);

  const addLiked = (item) => {
    console.log(item);
    dispatch({ type: ADD_LIKE, likeData: item });
  };
  return (
    <div className="container flex items-center flex-wrap justify-center">
      {product.length > 0 &&
        product.map(({ id, images, brand, description }) => (
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
            <p className="text">{description}</p>
            <button
              onClick={() => addLiked({ id, images, brand, description })}
              className="bg-blue-400 p-3 rounded-md w-full hover:bg-blue-500 mt-5 hover:text-white font-semibold uppercase"
            >
              Likes
            </button>
          </div>
        ))}
    </div>
  );
};

export default ProductPage;
