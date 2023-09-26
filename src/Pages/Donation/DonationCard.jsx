import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
  const {
    id,
    picture,
    title,
    price,
    category,
    card_bg,
    category_text_bg,
    text_color,
  } = donation || [];

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
  const viewDetailsBg = {
    backgroundColor: category_text_bg,
    padding: "8px",
    borderRadius: "3px",
  };
  return (
    <div>
      <div className="card card-side shadow-xl" style={cardBg}>
        <figure>
          <img className="h-full w-[220px]" src={picture} alt="image" />
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
          <p className="text-base font-semibold" style={categoryText}>
            ${price}.00
          </p>
          <div className="card-actions justify-left">
            <Link to={`/details/${id}`}>
              <button
                style={viewDetailsBg}
                className="text-lg font-semibold text-white"
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
