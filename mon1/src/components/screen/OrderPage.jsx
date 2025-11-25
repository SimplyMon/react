import axios from "axios";
import { useState, useEffect } from "react";
import "../../assets/styles/orders.css";
import HeaderComponent from "../layout/HeaderComponent";
import { OrderHeader } from "../layout/orderHeader";
import { OrderDetails } from "../layout/OrderDetails";

function OrderPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("api/orders?expand=products").then((response) => {
      setOrders(response.data);
    });
  }, []);
  return (
    <>
      <HeaderComponent cart={cart} />
      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders.map((order) => {
            return (
              <div key={order.id} className="order-container">
                <OrderHeader order={order} />

                <OrderDetails order={order} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default OrderPage;
