//BY JESÚS ALFONSO ANDRADE DOMINGUEZ 18100149
//react
import React from "react";

const Container = ({ children }) => {
  //Regreso de componente
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
