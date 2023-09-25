import React from "react";

const DonationCard = ({ donation }) => {
  const {
    id,
    picture,
    title,
    category,
    card_bg,
    category_text_bg,
    text_color,
  } = donation || [];
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="h-full" src={picture} alt="image" />
        </figure>
        <div className="card-body">
          <p>{category}</p>
          <h2 className="card-title">{title}</h2>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
