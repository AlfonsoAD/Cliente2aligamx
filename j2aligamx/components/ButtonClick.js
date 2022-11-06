const ButtonClick = (props) => {
  let { type, classN, text, click, disabled } = props;

  const ClickAction = (e) => {
    if (click) click(e);
  };

  return (
    <button
      type={type}
      className={classN}
      onClick={ClickAction}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ButtonClick;
