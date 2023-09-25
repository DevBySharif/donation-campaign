import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Categories from "../../Components/Main/Categories/Categories";

const Home = () => {
  const categoriesData = useLoaderData();
  const data = categoriesData.data;
  return (
    <div>
      <Banner data={data}></Banner>
      <Categories data={data}></Categories>
    </div>
  );
};

export default Home;
