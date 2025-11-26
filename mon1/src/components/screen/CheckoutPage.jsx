import axios from "axios";
import { useEffect, useState } from "react";
import "../../assets/styles/checkout/checkout.css";
import "../../assets/styles/checkout/checkout-header.css";
import { CheckoutPaymentSummary } from "../layout/CheckoutPaymentSummary";
import { OrderPageSummary } from "../layout/OrderPageSummary";
import { CheckoutHeader } from "../layout/CheckoutHeader";

function CheckoutPage({ cart, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    const fecthCheckoutData = async () => {
      try {
        let response = await axios.get(
          "api/delivery-options?expand=estimatedDeliveryTime"
        );
        setDeliveryOptions(response.data);

        response = await axios.get("api/payment-summary");
        setPaymentSummary(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fecthCheckoutData();
  }, [cart]);

  return (
    <>
      <title>Checkout</title>
      <CheckoutHeader cart={cart} />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>
        <div className="checkout-grid">
          <OrderPageSummary
            deliveryOptions={deliveryOptions}
            cart={cart}
            loadCart={loadCart}
          />
          <CheckoutPaymentSummary
            paymentSummary={paymentSummary}
            loadCart={loadCart}
          />
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;
