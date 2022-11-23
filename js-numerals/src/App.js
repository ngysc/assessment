import "./App.css";
import ConversionForm from "./components/ConversionForm";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <h1>Hello!</h1>
        <p className="description">
          Please enter a number in the field below, then click Submit to
          convert.
        </p>
        <div className="App-converter">
          <ConversionForm />
        </div>
      </div>
    </div>
  );
}

export default App;
