import { CartContext } from "@/provider";
import { useContext } from "react";
import style from "./Cart.module.css";

export const Cart = () => {
  const { addItem, cart, removeItem, deleteEntireItem } =
    useContext(CartContext);

  const getCartPrice = () => {
    return cart.reduce((acc, el) => acc + el.price * el.count, 0);
  };

  return (
    <div className={style.wrapper}>
      {!cart?.length && (
        <div className={style.empty_wrapper}>"Корзина пуста"</div>
      )}
      <div className={style.content}>
        <div className={style.cards_list}>
          {cart.map((cart_item) => (
            <div className={style.card}>
              <div>
                <img
                  className={style.img}
                  src={cart_item.img}
                  alt={cart_item.title}
                />
                <div className={style.buttons}>
                  <button onClick={() => removeItem(cart_item)}>-</button>
                  <span>{cart_item.count}</span>
                  <button onClick={() => addItem(cart_item)}>+</button>
                </div>
              </div>
              <div>
                <h4>{cart_item.title}</h4>
                <span>{cart_item.price}</span>
              </div>
              <div>
                <button onClick={() => deleteEntireItem(cart_item)}>
                  delete
                </button>
                <div>{`${cart_item.price * cart_item.count} ₽`}</div>
              </div>
            </div>
          ))}
        </div>
        <div className={style.checkout}>
          <div className={style.checkout_top}>
            <div>Итого</div>
            <div>{getCartPrice()}</div>
          </div>
          <button className={style.checkout_button}>
            Перейти к оформлению
          </button>
        </div>
      </div>
    </div>
  );
};
