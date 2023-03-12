import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CountryDetails = ({ countries }) => {
  const { countryId } = useParams();
  const [countryInfo, setCountryInfo] = useState('');
  useEffect(() => {
    const countryArr = [...countries].filter(
      (elem) => elem.alpha3Code.toLowerCase() === countryId
    );
    setCountryInfo(countryArr[0]);
  }, [countryId]);

  if (!countryInfo) {
    return <p>Loading</p>;
  } else {
    return (
      <div className="col-7">
        <h1>{countryInfo.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30 %' }}>Capital</td>
              <td>{countryInfo.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {`${countryInfo.area} km`}
                <sup>2</sup>
              </td>
            </tr>
            {countryInfo.borders.length > 0 && (
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {countryInfo.borders.map((elem) => {
                      return (
                        <li>
                          <Link to={`/country/${elem.toLowerCase()}`}>
                            {
                              countries.find(
                                (country) =>
                                  country.alpha3Code.toLowerCase() ===
                                  elem.toLowerCase()
                              ).name.common
                            }
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
};

export default CountryDetails;
