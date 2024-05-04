const TypeList = ({ name, count, image }) => {
  return (
    <div className="">
      <img
        className="rounded-t h-3/5 object-cover w-full mb-2"
        src={require(`${image}`)}
        alt="Type"
      />
      <div className="font-bold text-[#575455]">{name}</div>
      <div className="text-[#575455]">{`${count} ${name.toLowerCase()}`}</div>
    </div>
  );
};
export default TypeList;
