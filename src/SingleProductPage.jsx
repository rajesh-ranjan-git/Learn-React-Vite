import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleProductShimmer from "./SingleProductShimmer";

const SingleProductPage = () => {
  const [obj, setObj] = useState({
    thumbnail:
      "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg",
    title: "Here goes title of the product...",
    brand: "Here goes brand of the product...",
    price: "Here goes price of the product...",
    rating: "Here goes rating of the product...",
    stock: "Here goes stock of the product...",
    category: "Here goes category of the product...",
  });
  const { id } = useParams();

  const getData = async () => {
    const data = await fetch(`https://dummyjson.com/products/${id}`);
    const proData = await data.json();
    setObj(proData);
  };

  useEffect(() => {
    getData();
  }, []);

  //   if (obj == null) {
  //     return <SingleProductShimmer />;
  //   }

  const { thumbnail, title, brand, category, price, rating, stock } = obj;

  return (
    <div className="bg-base-200 w-screen h-[92vh]">
      <div className="card card-side shadow-xl w-1/2 mx-auto pt-6">
        <figure>
          <img src={thumbnail} alt="Product" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div>
            <button className="btn">
              Branch
              <div className="badge badge-primary h-8 font-bold text-lg p-5 mr-3">
                {brand}
              </div>
              {/* {checkBrand()} */}
            </button>
          </div>
          <div>
            <button className="btn">
              Category
              <div className="badge badge-secondary h-8 font-bold text-lg p-5">
                {category}
              </div>
            </button>
          </div>
          <div>
            <button className="btn">
              Price
              <div className="badge badge-secondary h-8 font-bold text-lg p-5">
                {price}
              </div>
            </button>
          </div>
          <div>
            <button className="btn">
              Rating
              <div className="badge badge-secondary h-8 font-bold text-lg p-5">
                {rating}
              </div>
            </button>
          </div>
          <div>
            <button className="btn">
              Stock
              <div className="badge badge-secondary h-8 font-bold text-lg p-5">
                {stock}
              </div>
            </button>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;