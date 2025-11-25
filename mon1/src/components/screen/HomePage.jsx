import axios from "axios";
import { useEffect, useState } from "react";
import "../../assets/styles/index.css";
import "../../assets/styles/header.css";
import HeaderComponent from "../layout/HeaderComponent";
import { ProductsGrid } from "../layout/ProductsGrid";

function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  // axios
  // useEffect(() => {
  //   axios.get("api/products").then((response) => {
  //     setProducts(response.data);
  //   });
  // }, []);

  // axios
  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("api/products");
      setProducts(response.data);
    };
    getHomeData();
  }, []);

  return (
    <>
      <title>Ecom</title>
      <HeaderComponent cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}

export default HomePage;
