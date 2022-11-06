const Input = (props) => {
  let { typeInput, placeholder, pattern, title, onchange } = props;

  return (
    <input
      type={typeInput}
      className="relative block w-full appearance-none rounded-none rounded-b-md border px-3 py-2 bg-white text-black placeholder-gray-500 sm:text-sm m-2"
      placeholder={placeholder}
      onChange={onchange}
    />
  );
};

export default Input;
