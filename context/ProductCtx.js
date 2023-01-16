import { createContext, useContext, useState } from "react";
import Product1Image from "public/images/product1.jpg";
import Product2Image from "public/images/product2.jpg";
import Product3Image from "public/images/product3.jpg";
import Product4Image from "public/images/product4.jpg";
import Product5Image from "public/images/product5.jpg";
import Product6Image from "public/images/product6.jpg";

let demo_products = [
  {
    id: 24,
    title: "Men's Product",
    price: 4.3,
    imageUrl: Product1Image.src,
    variant: "NEW",
    rating: 4.3,
    numReviews: 24,
  },
  {
    id: 25,
    title: "Great Shoes",
    price: 13.5,
    imageUrl: Product2Image.src,
    variant: "TRENDING",
    rating: 4.3,
    numReviews: 24,
  },
  {
    id: 26,
    title: "Great Shoes",
    price: 5,
    imageUrl: Product3Image.src,
    variant: "NEW",
    rating: 4.3,
    numReviews: 24,
  },
  {
    id: 27,
    title: "Great Shoes",
    price: 5,
    imageUrl: Product4Image.src,
    variant: "NEW",
    rating: 4.3,
    numReviews: 24,
  },
  {
    id: 28,
    title: "Great Shoes",
    price: 5,
    imageUrl: Product5Image.src,
    variant: "NEW",
    rating: 4.3,
    numReviews: 24,
  },

  {
    id: 29,
    title: "Great Shoes",
    price: 5,
    imageUrl: Product6Image.src,
    variant: "NEW",
    rating: 4.3,
    numReviews: 24,
  },
];

const ProductCtx = createContext();
export const useProducts = () => useContext(ProductCtx);
export function ProductsProvider({ children }) {
  const [products, setProducts] = useState(demo_products);

  return (
    <ProductCtx.Provider value={{ products }}>{children}</ProductCtx.Provider>
  );
}
