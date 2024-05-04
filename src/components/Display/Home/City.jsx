import { useEffect, useState } from "react";
import CityList from "./CityList";
import { useFetchData } from "../../../hooks/fetchData";

const City = () => {
  const { data: cityData, isLoading, err } = useFetchData("hotel-count");
  return (
    <div className="flex justify-between gap-4 mt-14 ">
      {cityData.map((city) => (
        <CityList
          key={city.id}
          name={city.name}
          quantity={city.quantity}
          image={city.image}
        ></CityList>
      ))}
    </div>
  );
};
export default City;
