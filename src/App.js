import { useState, useEffect } from 'react';
import './App.css';
import { Navbar, CountriesList, CountryDetails } from './components';
import countries_db from './countries.json';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(countries_db);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <Routes>
            <Route
              path="/"
              element={
                <div
                  className="col-5"
                  style={{ maxHeight: '90vh', overflow: 'scroll' }}
                >
                  <CountriesList countries={countries} />
                </div>
              }
            />
            <Route
              path="/:alpha3Code"
              /* render={(props) => {
                return <CountryDetails {...props} countries={countries} />
              }} */
              element={
                  <CountryDetails countries={countries} />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
