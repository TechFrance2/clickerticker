function Button(props) {
  //const handleClick =
  return (
    <div className="App">
      <button onClick={props.onClickFunction}>+{props.increment}</button>
    </div>
  );
}

export default Button;
