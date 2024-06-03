import { Link } from "react-router-dom";
const HotelList = ({ id, name, city, price, rate, type, image }) => {
  return (
    <div className="flex-1 ">
      <img
        className="h-60 w-full object-cover rounded"
        src={image}
        alt="Hotel"
      />
      <Link
        to={`/detail/${id}`}
        className=" mt-3 inline-block underline visited:text-[#733295] font-bold"
      >
        {name}
      </Link>
      <div className="font-light mt-2">{city}</div>
      <div className="font-bold mt-2">{`Starting from $${price}`}</div>
      <div className="mt-2">
        <span className="bg-[#063584] inline-block p-1 font-bold text-white">
          {rate}
        </span>
        <span className="inline-block ml-3 ">{type}</span>
      </div>
    </div>
  );
};
export default HotelList;
