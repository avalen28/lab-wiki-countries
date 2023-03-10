import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          {countries.map((elem) => {
            return (
              <NavLink
                to={`/country/${elem.alpha3Code.toLowerCase()}`}
                className="list-group"
              >
                <img
                  className="list-group-item list-group-item-action"
                  src={`https://flagpedia.net/data/flags/icon/72x54/${elem.alpha2Code.toLowerCase()}.png`}
                  alt="country-flag"
                />
                <p>{elem.name.common}</p>
              </NavLink>
            );
          })}
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default CountriesList;
