import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';


function App() {

  const [listOfProperties, setListOfProperties] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8000/rentals/properties").then((response) => {
      setListOfProperties(response.data.data);
      console.log(listOfProperties);
    });
  }, []);

  return (
    <div className="App">
      <div className='propertyDisplay'>
        {listOfProperties.map((property) => {
          return (
            <div>
              <h1>Price: {property.price}</h1>
              <h1>Street: {property.address.street}</h1>
              <h1>Suburb: {property.address.suburb}</h1>
              {/* <h1>Suburb: {property.suburb}</h1>
              <h1>Price: {property.price}</h1> */}
            </div>
          )
        })}

      </div>
    </div>
  );
}

export default App;
