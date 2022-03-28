import { useState, useEffect } from "react";
import "./App.css";
import { Navbar, CountriesList, CountryDetails } from "./components";
//import countries_db from "./countries.json"; //<= Using the JSON
import { Route, Routes } from "react-router-dom";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);

  /* useEffect(() => { //<= Using the JSON
    setCountries(countries_db);
  }, []); */

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountries(
          response.data.sort((a, b) => (a.name.common > b.name.common ? 1 : -1)) //<= Sorting API response
        );
      });
    /* fetch("https://ih-countries-api.herokuapp.com/countries") //<= Using fetch
      .then((response) => response.json())
      .then((data) =>
        setCountries(
          data.sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
        )
      ); */
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row text-center">
          <CountriesList countries={countries} />
          <Routes>
            <Route
              path="/:alpha3Code"
              /* render={(props) => { //<= DEPRECATED IN REACT ROUTER V6
                return <CountryDetails countries={countries} {...props} />;
              }} */
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
