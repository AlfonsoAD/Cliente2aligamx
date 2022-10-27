const Input = (props) => {
  let { typeInput, placeholder, autocomplete } = props;

  return (
    <input
      id={typeInput}
      name={typeInput}
      type={typeInput}
      autoComplete={autocomplete}
      required
      className="relative block w-full appearance-none rounded-none rounded-b-md border px-3 py-2 bg-white text-black placeholder-gray-500 sm:text-sm m-2"
      placeholder={placeholder}
    />
  );
};

export default Input;
