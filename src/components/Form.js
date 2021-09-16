import { useEffect, useRef } from "react";
import "./styles/Form.css";

function Form(props) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSaveInput(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Insert Country" ref={inputRef} />
      <button>Search</button>
    </form>
  );
}

export default Form;
