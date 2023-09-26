import SearchBar from "./SearchBar/SearchBar";

const Banner = () => {
  const background = {
    backgroundImage: "url('background.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "5px",
  };

  return (
    <div
      className="h-[60vh] mb-12 text-center flex justify-center items-center"
      style={background}
    >
      <div className="space-y-10">
        <h1 className="text-5xl font-bold">
          I Grow Up By Helping People In Need
        </h1>
        <SearchBar></SearchBar>
      </div>
    </div>
  );
};

export default Banner;
