import { useLoaderData } from "react-router-dom";

const DetailHotel = () => {
  const hotelData = useLoaderData();
  return (
    // Chia làm 3 phần riêng biệt
    <div className=" mt-6 mx-auto">
      {/* Phần thông tin chung */}
      <div className="flex justify-between ">
        <div>
          <h2 className="font-bold text-2xl mb-2">{hotelData.name}</h2>
          <div className="mb-2">
            <i className="fa-solid fa-location-dot pr-4"></i>
            <span>{hotelData.address}</span>
          </div>
          <div className="font-semibold text-[#0071c2] mb-2">
            Excellent location - {hotelData.distance}m from center
          </div>
          <div className="font-semibold text-[#04840c] mb-2">
            Book a stay over ${hotelData.cheapestPrice} at this property and get
            a free airport taxi
          </div>
        </div>
      </div>
      {/* Phần hình ảnh biểu diễn bằng grid */}
      <div className="grid grid-cols-3 gap-2">
        {hotelData.photos.map((img) => (
          <img src={img} alt="" />
        ))}
      </div>
      {/* Phần thông tin chi tiết */}
      <div className="flex justify-between mt-8">
        <div className="basis-3/4 pr-6">
          <h2 className="font-bold text-2xl mb-5">{hotelData.title}</h2>
          <div className="text-sm">{hotelData.desc}</div>
        </div>
        <div className=" basis-1/4 px-4 py-5 bg-[#f0f4fc]">
          <div className="text-2xl font-light mb-5">
            <span className="font-bold ">{`$${hotelData.cheapestPrice}`}</span>
            <span> (1 nights)</span>
          </div>
          <button className="py-2 px-4 w-full font-semibold text-sm rounded text-white bg-[#0071c2]">
            Reserve or Book Now!
          </button>
        </div>
      </div>
    </div>
  );
};
export default DetailHotel;
