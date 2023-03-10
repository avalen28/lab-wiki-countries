import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CountryDetails = ({ countries }) => {
  const { countryId } = useParams();
  const [countrySelected, setCountrySelected] = useState(null);
  const [countryInfo, setCountryInfo] = useState(null);

  useEffect(() => {
    setCountrySelected(countryId);
    const countryArr = [...countries].filter(
      (elem) => elem.alpha3Code.toLowerCase() === countrySelected
    );
    setCountryInfo(countryArr[0]);
  }, [countryId]);

  return <div>hola</div>;
};

export default CountryDetails;
