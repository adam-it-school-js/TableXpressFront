import React from "react";
import { AppRoles } from "./roles";

export interface IPropsContext {
  children?: React.ReactNode;
  roles?: Array<AppRoles>;
}
