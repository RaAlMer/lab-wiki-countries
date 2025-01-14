import "./CountryDetails.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export function CountryDetails({ countries }) {
  const [foundCountry, setFoundCountry] = useState(null);
  const { alpha3Code } = useParams();

  useEffect(() => {
    const country = countries.find((countryObj) => {
      return countryObj.alpha3Code === alpha3Code;
    });
    if (country) {
      setFoundCountry(country);
    }
  }, [alpha3Code]);

  const findBorder = (border) => {
    const found = countries.find((country) => {
      return border === country.alpha3Code;
    });
    return found.name.common;
  };

  return (
    <div className="col-7">
      {foundCountry && (
        <>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
            alt="country flag"
            style={{ width: "300px" }}
          />
          <h1>{foundCountry.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: "30%" }}>Capital</td>
                <td>{foundCountry.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {foundCountry.area} km <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul style={{ listStyle: "none" }}>
                    {foundCountry.borders.map((border, index) => {
                      return (
                        <li key={index}>
                          <Link to={`/${border}`}>{findBorder(border)}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
