import { useState } from "react";
import "./App.css";
import TecladoNum from "./componentes/TecladoNum";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput("0");
    setInput(input.concat(value));
  };

  const handlePotencia = () => {
    setInput(Math.pow(input, 2));
  };

  const handleEqual = () => {
    setInput(eval(input));
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBack = () => {
    let numeros = input.split("");
    let num = numeros.pop();
    setInput(numeros.join("").toString());
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-orange-500 h-68 border-solid border-2 border-black rounded-md">
        <div className="bg-slate-200 h-12 w-auto text-right my-1 mx-1 px-1 py-1 font-bold text-3xl">
          <h1>{input}</h1>
        </div>

        <TecladoNum
          handleClear={handleClear}
          handleClick={handleClick}
          handleEqual={handleEqual}
          handlePotencia={handlePotencia}
          handleBack={handleBack}
        />
      </div>
    </div>
  );
}

export default App;
