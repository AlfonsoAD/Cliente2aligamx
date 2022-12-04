const ButtonClick = (props) => {
  let { type, text, clase, click } = props;

  const ClickAction = (e) => {
    if (click) click(e);
  };

  const classStyle = {
    regular:
      "group relative flex w-full justify-center rounded-md border border-transparent bg-blueMenu  px-3 py-2 text-sm font-medium text-white hover:bg-blueButton focus:outline-none focus:ring-2 focus:ring-blueButton2 focus:ring-offset-2 m-2",
    success:
      "group relative flex w-full justify-center rounded-md border border-transparent bg-lime-600 px-3 py-2 text-sm font-medium text-white hover:bg-lime-900 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:ring-offset-2 m-2",
    danger:
      "group relative flex w-full justify-center rounded-md border border-transparent bg-red-700 px-3 py-2 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 m-2",
    config:
      "group relative flex w-full justify-center rounded-md border border-transparent bg-yellow-300 px-3 py-2 text-sm font-medium text-white hover:yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 m-2",
  };
  return (
    <button type={type} className={classStyle[clase]} onClick={ClickAction}>
      {text}
    </button>
  );
};

export default ButtonClick;
