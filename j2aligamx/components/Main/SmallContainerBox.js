const SmallContainerBox = ({ children }) => {
  return (
    <div className="shadow-2xl ... m-6 w-80 h-80 bg-white">
      <h1>Jornada 1</h1>
      <p>01/07      21:05</p>
      {children}
      <p>2 - 4</p>
      </div>
  );
};

export default SmallContainerBox;
