import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { appRoutes, ROOT_PATHS } from "./routes";
import "./App.css";
import Layout from "./components/Layout/Layout";

export const App = () => {
  return (
    <Routes>
      {appRoutes.map((route) => {
        const Component: any = route.component;
        const Guard = route.guard;
        const Roles = route.roles;
        const Layout = route.Layout;
        return (
          <React.Fragment key={route.path}>
            {Guard && (
              <Route
                path={route.path}
                element={
                  <Guard roles={Roles}>
                    <Component />
                  </Guard>
                }
              />
            )}
            {!Guard && <Route path={route.path} element={<Component />} />}
          </React.Fragment>
        );
      })}
      <Route path="*" element={<Navigate to={ROOT_PATHS.notfound} />} />
    </Routes>
  );
};

export default App;
