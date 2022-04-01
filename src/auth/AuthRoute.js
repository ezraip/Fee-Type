/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
import { Redirect, Route } from "react-router-dom";

export default function AuthRoute({ children, reverse = false, ...props }) {
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      render={children}
    />
  );
}
