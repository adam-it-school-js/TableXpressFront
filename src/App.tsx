import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { appRoutes, ROOT_PATHS } from "./routes";
import "./App.css";

export const App = () => {
  return (
    <Routes>
      {appRoutes.map((route) => {
        const Component: any = route.component;
        const Guard = route.guard;
        const Roles = route.roles;
        const Layout = route?.Layout;
        console.log(Layout);
        return (
          <React.Fragment key={route.path}>
            {Guard && (
              <>
                {Layout ? (
                  <Route
                    path={route.path}
                    element={
                      <Guard roles={Roles}>
                        <Layout>
                          <Component />
                        </Layout>
                      </Guard>
                    }
                  />
                ) : (
                  <Route
                    path={route.path}
                    element={
                      <Guard roles={Roles}>
                        <Component />
                      </Guard>
                    }
                  />
                )}
              </>
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
