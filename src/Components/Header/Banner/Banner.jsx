import SearchBar from "./SearchBar/SearchBar";

const Banner = ({ data }) => {
  return (
    <div className="h-[60vh] text-center flex justify-center items-center">
      <div className="space-y-10">
        <h1 className="text-5xl font-bold">I Grow By Helping People In Need</h1>
        <SearchBar></SearchBar>
      </div>
    </div>
  );
};

export default Banner;
