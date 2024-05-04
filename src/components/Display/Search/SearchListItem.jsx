import { Link } from "react-router-dom";
const SearchListItem = ({
  id,
  name,
  dis,
  featured,
  type,
  rooms,
  price,
  rate,
  image,
}) => {
  return (
    // Mỗi thành phần được chia ra làm 3 khu vực khác nhau bằng flex
    <div className="flex justify-between gap-x-3 mb-6 p-3 border-2 border-slate-300 rounded">
      {/* Phần image */}
      <img
        className="h-52 w-48 object-cover flex-initial "
        src={image[0]}
        alt="Search"
      />
      {/* Phần thông tin chính */}
      <div className="flex-initial justify-between w-1/2">
        <Link
          to={`/detail/${id}`}
          className="mb-1 text-[#0071c2] text-2xl font-bold"
        >
          {name}
        </Link>
        <div className="mb-1">{`${dis}m from center`}</div>
        <div className="mb-1 p-1 inline-block rounded-md bg-[#04840c] text-white">
          {featured && "Have Utilities"}
        </div>
        <div className="mb-1 font-bold">
          {rooms.map((room, i) => (
            <div key={i}>
              <span>{room.title} </span>

              {i == rooms.length - 1 ? <span></span> : <span> • </span>}
            </div>
          ))}
        </div>
        <div>{type[0].toUpperCase() + type.slice(1)}</div>
      </div>
      {/* Phần thông tin còn lại */}
      <div className="flex-initial w-40 flex flex-col justify-between">
        <div className=" flex justify-end">
          <span className=" font-bold p-2 text-white bg-[#003580]">{rate}</span>
        </div>
        <div className="">
          <div className="flex justify-end font-medium text-3xl">{`$${price}`}</div>
          <div className="flex justify-end mb-2 text-slate-400 text-sm">
            Includes taxs and fees
          </div>
          <div className="flex justify-end">
            <Link
              to={`/detail/${id}`}
              className="py-2 px-2 rounded-md font-semibold text-white bg-[#0071c2]"
            >
              See availability
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchListItem;
