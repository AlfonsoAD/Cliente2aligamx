const ButtonClick = (props) => {
  let { type, classN, text, click } = props;

  const ClickAction = (e) => {
    if (click) click(e);
  };

  return (
    <button type={type} className={classN} onClick={ClickAction}>
      {text}
    </button>
  );
};

export default ButtonClick;
