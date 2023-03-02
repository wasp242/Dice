import React, { useEffect, useState } from "react";
import Dice from "./Dice";

function App() {
  const [value1, setValue1] = useState(1)
  const [value2, setValue2] = useState(1)
  const [value3, setValue3] = useState(1)
  const [value4, setValue4] = useState(1)

  window.onkeypress = (event)=> {
    if (event.key === ' '){
      random(1)
    }
  }

  function random(param){
    const randomNum = Math.floor(Math.random()*6+1)
    switch (param){
      case 1:
        setValue1(randomNum)
        break;
      case 2:
        setValue2(randomNum)
        break;
      case 3:
        setValue3(randomNum)
        break;
      case 4:
        setValue4(randomNum)
        break;
    }
  }

  const styles = {
    outline: 'none', 
    border: 'none', 
    background: 'white', 
    cursor: 'pointer'
  }

  return (
    <div className="App">
      <button style={styles} onClick={()=>random(1)}>
        <Dice value={value1}/>
      </button>
      <button style={styles} onClick={()=>random(2)}>
        <Dice value={value2}/>
      </button>
      <button style={styles} onClick={()=>random(3)}>
        <Dice value={value3}/>
      </button>
      <button style={styles} onClick={()=>random(4)}>
        <Dice value={value4}/>
      </button>
    </div>
  );
}

export default App;
