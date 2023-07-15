import { useState } from "react";
import { IProduct } from "../models/IProduct";

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  const [showDesc, setShowDesc] = useState(false);
  const buttonBg = showDesc ? "bg-blue-400" : "bg-yellow-400";

  return (
    <div className="border py-2 px-4 flex flex-col items-center mb-2">
      <img
        src={product.image}
        alt={product.title}
        className="my-20 mx-20 max-h-40"
      />
      <p>{product.title}</p>
      <p className="font-bold">{product.price}</p>
      <button
        className={`py-2 px-4 border rounded-xl ${buttonBg}`}
        onClick={() => {
          setShowDesc(!showDesc);
        }}
      >
        {showDesc ? "Hide description" : "Show description"}
      </button>
      {showDesc && <div>{product.description}</div>}
      {showDesc && (
        <p>
          <span className="font-bold">Rating: {product.rating.rate}</span>
        </p>
      )}
    </div>
  );
}
