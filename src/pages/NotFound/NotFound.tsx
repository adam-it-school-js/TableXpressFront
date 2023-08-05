import React from "react";

const NotFound: React.FC<{}> = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-red-300 text-4xl">404</h1>
      <p className="text-red-300 text-2xl">Oops. Looks like the page you are looking for no longer exists</p>
    </div>
  );
};

export default NotFound;
