import { useState } from "react";
import style from "./Checkout.module.css";
import { Modal } from "@/components";
import { formatPrice } from "@/utils/helpers";
type TProps = {
  total: number;
  onCheckout: () => void;
};

export const Checkout = ({ total, onCheckout }: TProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.checkout}>
      <div className={style.checkout_top}>
        <div>Итого</div>
        <div>{formatPrice(total)}</div>
      </div>
      <button
        type="button"
        className={style.checkout_button}
        onClick={() => setOpen(true)}
      >
        Перейти к оформлению
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>
        123
      </Modal>
    </div>
  );
};
