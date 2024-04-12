import { getProductById } from "@/utils/data";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import style from "./Product.module.css";
import { Button, Img } from "@/components";
import { TCartItem } from "@/provider";
import { Rating } from "@/routes/home/HomeComponents/Card/ui/Card";
import { formatPrice } from "@/utils/helpers";

export const ProductPage = () => {
  const [product, setProduct] = useState<TCartItem>();

  const { product_id } = useParams();
  console.log(product);
  useEffect(() => {
    if (!product_id) return;

    const product = getProductById(+product_id);

    if (!product?.response) return;

    setProduct(product.response);
  }, [product_id]);

  if (product)
    return (
      <div className={style.wrapper}>
        <Img src={product?.img} />
        <div>
          <div className={style.title_Wrapper}>
            <h2>{product.title}</h2>
            <Rating rate={product.rate} />
          </div>
          <div className={style.priceWrapper}>
            <div className={style.price}>{formatPrice(product.price)}</div>
            <Button className={style.button}>В корзину</Button>
          </div>

          <p>{product.description}</p>
        </div>
      </div>
    );
};
