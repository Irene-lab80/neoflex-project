import { Img } from "@/components";
import { StarIcon } from "@/icons/icons";

import style from "./Card.module.css";
import { formatPrice } from "@/utils/helpers";

type TProps = {
  img: string;
  title: string;
  price: number;
  rate: number;
  addToCart: () => void;
  numberInCart?: number;
};

export const Card = ({
  img,
  title,
  price,
  rate,
  addToCart,
  numberInCart,
}: TProps) => (
  <div className={style.card}>
    <Img className={style.card_image} src={img} />
    <div className={style.card_bottom}>
      <div className={style.card_bottom_row1}>
        <h4 className={style.card_title}>{title}</h4>
        <span className={style.card_price}>{formatPrice(price)}</span>
      </div>
      <div className={style.card_bottom_row2}>
        <span className={style.card_rate}>
          <StarIcon />
          {rate}
        </span>
        <button
          type="button"
          className={style.card_buttton}
          onClick={addToCart}
        >
          {numberInCart ? `В корзине ${numberInCart} +` : "Купить"}
        </button>
      </div>
    </div>
  </div>
);
