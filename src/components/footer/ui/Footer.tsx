import {Logo} from "@/components";
import {Link} from "react-router-dom";

import style from "./Footer.module.css";
import {TGIcon, VIberIcon, VKIcon} from "@/icons/icons";

export enum ROUTES {
  FAVOURITES = "favourites",
  CART = "cart",
  CONTACTS = "contacts",
  TOS = "tos",
}

export const Footer = () => {
  return (
    <div className={style.wrapper}>
      <Logo />
      <ul className={style.list}>
        <li className={style.listItem}>
          <Link className={style.link} to={ROUTES.FAVOURITES}>
            Избранное
          </Link>
        </li>
        <li className={style.listItem}>
          <Link className={style.link} to={ROUTES.CART}>
            Корзина
          </Link>
        </li>
        <li className={style.listItem}>
          <Link className={style.link} to={ROUTES.CONTACTS}>
            Контакты
          </Link>
        </li>
      </ul>
      <ul className={style.list}>
        <li className={style.listItem}>
          <Link className={style.link} to={ROUTES.TOS}>
            Условия сервиса
          </Link>
        </li>
        <li className={style.listItem}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2_187)">
              <path
                d="M1.66666 9.99996C1.66666 14.6025 5.3975 18.3333 10 18.3333C14.6025 18.3333 18.3333 14.6025 18.3333 9.99996C18.3333 5.39746 14.6025 1.66663 10 1.66663C5.3975 1.66663 1.66666 5.39746 1.66666 9.99996Z"
                stroke="#838383"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.8333 1.70825C10.8333 1.70825 13.3333 4.99992 13.3333 9.99992C13.3333 14.9999 10.8333 18.2916 10.8333 18.2916"
                stroke="#838383"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.16666 18.2916C9.16666 18.2916 6.66666 14.9999 6.66666 9.99992C6.66666 4.99992 9.16666 1.70825 9.16666 1.70825"
                stroke="#838383"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.19167 12.9166H17.8083"
                stroke="#838383"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.19167 7.08325H17.8083"
                stroke="#838383"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_187">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Рус Eng
        </li>
      </ul>
      <div className={style.socials}>
        <Link target="_blank" to="https://vk.ru">
          <VKIcon />
        </Link>
        <Link target="_blank" to="https://t.me/seniorFront">
          <TGIcon />
        </Link>
        <Link target="_blank" to="viber://pa?chatURI=medcentersvet_new">
          <VIberIcon />
        </Link>
      </div>
    </div>
  );
};
