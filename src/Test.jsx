import { useRef } from "react";

function Test() {
  const inputRef = useRef();

  function handleRef() {
    console.log(inputRef, "handleRef");
    inputRef.current.focus();
    //inputRef.current.value = "abc";
    console.log(inputRef.current.value);
    inputRef.current.style.color = "red";
    inputRef.current.style.display = "none";
  }
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleRef}>Click</button>
    </div>
  );
}

export default Test;
