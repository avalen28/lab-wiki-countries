import './App.css';
import countries from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList countries={countries} />}>
          <Route
            path="/country/:countryId"
            element={<CountryDetails countries={countries} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
