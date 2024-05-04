const CityList = ({ name, quantity, image }) => {
  return (
    <div className=" flex-1 relative">
      <img
        className="rounded object-cover h-4/5 w-full brightness-75"
        src={require(`${image}`)}
        alt="city"
      />
      <div className="absolute bottom-20 left-5 text-neutral-50 font-bold">
        <div className="text-3xl">{name}</div>
        <div className="text-xl">{quantity} properties</div>
      </div>
    </div>
  );
};
export default CityList;
