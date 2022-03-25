import { useState } from "react";
import "./App.css";
import { Navbar, CountriesList, CountryDetails } from "./components";
import countries_db from "./countries.json";
import { Route, Routes } from "react-router-dom";

function App() {
  const [countries, setCountries] = useState(countries_db);
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <Routes>
            <Route path="/" element= {
              <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
                <CountriesList countries={countries} />
              </div>
            } />
            <Route render={(props) => <CountryDetails {...props} countries={countries} /> } />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
