import {IconCount, Logo} from "@/components";
import style from "./Header.module.css";
import {CartContext} from "@/provider";
import {CartIcon, HeartIcon} from "@/icons/icons";
import {useContext} from "react";
import {Link} from "react-router-dom";
import {ROUTES} from "@/components/footer/ui/Footer";

export const Header = () => {
  const cart = useContext(CartContext);

  return (
    <div className={style.header}>
      <Logo />
      <div className={style.headerIcons}>
        <Link to={ROUTES.FAVOURITES}>
          <IconCount count={0}>
            <HeartIcon />
          </IconCount>
        </Link>
        <Link to={ROUTES.CART}>
          <IconCount count={cart?.cart?.length}>
            <CartIcon />
          </IconCount>
        </Link>
      </div>
    </div>
  );
};
