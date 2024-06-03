const CityList = ({ name, quantity, image }) => {
  return (
    <div className=" flex-1 relative sm:w-full w-1/2 mx-auto ">
      <img
        className="rounded object-cover h-4/5 w-full brightness-75"
        src={require(`${image}`)}
        alt="city"
      />
      <div className="absolute sm:bottom-20 bottom-10 left-5 text-neutral-50 font-bold">
        <div className="md:text-3xl sm:text-xl min-[450px]:text-3xl text-xl">
          {name}
        </div>
        <div className="md:text-xl sm:text-base  min-[450px]:text-3xl text-base">
          {quantity} properties
        </div>
      </div>
    </div>
  );
};
export default CityList;
