import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import style from "./Error.module.css";

export const Error = () => {
  const error = useRouteError();
  console.error(error);
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error?.data?.message || error.statusText;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  return <h3 className={style.wrapper}>{errorMessage}</h3>;
};
