import HotelList from "./HotelList";
import { useFetchData } from "../../../hooks/fetchData";

const Hotel = () => {
  const { data: hotelData, isLoading, err } = useFetchData("top-hotel");
  return (
    <>
      <h2 className="font-bold">Home guests love</h2>
      <div className="flex justify-between gap-4 mt-5">
        {hotelData.map((hotel) => (
          <HotelList
            key={hotel._id}
            id={hotel._id}
            name={hotel.name}
            city={hotel.city}
            price={hotel.cheapestPrice}
            rate={hotel.rate}
            type={hotel.type}
            image={hotel.photos[0]}
          ></HotelList>
        ))}
      </div>
    </>
  );
};
export default Hotel;
