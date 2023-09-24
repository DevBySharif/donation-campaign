import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Categories from "../../Components/Main/Categories/Categories";

const Home = () => {
  const categoriesData = useLoaderData();
  const data = categoriesData.data;
  console.log(data);
  return (
    <div>
      <Banner></Banner>
      <Categories data={data}></Categories>
    </div>
  );
};

export default Home;
