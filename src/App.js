import "./App.css";

function App({ value, onIncrement, onDecrement }) {
  return (
    <div className="App">
      Click Here : {value}
      <br />
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}

export default App;
