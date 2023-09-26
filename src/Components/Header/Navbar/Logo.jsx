import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="md:flex justify-center mb-5">
      <Link to="/">
        <img
          className="lg:w-3/4 md:content-center"
          src="/public/Logo.png"
          alt=""
        />
      </Link>
    </div>
  );
};

export default Logo;
