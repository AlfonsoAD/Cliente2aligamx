const ButtonClick = (props) => {
  let { type, text, click } = props;

  const ClickAction = (e) => {
    if (click) click(e);
  };

  return (
    <button
      type={type}
      className="group relative flex w-full justify-center rounded-md border border-transparent bg-blueMenu  px-3 py-2 text-sm font-medium text-white hover:bg-blueButton focus:outline-none focus:ring-2 focus:ring-blueButton2 focus:ring-offset-2"
      onClick={ClickAction}
    >
      {text}
    </button>
  );
};

export default ButtonClick;
