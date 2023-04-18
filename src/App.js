import "./styles.css";
import Test from "./Test";

export default function App() {
  return (
    <div className="App">
      <h1>useRef</h1>
      <h2>
        useRef returns a mutable ref object whose .current property is
        initialized to the passed arguments(initialvalue).The return object will
        persist for the full lifetime of the component.
      </h2>

      <Test />
    </div>
  );
}
