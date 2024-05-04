import "./SearchPopUp.css";
const SearchPopUp = ({ className }) => {
  return (
    <div className={`${className}`}>
      <form className="w-72  bg-[#ffbc04]  rounded-md pt-4" action="">
        <h2 className="px-3 text-[#676046] font-bold text-2xl ">Search</h2>
        <div className="px-3 mt-3">
          <div>
            <label className="block" htmlFor="">
              Destination
            </label>
            <input className="w-full h-10" type="text" />
          </div>
          <div className="mt-3">
            <label className="block" htmlFor="">
              Check-in Date
            </label>
            <input
              className="w-full h-10"
              type="text"
              placeholder=" 06/24/2022 to 06/24/2022"
            />
          </div>
        </div>
        <label className="block px-3 mt-3" htmlFor="">
          Options
        </label>
        <div className="subInput">
          <div>
            <span>
              Min price <span>per night</span>
            </span>
            <input type="text" />
          </div>
          <div>
            <span>
              Max price <span>per night</span>
            </span>
            <input type="text" />
          </div>
          <div>
            <span>Adult</span>
            <input type="text" />
          </div>
          <div>
            <span>Children</span>
            <input type="text" />
          </div>
          <div>
            <span>Room</span>
            <input type="text" />
          </div>
        </div>
        <div className="py-3 mt-5">
          <input
            className="bg-[#0071c2] text-white w-11/12 mx-auto py-3 block cursor-pointer"
            type="submit"
            value="Search"
          />
        </div>
      </form>
    </div>
  );
};
export default SearchPopUp;
