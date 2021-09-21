import { useEffect, useState } from "react/cjs/react.development";
import "./styles/Translation.css";

function Translation(props) {
  const [inputedLanguage, setInputedLanguage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [translation, setTranslation] = useState("");
  const [submited, setSubmited] = useState("");
  const recievedData = props.onFetchedData;

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

  useEffect(() => {
    if (!recievedData && !inputedLanguage && !inputValue) {
      return;
    } else {
      fetch(
        `https://just-translated.p.rapidapi.com/?lang=${inputedLanguage}&text=${inputValue}`,
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
    }
  }, [inputValue, inputedLanguage, recievedData]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmited(translation);
    setInputValue("");
  };

  return (
    <div className="translation-container">
      <h2>Translator</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} value={inputValue} />
        <button>Sumbit</button>
      </form>
      <p>{submited}</p>
    </div>
  );
}

export default Translation;
