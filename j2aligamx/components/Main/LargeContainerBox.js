import React from "react";

const LargeContainerBox = ({ children, id }) => {
  return (
    <div
      key={id}
      className="bg-white max-w-sm rounded overflow-hidden shadow-lg m-3 w-240"
    >
      {children}
    </div>
  );
};

export default LargeContainerBox;
