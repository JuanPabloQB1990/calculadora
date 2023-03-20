const TecladoNum = ({handleClear, handleClick, handleEqual}) => {

    return(
        <div className='flex justify-between'>
            <div className='grid grid-cols-3 grid-rows-3 gap-2 mt-2 mb-2 px-2 w-full'>
              <button className='border-2 border-black' onClick={()=>handleClick(7)}>7</button>
              <button className='border-2 border-black' onClick={()=>handleClick(8)}>8</button>
              <button className='border-2 border-black' onClick={()=>handleClick(9)}>9</button>
              <button className='border-2 border-black' onClick={()=>handleClick(4)}>4</button>
              <button className='border-2 border-black' onClick={()=>handleClick(5)}>5</button>
              <button className='border-2 border-black' onClick={()=>handleClick(6)}>6</button>
              <button className='border-2 border-black' onClick={()=>handleClick(1)}>1</button>
              <button className='border-2 border-black' onClick={()=>handleClick(2)}>2</button>
              <button className='border-2 border-black' onClick={()=>handleClick(3)}>3</button>
              <button className='border-2 border-black' onClick={()=>handleClick(0)}>0</button>
              <button className='border-2 border-black' onClick={handleEqual}>=</button>
              <button className='border-2 border-black' onClick={handleClear}>AC</button>
            </div>
            <div className='flex flex-col gap-y-2 mt-2 mr-2'>
              <button className='border-2 border-black px-3' onClick={()=>handleClick(7)}>/</button>
              <button className='border-2 border-black px-3' onClick={()=>handleClick(7)}>*</button>
              <button className='border-2 border-black px-3' onClick={()=>handleClick(7)}>-</button>
              <button className='border-2 border-black px-3' onClick={()=>handleClick(7)}>+</button>
            </div>
          </div>
    )
}

export default TecladoNum