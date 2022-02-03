// import logo from './logo.svg';
import './App.css';
import react, { useEffect, useState } from "react"

function App() {

    var today = new Date();
    var tYear = today.getFullYear()
    var tMonth = today.getMonth() + 1
    var tDate = today.getDate()

    const [age, setAge] = useState(0);

    function ageCalculate()
    {

      var bDate = document.getElementById("date").value;
      var bMonth = document.getElementById("month").value;
      var bYear = document.getElementById("year").value;

      setAge(tYear - bYear - 1)
      if(tMonth > bMonth)
      {
          setAge(tYear - bYear);
      }
      else if(tMonth == bMonth)
      {
          if(tDate >= bDate)
          {
              setAge(tYear - bYear);
          }
      }

    }
    
  return (
    <div className="app">
      <h1>Enter your date of birth</h1>
      <div className="input_date">
        <input id="date" type="text" placeholder="Date" ></input>
        <input id="month" type="text" placeholder="Month" ></input>
        <input id="year" type="text" placeholder="Year" ></input>
        
      </div>

      <button className="btn" onClick={ ageCalculate }>Calculate</button>

      <h1>Your age: </h1>
      <h1> {`${age}`} </h1>
    </div>
  );
}

export default App;
