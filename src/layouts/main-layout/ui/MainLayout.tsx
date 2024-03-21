import {Outlet} from "react-router-dom";
import {Footer, Header} from "@/components";

import style from "./MainLayout.module.css";

export const MainLayout = () => {
  return (
    <div className={style.wrapper}>
      <Header></Header>
      <div className={style.outlet}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
