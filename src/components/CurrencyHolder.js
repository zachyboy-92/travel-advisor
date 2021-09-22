import CurrencyExchange from "./CurrencyExchange";

function CurrencyHolder(props) {
  let recievedData = props.onFetchedData;
  const formIsSubmitted = props.isSubmitted;
  const inputValue = props.storedInput;

  return (
    <div>
      <CurrencyExchange
        onRecievedData={recievedData}
        recievedForm={formIsSubmitted}
        recievedInputValue={inputValue}
      />
    </div>
  );
}

export default CurrencyHolder;
