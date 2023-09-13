import { countries } from "./countries";
import { useEffect, useState, ChangeEvent } from "react";
interface typeAheadProps {}

const TypeAhead = () => {
  const [text, setText] = useState();

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setText(event.target.value);
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
    </div>
  );
};

export default TypeAhead;
