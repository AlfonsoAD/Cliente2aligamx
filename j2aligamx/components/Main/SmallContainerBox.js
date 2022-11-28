const SmallContainerBox = ({ children, id }) => {
  return (
    <div key={id} className="shadow-2xl ... m-4 w-80 h-100 bg-white">
      {children}
    </div>
  );
};

export default SmallContainerBox;
