import { useLoaderData } from "react-router-dom";
import SearchListItem from "./SearchListItem";

const SearchList = ({ className }) => {
  const searchData = useLoaderData();
  console.log(searchData);
  return (
    <div className={`${className} ml-6`}>
      {searchData.map((search) => (
        <SearchListItem
          key={search._id}
          id={search._id}
          name={search.name}
          dis={search.distance}
          featured={search.featured} // featured
          type={search.type}
          rooms={search.rooms} // rooms
          price={search.cheapestPrice} //cheapestPrice
          rate={search.rating} // rating
          image={search.photos} // photos[0]
        ></SearchListItem>
      ))}
    </div>
  );
};
export default SearchList;
