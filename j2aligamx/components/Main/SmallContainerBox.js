<<<<<<< HEAD
const SmallContainerBox = ({ children, id }) => {
  return (
    <div key={id} className="shadow-2xl ... m-6 w-80 h-80 bg-white">
      {children}
    </div>
=======
const SmallContainerBox = ({children}) => {
  return (
    <div className="shadow-2xl ... m-6 w-80 h-80 bg-white">
      {children}
      </div>
>>>>>>> 40de37046118e1f034c16f5bcef90367c2bd1c1f
  );
};

export default SmallContainerBox;
