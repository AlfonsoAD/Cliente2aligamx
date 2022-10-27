const ButtonClick = (props) => {
  let { type, classN, text, click } = props;

  const Click = (e) => {
    console.log(click);
  };

  return (
    <button type={type} className={classN} onClick={Click}>
      {text}
    </button>
  );
};

export default ButtonClick;
