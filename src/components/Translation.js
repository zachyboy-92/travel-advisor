import { useEffect, useState, useRef } from "react/cjs/react.development";
import "./styles/Translation.css";

// function Translation(props) {
//   const [inputedLanguage, setInputedLanguage] = useState("");
//   const [inputValue, setInputValue] = useState("");
//   const [inputedTranslation, setInputedTranslation] = useState(false);
//   const [translation, setTranslation] = useState("");
//   const [submited, setSubmited] = useState("");
//   const recievedData = props.onFetchedData;
//   const formIsSubmitted = props.isSubmitted;

//   useEffect(() => {
//     if (!recievedData) {
//       return;
//     } else {
//       return recievedData.map((data) => {
//         return data.languages.map((language) =>
//           setInputedLanguage(language.iso639_1)
//         );
//       });
//     }
//   }, [recievedData]);

//   useEffect(() => {
//     if (inputValue && inputedTranslation) {
//       fetch(
//         `https://just-translated.p.rapidapi.com/?lang=${inputedLanguage}&text=${inputValue}`,
//         {
//           method: "GET",
//           headers: {
//             "x-rapidapi-host": "just-translated.p.rapidapi.com",
//             "x-rapidapi-key":
//               "a831ce6793msh5db70e8f597c291p1a5d6cjsn9fbe4d2569ab",
//           },
//         }
//       )
//         .then((response) => response.json())
//         .then((data) => setTranslation(data.text[0]))
//         .catch((err) => {
//           console.error(err);
//         });
//     } else {
//       return;
//     }
//   }, [inputedTranslation, inputValue]);

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmited(translation);
//     setInputValue("");
//     setInputedTranslation(!inputedTranslation);
//     console.log(inputValue);
//     console.log(inputedTranslation);
//   };

//   return (
//     <div
//       className="translation-container"
//       style={{ display: formIsSubmitted ? "block" : "none" }}
//     >
//       <h2>Translator</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" onChange={handleInputChange} value={inputValue} />
//         <button>Sumbit</button>
//       </form>
//       <div>{inputedTranslation ? <p>{submited}</p> : ""}</div>
//     </div>
//   );
// }

function Translation(props) {
  // stores language value from FORM
  const [inputedLanguage, setInputedLanguage] = useState("");
  const [translation, setTranslation] = useState("");
  const [storeInputValue, setStoreInputValue] = useState("");
  const [buttonNumber, setButtonNumber] = useState();
  const inputRef = useRef();
  const recievedData = props.onFetchedData;
  const formIsSubmitted = props.isSubmitted;
  const inputValue = props.storedInput;

  console.log(inputValue);

  // Language value recieved from FORM
  useEffect(() => {
    if (!recievedData) {
      return;
    } else {
      return recievedData.map((data) => {
        return data.languages.map((language) =>
          setInputedLanguage(language.iso639_1)
        );
      });
    }
  }, [recievedData]);

  // Fetch Translation data
  useEffect(() => {
    if ((storeInputValue, inputValue)) {
      fetch(
        `https://just-translated.p.rapidapi.com/?lang=${inputedLanguage}&text=${storeInputValue}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "just-translated.p.rapidapi.com",
            "x-rapidapi-key":
              "a831ce6793msh5db70e8f597c291p1a5d6cjsn9fbe4d2569ab",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => setTranslation(data.text[0]))
        .catch((err) => {
          console.error(err);
        });
    } else {
      return;
    }
  }, [storeInputValue, inputedLanguage, inputValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (buttonNumber === 1) {
      setStoreInputValue(inputRef.current.value);
      inputRef.current.value = "";
    }
    if (buttonNumber === 2) {
      document.getElementById("translation").innerHTML = "";
    }
  };

  return (
    <div
      className="translation-container"
      style={{ display: inputValue ? "block" : "none" }}
    >
      <h2>Translator</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <div className="button-container">
          <button type="submit" onClick={() => setButtonNumber(1)}>
            Sumbit
          </button>
          <button type="submit" onClick={() => setButtonNumber(2)}>
            Clear
          </button>
        </div>
      </form>
      {translation ? <p id="translation">{translation}</p> : ""}
    </div>
  );
}

export default Translation;
