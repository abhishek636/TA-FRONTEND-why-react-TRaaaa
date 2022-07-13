function Button(props) {
  function getStyle(){
    let {type='primary',size='medium'} = props;
    return `button button--${type} button--${size}`;
  }
  return (
    <>
      <button onClick={props.onClickHandler} className={getStyle()} disabled= {props.disabled}>
        {props.label || "Button"}
      </button>
    </>
  );
}
  
export default Button;