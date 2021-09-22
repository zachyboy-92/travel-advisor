import { useEffect, useRef } from "react";
import { useState } from "react/cjs/react.development";
import "./styles/Form.css";

function Form(props) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSaveInput(inputRef.current.value);
    inputRef.current.value = "";
    setFormSubmitted(!formSubmitted);
  };

  if (formSubmitted) {
    props.onSaveFormSubmitted(formSubmitted);
  } else {
    props.onSaveFormSubmitted(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Insert Country" ref={inputRef} />
      <button>Search</button>
    </form>
  );
}

export default Form;
