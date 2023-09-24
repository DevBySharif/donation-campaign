const SearchBar = () => {
  return (
    <div>
      <input
        className="w-[360px] py-[8px] px-3 border-solid border-2 border-gray-200 rounded-l-lg"
        type="text"
        placeholder="Search here.."
      />
      <button className="bg-[#FF444A] px-6 py-[9px] rounded-r-lg text-base text-white font-semibold">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
