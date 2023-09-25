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
          <img src={picture} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
