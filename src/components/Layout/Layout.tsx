import React, { FC, ReactNode } from "react";
import { Header, SideBar } from "..";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex w-full">
      <SideBar />
      <div>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
