import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Text,
  Tooltip,
} from "recharts";

const Statistics = () => {
  const [storedDonation, setStoredDonation] = useState(0);

  const loadData = useLoaderData();
  const allCategoryData = loadData.data;

  const totalCategoryPrice = allCategoryData.reduce(
    (total, item) => total + item.price,
    0
  );

  useEffect(() => {
    const storedDonationData =
      JSON.parse(localStorage.getItem("donation")) || [];
    if (storedDonationData) {
      const totalStoredCategoryPrice = storedDonationData.reduce(
        (total, item) => total + item.price,
        0
      );
      setStoredDonation(totalStoredCategoryPrice);
    }
  }, []);

  const yourDonationPercentage = (storedDonation / totalCategoryPrice) * 100;
  const totalDonationPercentage = 100 - yourDonationPercentage;

  const data = [
    { name: "Your Donation", value: yourDonationPercentage },
    { name: "Total Donation", value: totalDonationPercentage },
  ];

  // Define colors for the pie chart segments
  const colors = ["#00C49F", "#FF444A"];

  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart width={500} height={500}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            labelLine={false}
            cx="50%"
            cy="50%"
            outerRadius={130}
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
          <Text
            x="50%"
            y="50%"
            dominantBaseline="central"
            textAnchor="middle"
            fill="#ffffff"
          >
            <tspan>{`${yourDonationPercentage.toFixed(2)}%`}</tspan>
            <tspan dy="1em">{`${totalDonationPercentage.toFixed(2)}%`}</tspan>
          </Text>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
