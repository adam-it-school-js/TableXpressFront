import { IAppRouteSetting } from "./app.route.setting";
import { AuthGuard } from "./guards";
import { lazy } from "react";
import { AppRoles } from "../@types";
import { ROOT_PATHS } from "./root.paths";

export const appRoutes: IAppRouteSetting[] = [
  {
    path: ROOT_PATHS.signIn,
    guard: AuthGuard,
    roles: [AppRoles.ADMIN],
    component: lazy(() => import("../pages/SignIn/SignInPage")),
  },
  {
    path: ROOT_PATHS.notfound,
    component: lazy(() => import("./../pages/NotFound/NotFound")),
  },
  {
    path: ROOT_PATHS.dashboard,
    guard: AuthGuard,
    roles: [AppRoles.ADMIN],
    component: lazy(() => import("../pages/Dashboard/DashboardPage")),
    Layout: lazy(() => import("../components/Layout/Layout")),
  },
];
