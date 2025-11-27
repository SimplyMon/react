import { formatMoney } from "../../utils/money";
import dayjs from "dayjs";
import axios from "axios";

export function DeliveryOptions({ deliveryOptions, cartItem, loadCart }) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>

      {deliveryOptions.map((delOption) => {
        let priceString = "Free Shipping";

        if (delOption.priceCents > 0) {
          priceString = `${formatMoney(delOption.priceCents)} - Shipping`;
        }

        const updateDeliveryOption = async () => {
          await axios.put(`api/cart-items/${cartItem.productId}`, {
            deliveryOptionId: delOption.id,
          });
          await loadCart();
        };
        return (
          <div
            key={delOption.id}
            className="delivery-option"
            onClick={updateDeliveryOption}
          >
            <input
              type="radio"
              checked={delOption.id === cartItem.deliveryOptionId}
              onChange={() => {}}
              className="delivery-option-input"
              name={`delivery-option-${cartItem.productId}`}
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(delOption.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM D"
                )}
              </div>
              <div className="delivery-option-price">{priceString}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
