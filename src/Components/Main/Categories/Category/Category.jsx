import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Category = ({ data }) => {
  const {
    id,
    picture,
    title,
    category,
    card_bg,
    category_text_bg,
    text_color,
  } = data || {};

  const cardBg = {
    backgroundColor: `${card_bg}3A`,
  };
  const categoryText = {
    color: text_color,
  };
  const categoryTextBg = {
    backgroundColor: `${category_text_bg}2A`,
    width: "min-content",
    padding: "8px",
    borderRadius: "3px",
  };

  return (
    <div>
      <Link to={`/details/${id}`}>
        <div className="shadow-xl rounded-lg" style={cardBg}>
          <figure>
            <img
              className="w-full h-[250px] rounded-t-lg"
              src={picture}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2
              className="text-sm font-medium"
              style={{ ...categoryTextBg, ...categoryText }}
            >
              {category}
            </h2>
            <p className="text-5 font-semibold h-10" style={categoryText}>
              {title}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

Category.propTypes = {
  data: PropTypes.object,
};

export default Category;
