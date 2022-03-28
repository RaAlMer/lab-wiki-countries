import "./CountriesList.css";
import { Link } from "react-router-dom";

export function CountriesList({ countries }) {
  return (
    <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
      <div className="list-group">
        {countries.map((country, index) => (
          <Link
            key={index}
            className="list-group-item list-group-item-action"
            to={`/${country.alpha3Code}`}
          >
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt={country.name.common}
            />
            <p>{country.name.common}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
