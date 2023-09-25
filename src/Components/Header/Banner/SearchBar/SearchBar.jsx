import { useState } from "react";

const SearchBar = ({ data }) => {
  const { category } = data;
  console.log(category);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue === `${category}`) {
      console.log(category);
    }
  };
  return (
    <div>
      <input
        className="w-[360px] py-[8px] px-3 border-solid border-2 border-gray-200 rounded-l-lg"
        type="text"
        placeholder="Search here.."
        onChange={handleInputChange}
      />
      <button
        onClick={handleSubmit}
        className="bg-[#FF444A] px-6 py-[9px] rounded-r-lg text-base text-white font-semibold"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
