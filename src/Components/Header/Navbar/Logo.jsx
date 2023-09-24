import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img className="w-3/4" src="/public/Logo.png" alt="" />
      </Link>
    </div>
  );
};

export default Logo;
