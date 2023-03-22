"use client";

import { countries } from "countries-list";
import { useState } from "react";

export default function Home() {
  const [country, setCountry] = useState("");
  const countriesList = Object.values(countries);

  const handleClick = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div className="flex justify-center text-center m-12">
      <div className="mb-4 md:col-span-2 w-full">
        <label className="block mb-2 text-blue-500 font-serif font-bold text-2xl">
          {" "}
          Select a flag:
        </label>
        <select
          onChange={handleClick}
          className="text-6xl appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-24"
        >
          {countriesList.map((country, i) => (
            <option key={i} value={country.name}>
              {country.emoji}
            </option>
          ))}
        </select>

        <p className="mt-2 text-green-700 font-bold text-3xl">{country}</p>
      </div>
    </div>
  );
}
