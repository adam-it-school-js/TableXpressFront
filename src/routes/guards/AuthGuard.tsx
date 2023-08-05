import React, { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IPropsContext } from "../../@types";

export const AuthGuard: FC<IPropsContext> = (props): JSX.Element => {
  const { children, roles } = props;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {}, [location]);

  return <>{children}</>;
};
