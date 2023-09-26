import Swal from "sweetalert2";

const DonationDetails = ({ details }) => {
  const { picture, title, text_color, description, price } = details || {};

  const btnBg = {
    backgroundColor: text_color,
  };
  const handleAddToDonate = () => {
    const donationItems = JSON.parse(localStorage.getItem("donation")) || [];
    donationItems.push(details);
    localStorage.setItem("donation", JSON.stringify(donationItems));

    Swal.fire({
      icon: "success",
      title: "Thank you for your donation",
    });
  };
  return (
    <div className="my-12">
      <div className="relative">
        <img
          className="lg:w-[1300px] lg:h-[700px] rounded-lg mb-14"
          src={picture}
          alt="image"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-left p-4">
          <button
            onClick={handleAddToDonate}
            className="text-white px-4 py-2 rounded-lg"
            style={btnBg}
          >
            Donate ${price}
          </button>
        </div>
      </div>

      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      <p className="text-base font-normal">{description}</p>
    </div>
  );
};

export default DonationDetails;
