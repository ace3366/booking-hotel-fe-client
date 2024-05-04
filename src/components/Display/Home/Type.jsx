import TypeList from "./TypeList";
import { useFetchData } from "../../../hooks/fetchData";

const Type = () => {
  const { data: typeData, isLoading, err } = useFetchData("type-count");

  return (
    <>
      <h2 className="font-bold">Browse by property type</h2>
      <div className="flex justify-between gap-4 mt-5">
        {typeData.map((type) => (
          <TypeList
            key={type.id}
            name={type.name}
            count={type.count}
            image={type.image}
          ></TypeList>
        ))}
      </div>
    </>
  );
};
export default Type;
