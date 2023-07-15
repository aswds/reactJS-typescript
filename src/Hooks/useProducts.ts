import { IProduct } from "./../models/IProduct";
import axios from "axios";
import { useState, useEffect } from "react";
import { AxiosError } from "axios";
import { products as Offline_Products } from "../data/products";
export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [error, setError] = useState<String>("");
  async function fetchProducts() {
    try {
      setError("");
      const response = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products?limit=10"
      );
      setProducts(response.data);
    } catch (err: unknown) {
      const error = err as AxiosError;
      setError(error.message);
      setProducts(Offline_Products);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  return { products, error };
}
