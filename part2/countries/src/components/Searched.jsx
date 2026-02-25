import Country from './Country';
import SingleCountry from './SingleCountry';

const Searched = ({ countries, showButton }) => {
  if (countries.length === 0) {
    return null;
  }
  if (countries.length === 1) {
    const [singleCountry] = countries;
    let languages = [];
    Object.values(singleCountry.languages).forEach((value) =>
      languages.push(value)
    );
    console.log(languages);

    return (
      <SingleCountry
        key={singleCountry.name.common}
        name={singleCountry.name.common}
        flags={singleCountry.flags.png}
        languages={languages}
        area={singleCountry.area}
        capital={singleCountry.capital}
      />
    );
  }
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  return (
    <div>
      {countries.map((country) => (
        <Country
          key={country.name.common}
          showButton={() => showButton(country)}
          country={country.name.common}
        />
      ))}
    </div>
  );
};

export default Searched;
