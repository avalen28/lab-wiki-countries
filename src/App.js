import './App.css';
// import countries from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [dataCountry, setDataCountry] = useState([]);

  const callAPIcountry = async () => {
    try {
      const response = await axios.get(
        'https://ih-countries-api.herokuapp.com/countries'
      );
      console.log(response.data);
      setDataCountry(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    callAPIcountry();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList countries={dataCountry} />}>
          <Route
            path="/country/:countryId"
            element={<CountryDetails countries={dataCountry} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
