"use client";
import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { SearchComponentProps } from "./types";


const SearchComponent = ( {reponsesValue,setReponsesValue }: SearchComponentProps)  => {

  const [searchEngine, setSearchEngine] = useState("gpt-3.5-turbo");
  const [inputValue, setInputValue] = useState("");


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(inputValue)
    setReponsesValue([...reponsesValue,{userQuestion: inputValue, llmResonse: "返回结构"}]);
    setInputValue("");
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchEngine(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed bottom-0 w-full flex justify-center"
    >
      <div className="flex items-center">
        <input
          type="text"
          className="border border-gray-300 rounded-l py-2 px-4"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <select
          className="border border-gray-300 rounded-r px-4 py-2 bg-white"
          value={searchEngine}
          onChange={handleSelectChange}
        >
          <option value="chatgpt">gpt-3.5-turbo</option>
          <option value="langchain">gpt-4.0</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
        >
          搜索
        </button>
      </div>
    </form>
  );
};

export default SearchComponent;
