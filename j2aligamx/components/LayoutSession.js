import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import React from "react";

const LayoutSession = ({ children }) => {
  return (
    <React.Fragment
    // className="bg-no-repeat bg-cover min-h-full"
    // style={{
    //   backgroundImage:
    //     "url(https://user-images.githubusercontent.com/90345024/198122753-735bf2ed-828c-4cd7-82b3-2daa5fc9c4fd.jpg)",
    //}}
    >
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default LayoutSession;
