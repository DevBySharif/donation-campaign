import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetails from "./DonationDetails";

const Details = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  const data = useLoaderData();
  const donationData = data.data;

  useEffect(() => {
    const findDetails = donationData?.find((detail) => detail.id === id);
    setDetails(findDetails);
  }, [id, donationData]);
  return (
    <div>
      <DonationDetails details={details}></DonationDetails>
    </div>
  );
};

export default Details;
