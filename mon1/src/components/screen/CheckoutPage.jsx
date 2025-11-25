import axios from "axios";
import { useEffect, useState } from "react";
import "../../assets/styles/checkout/checkout.css";
import "../../assets/styles/checkout/checkout-header.css";
import { CheckoutPaymentSummary } from "../layout/CheckoutPaymentSummary";
import { OrderPageSummary } from "../layout/OrderPageSummary";
import { CheckoutHeader } from "../layout/CheckoutHeader";

function CheckoutPage({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get("api/delivery-options?expand=estimatedDeliveryTime")
  //     .then((response) => {
  //       setDeliveryOptions(response.data);
  //     });

  //   axios.get("api/payment-summary").then((response) => {
  //     setPaymentSummary(response.data);
  //   });
  // }, []);

  useEffect(() => {
    const fecthCheckoutData = async () => {
      let response = await axios.get(
        "api/delivery-options?expand=estimatedDeliveryTime"
      );

      setDeliveryOptions(response.data);

      response = await axios.get("api/payment-summary");
      setPaymentSummary(response.data);
    };
    fecthCheckoutData();
  }, []);

  return (
    <>
      <title>Checkout</title>
      <CheckoutHeader cart={cart} />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>
        <div className="checkout-grid">
          <OrderPageSummary deliveryOptions={deliveryOptions} cart={cart} />
          <CheckoutPaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;
