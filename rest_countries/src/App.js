import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  return (
    <div className="App">
      <Countries/>
    </div>
  );
}

function Countries(){
  //declire state 
  const [countries, setCountries] = useState([])
  ///load korte use effect lagbe

  useEffect(() =>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
    }
    ,[])

  return(
    <div>
      <h2>Traveling around the world : </h2>
      <h5>Countries : {countries.length}</h5>
    </div>
  )
}

export default App;
