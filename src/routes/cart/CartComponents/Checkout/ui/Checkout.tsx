import style from "./Checkout.module.css";
type TProps = {
  total: number;
  onCheckout: () => void;
};

export const Checkout = ({ total, onCheckout }: TProps) => {
  return (
    <div className={style.checkout}>
      <div className={style.checkout_top}>
        <div>Итого</div>
        <div>{total}</div>
      </div>
      <button className={style.checkout_button} onClick={onCheckout}>
        Перейти к оформлению
      </button>
    </div>
  );
};
