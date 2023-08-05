import React from "react";
import { AppRoles } from "../@types";

export interface IAppRouteSetting {
  path?: string;
  guard?: React.FunctionComponent<{ children: React.ReactNode; roles?: Array<AppRoles> }>;
  component?: React.FunctionComponent<any> | React.LazyExoticComponent<React.FunctionComponent<any>>;
  roles?: Array<AppRoles>;
}
