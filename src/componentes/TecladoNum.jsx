const TecladoNum = ({
  handleClear,
  handleClick,
  handleEqual,
  handlePotencia,
  handleBack,
}) => {
  return (
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
  );
};

export default TecladoNum;
