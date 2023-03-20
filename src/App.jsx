import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput("0")
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

        <div className="">
          <div className="grid grid-cols-4 gap-2 p-2">
            <button
              className="border-2 border-black bg-slate-800 text-white hover:bg-slate-600"
              onClick={() => handleClick("7")}
            >
              7
            </button>
            <button
              className="border-2 border-black bg-slate-800 text-white hover:bg-slate-600"
              onClick={() => handleClick("8")}
            >
              8
            </button>
            <button
              className="border-2 border-black bg-slate-800 text-white hover:bg-slate-600"
              onClick={() => handleClick("9")}
            >
              9
            </button>
            <button
              className="border-2 border-black bg-slate-800 text-white hover:bg-slate-600"
              onClick={() => handleClick("/")}
            >
              /
            </button>
            <button
              className="border-2 border-black bg-slate-800 text-white hover:bg-slate-600"
              onClick={() => handleClick("4")}
            >
              4
            </button>
            <button
              className="border-2 border-black bg-slate-800 text-white hover:bg-slate-600"
              onClick={() => handleClick("5")}
            >
              5
            </button>
            <button
              className="border-2 border-black bg-slate-800 text-white hover:bg-slate-600"
              onClick={() => handleClick("6")}
            >
              6
            </button>
            <button
              className="border-2 border-black bg-slate-800 text-white hover:bg-slate-600"
              onClick={() => handleClick("*")}
            >
              *
            </button>
            <button
              className="border-2 border-black bg-slate-800 text-white hover:bg-slate-600"
              onClick={() => handleClick("1")}
            >
              1
            </button>
            <button
              className="border-2 border-black bg-slate-800 text-white hover:bg-slate-600"
              onClick={() => handleClick("2")}
            >
              2
            </button>
            <button
              className="border-2 border-black bg-slate-800 text-white hover:bg-slate-600"
              onClick={() => handleClick("3")}
            >
              3
            </button>
            <button
              className="border-2 border-black bg-slate-800 text-white hover:bg-slate-600"
              onClick={() => handleClick("-")}
            >
              -
            </button>
            <button
              className="border-2 border-black bg-slate-800 text-white hover:bg-slate-600"
              onClick={() => handleClick("0")}
            >
              0
            </button>
            <button
              className="border-2 border-black bg-slate-800 text-white hover:bg-slate-600"
              onClick={handleClear}
            >
              AC
            </button>
            <button
              className="border-2 border-black bg-slate-800 text-white hover:bg-slate-600"
              onClick={handleEqual}
            >
              =
            </button>
            <button
              className="border-2 border-black bg-slate-800 text-white hover:bg-slate-600"
              onClick={() => handleClick("+")}
            >
              +
            </button>
            <button
              className="border-2 border-black bg-slate-800 text-white hover:bg-slate-600"
              onClick={handlePotencia}
            >
              X <sup>2</sup>
            </button>
            <button
              onClick={handleBack}
              className="border-2 border-black bg-slate-800 hover:bg-slate-600 text-white px-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
