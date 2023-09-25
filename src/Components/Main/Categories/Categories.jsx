import Category from "./Category/Category";

const Categories = ({ data }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((data) => (
          <Category key={data.id} data={data}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
