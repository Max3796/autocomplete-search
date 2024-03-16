import React, { useState, useEffect } from 'react';
import countryData from '../resources/countryData.json';

const Search = () => {
  // declaring state variables
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // useEffect to filter and update suggestions based on input value
  useEffect(() => {
    // to filter countries based on the input value
    const getSuggestion = countryData.filter(country =>
      country.name.toLowerCase().startsWith(inputValue.toLowerCase())
    );
    setSuggestions(getSuggestion);

    // to show suggestions if input value is not empty
    setShowSuggestions(inputValue.length > 0);
  }, [inputValue]);

  // function for input value change
  const onInputChange = event => {
    setInputValue(event.target.value);
  };

  // function for Escape key press to show/hide suggestions
  const escKeyDown = event => {
    if (event.key === 'Escape') {
      // hide suggestions when Escape key is pressed
      setShowSuggestions(false);
    }
  };

  return (
    <div className="search-Box">
      <input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        onKeyDown={escKeyDown}
        placeholder="Type to search.."
      />
      {showSuggestions && (
        <ul>
          {suggestions.map(country => (
            <li key={country.id}>{country.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
