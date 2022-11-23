const SmallContainerBox = ({ children, id }) => {
  return (
    <div key={id} className="shadow-2xl ... m-6 w-80 h-80 bg-white">
      {children}
    </div>
  );
};

export default SmallContainerBox;
