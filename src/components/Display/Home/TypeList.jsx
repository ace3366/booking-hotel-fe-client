const TypeList = ({ name, count, image }) => {
  return (
    <div className="relative min-[500px]:w-full w-1/2 mx-auto ">
      <img
        className="min-[500px]:rounded-t rounded h-3/5 object-cover w-full mb-2 brightness-50"
        src={require(`${image}`)}
        alt="Type"
      />
      <div className="sm:block hidden font-bold text-[#575455]">{name}</div>
      <div className="sm:text-[#575455] absolute top-0 sm:relative text-white pl-2 sm:pl-0 min-[500px]:text-base text-2xl">{`${count} ${name.toLowerCase()}`}</div>
    </div>
  );
};
export default TypeList;
