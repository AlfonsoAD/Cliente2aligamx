//BY JESÚS ALFONSO ANDRADE DOMINGUEZ 18100149
//Primer componente

const Input = (props) => {
  let { typeInput, placeholder, value, onchange } = props;

  return (
    <input
      type={typeInput}
      className="relative block w-full appearance-none rounded-none rounded-b-md border px-3 py-2 bg-white text-black placeholder-gray-500 sm:text-sm m-2"
      placeholder={placeholder}
      value={value}
      onChange={onchange}
    />
  );
};

export default Input;
