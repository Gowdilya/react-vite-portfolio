import { countries } from "./countries";
import { useEffect, useState, ChangeEvent } from "react";

const TypeAhead = () => {
  const [text, setText] = useState("");

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    let text = event.target.value.toString();
    setText(text);
  };

  const filterCountries = () => {
    const filteredCountries = countries.filter(
      (country) =>
        text && country.name.toLowerCase().startsWith(text.toLowerCase())
    );

    var filteredNames = filteredCountries.map((country) => country.name);
    if (!text) {
      filteredNames = countries.map((country) => country.name);
    }
    console.log(filteredNames);
    if (text) {
      return filteredNames.map((countryName) => {
        return <div>{countryName}</div>;
      });
    } else {
      return <div></div>;
    }
  };

  useEffect(() => {
    filterCountries();
  }, [text]);

  return (
    <div className="container m-auto text-center">
      <input
        className="border-2 border-black mt-6"
        onChange={handleTextChange}
        type="text"
      ></input>
      {filterCountries()}
    </div>
  );
};

export default TypeAhead;
