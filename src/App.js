import "./styles.css";
import { useState } from "react";

const countries = [
  {
    name: "India",
    value: "IN",
    cities: ["Delhi", "Mumbai"],
  },
  {
    name: "United States",
    value: "US",
    cities: ["New York", "Tempe"],
  },
  {
    name: "Australia",
    value: "AUS",
    cities: ["Sydney", "Melbourne"],
  },
];

export default function App() {
  // State to hold the selected country object
  const [selectedCountry, setSelectedCountry] = useState({
    name: "",
    value: "",
    cities: [],
  });

  return (
    <div className="App">
      {/* Country Dropdown */}
      <select
        onChange={(e) => {
          // console.log(e.target)
          // console.log(e.target.value)
          const selectedIndex = e.target.value;
          // console.log(selectedIndex);
          const selectedCountry = countries[selectedIndex];
          // console.log(selectedCountry);
          setSelectedCountry(selectedCountry); // Update the selected country object
        }}
      >
        <option value="">Select a country</option>
        {countries.map((country, index) => (
          <option key={index} value={index}>
            {country.name}
          </option>
        ))}
      </select>

      {/* City Dropdown */}
     
        <select>
          {selectedCountry.cities.map((city, index) => (
            <option key={index} >
              {city}
            </option>
          ))}
        </select>
      
    </div>
  );
}
