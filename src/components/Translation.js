import { useEffect, useState, useRef, useContext } from "react";
import { StoreValue } from "./Travel";
import "./styles/Translation.css";

function Translation(props) {
  // stores language value from FORM
  const [inputedLanguage, setInputedLanguage] = useState("");
  const [translation, setTranslation] = useState("");
  const [storeInputValue, setStoreInputValue] = useState("");
  const [buttonNumber, setButtonNumber] = useState();
  const inputRef = useRef();

  // Passed data from Travel
  const { input, languageCode } = useContext(StoreValue);

  // Language value recieved from FORM
  // useEffect(() => {
  //   if (!recievedData) {
  //     return;
  //   } else {
  //     return recievedData.map((data) => {
  //       return data.languages.map((language) =>
  //         setInputedLanguage(language.iso639_1)
  //       );
  //     });
  //   }
  // }, [recievedData]);

  // // Language value recieved from FORM
  // useEffect(() => {
  //   if (!recievedData) {
  //     return;
  //   } else {
  //     return recievedData.map((data) => {
  //       setInputedLanguage(data.languages[2]);
  //       console.log(inputedLanguage);
  //     });
  //   }
  // }, [recievedData]);

  // Fetch Translation data
  useEffect(() => {
    if ((storeInputValue, languageCode)) {
      console.log(languageCode, storeInputValue);
      fetch(
        `https://just-translated.p.rapidapi.com/?lang=${languageCode}&text=${storeInputValue}`,
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
  }, [storeInputValue, input]);

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
      style={{ display: input ? "block" : "none" }}
    >
      <h2>Translator</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <input id="translation-input" type="text" ref={inputRef} />
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
