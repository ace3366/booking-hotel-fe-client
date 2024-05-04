const Register = () => {
  return (
    <div className="bg-[#003580] mt-16 pt-12 pb-10">
      <h2 className="text-center text-white font-bold text-3xl">
        Save time, save money!
      </h2>
      <div className="text-center text-white mt-4">
        Sign up and we'll send the best deals to you
      </div>
      <div className="text-center mt-4">
        <form>
          <input
            className="h-12 w-1/4 rounded"
            type="text"
            placeholder="  Your email"
          />
          <input
            className="bg-[#0071c2] text-white px-2 py-3 rounded ml-3 cursor-pointer"
            type="submit"
            value="Subscribe"
          />
        </form>
      </div>
    </div>
  );
};
export default Register;
