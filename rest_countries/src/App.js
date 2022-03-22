
import './App.css';

import Countries from './components/Countries/Countries'
import Header from './components/Header/Header';
// import {useState, useEffect} from 'react';

function App() {
  return (
    <div className="App">
      <Header/>
      <Countries/>
    </div>
  );
}
/* 
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
      <div>
        {
          countries.map(country => <Country name = {country.name.official}/>)
          //console.log(country.name.official
        }
      </div>
    </div>
  )
}

function Country(props){
  return (
    <div> <h6>Name : {props.name}</h6></div>
  )
}
 */
export default App;
