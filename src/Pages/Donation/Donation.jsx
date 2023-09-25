import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [notFound, setNotFound] = useState("");
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donation"));

    if (donationItems) {
      setDonations(donationItems);
    } else {
      setNotFound("No Donation Yet 😢 ");
    }
  }, []);

  const handleRemove = () => {
    localStorage.clear();
    setDonations([]);
    setNotFound("No Donation Yet 😢 ");
  };
  return (
    <div>
      {notFound ? (
        <p className="h-[80vh] text-4xl font-bold flex justify-center items-center">
          {notFound}
        </p>
      ) : (
        <div>
          {donations.length > 0 && (
            <div className="text-center my-4 space-y-3">
              <button
                onClick={handleRemove}
                className="px-5 bg-green-400 block mx-auto rounded-md"
              >
                Delete all
              </button>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-center items-center">
            {isShow
              ? donations.map((donation) => (
                  <DonationCard
                    key={donation.id}
                    donation={donation}
                  ></DonationCard>
                ))
              : donations
                  .slice(0, 4)
                  .map((donation) => (
                    <DonationCard
                      key={donation.id}
                      donation={donation}
                    ></DonationCard>
                  ))}
          </div>
          {donations.length > 4 && (
            <button
              onClick={() => setIsShow(!isShow)}
              className="px-5 my-5 bg-[#009444] text-base font-semibold text-white block mx-auto rounded-md"
            >
              {isShow ? "See less" : "See more"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Donation;
