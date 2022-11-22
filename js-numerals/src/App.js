import "./App.css";
import ConversionForm from "./Components/ConversionForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello!</h1>
        <p>
          Please enter a number in the field below, then click Submit to
          convert.
        </p>
        <div className="App-converter">
          <ConversionForm />
        </div>
      </header>
    </div>
  );
}

export default App;
