import { useEffect, useRef, useState } from "react";
import "./styles/Form.css";

function Form(props) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (formSubmitted) {
      props.onSaveFormSubmitted(formSubmitted);
    } else {
      props.onSaveFormSubmitted(false);
    }
  }, [formSubmitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSaveInput(inputRef.current.value);
    inputRef.current.value = "";
    setFormSubmitted(!formSubmitted);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input type="text" placeholder="Insert Country" ref={inputRef} />
      <button>Search</button>
    </form>
  );
}

export default Form;
