import { useEffect, useState } from "react";
import CityList from "./CityList";
import { useFetchData } from "../../../hooks/fetchData";

const City = () => {
  const { data: cityData, isLoading, err } = useFetchData("hotel-count");
  return (
    <div className="flex justify-between gap-4 mt-14 ">
      {isLoading ? (
        <div className="flex flex-col items-center text-center mx-auto">
          <h3 className="text-2xl mt-10 mb-8 font-medium">
            It may take some time to fetch data from the server<br></br> Please
            stand by or refresh the page
          </h3>
          <div className="animate-spin h-10 w-10 border-4 rounded-full border-t-blue-500"></div>
          <h3 className="text-xl text-red-500 font-semibold mt-7">
            We're sorry for this inconvenience
          </h3>
        </div>
      ) : (
        cityData.map((city) => (
          <CityList
            key={city.id}
            name={city.name}
            quantity={city.quantity}
            image={city.image}
          ></CityList>
        ))
      )}
    </div>
  );
};
export default City;
