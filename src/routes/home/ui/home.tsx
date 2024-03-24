import {headphones} from "@/utils/data";
import style from "./home.module.css";
import {Img} from "@/components/image/ui/Image";
import {useContext} from "react";
import {CartContext} from "@/provider";

export const HomePage = () => {
  const {addItem} = useContext(CartContext);

  const addToCartHandler = (el: any) => {
    addItem(el);
  };

  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>наушники</h2>
      <div className={style.cards_wrapper}>
        {headphones.map((el) => (
          <div key={el.id} className={style.card}>
            <Img className={style.card_image} src={el.img} />
            <div className={style.card_bottom}>
              <div className={style.card_bottom_row1}>
                <h4>{el.title}</h4>
                <span className={style.card_price}>{`${el.price} ₽`}</span>
              </div>
              <div className={style.card_bottom_row2}>
                <span className={style.card_rate}>
                  <svg
                    width="25"
                    height="23"
                    viewBox="0 0 25 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6268 18.0143L5.41618 22.3656L7.37647 14.2449L0.960754 8.81491L9.38215 8.14829L12.6268 0.439671L15.8715 8.14829L24.2941 8.81491L17.8771 14.2449L19.8374 22.3656L12.6268 18.0143Z"
                      fill="#FFCE7F"
                    />
                  </svg>
                  {el.rate}
                </span>
                <button
                  type="button"
                  className={style.card_buttton}
                  onClick={() => addToCartHandler(el)}
                >
                  Купить
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
