import {headphones} from "@/utils/data";
import style from "./home.module.css";

export const HomePage = () => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>наушники</h2>

      <div className={style.cards_wrapper}>
        {headphones.map((el) => (
          <div className={style.card}>{el.title}</div>
        ))}
      </div>
    </div>
  );
};
