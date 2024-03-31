import { data } from "@/utils/data";
import style from "./home.module.css";
import { Img } from "@/components/image/ui/Image";
import { useContext } from "react";
import { CartContext, TCartItem } from "@/provider";
import { StarIcon } from "@/icons/icons";

type TCardProps = {
  img: string;
  title: string;
  price: number;
  rate: number;
  addToCart: () => void;
  numberInCart?: number;
};

const Card = ({
  img,
  title,
  price,
  rate,
  addToCart,
  numberInCart,
}: TCardProps) => (
  <div className={style.card}>
    <Img className={style.card_image} src={img} />
    <div className={style.card_bottom}>
      <div className={style.card_bottom_row1}>
        <h4 className={style.card_title}>{title}</h4>
        <span className={style.card_price}>{`${price} ₽`}</span>
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

export const HomePage = () => {
  const { addItem, cart } = useContext(CartContext);

  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>{data.fisrt_feed.title}</h2>
      <div className={style.cards_wrapper}>
        {data.fisrt_feed.elements.map((el) => (
          <Card
            key={el.id}
            addToCart={() => addItem(el)}
            img={el.img}
            price={el.price}
            rate={el.rate}
            title={el.title}
            numberInCart={
              cart.find((item: TCartItem) => item.id === el.id)?.count
            }
          />
        ))}
      </div>
      <h2 className={style.title}>{data.second_feed.title}</h2>
      <div className={style.cards_wrapper}>
        {data.second_feed.elements.map((el) => (
          <Card
            key={el.id}
            addToCart={() => addItem(el)}
            img={el.img}
            price={el.price}
            rate={el.rate}
            title={el.title}
            numberInCart={
              cart.find((item: TCartItem) => item.id === el.id)?.count
            }
          />
        ))}
      </div>
    </div>
  );
};
