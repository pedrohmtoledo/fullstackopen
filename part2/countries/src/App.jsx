import { useEffect, useState } from 'react';
import axios from 'axios';
import CountryForm from './components/CountryForm';
import Searched from './components/Searched';

function App() {
  const [countries, setCountries] = useState([]);
  const [countrySearch, setCountrySearch] = useState([]);

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then((response) => {
        setCountries(response.data);
      });
  }, []);
  const countryNameChangeHandler = (event) => {
    setCountrySearch(event.target.value);
    findMatches(event.target.value);
  };

  const findMatches = (search) => {
    if (search.length === 0) {
      console.log(search);
      setCountrySearch([]);
    } else {
      const matches = countries.filter((country) => {
        return country.name.common
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase());
      });
      setCountrySearch(matches);
    }
  };
  const showButtonHandler = (country) => {
    const show = [];
    show.push(country);
    console.log(show);
    setCountrySearch(show);
  };

  return (
    <div>
      <CountryForm changeHandler={countryNameChangeHandler} />
      <Searched countries={countrySearch} showButton={showButtonHandler} />
    </div>
  );
}

export default App;
