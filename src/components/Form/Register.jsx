const Register = () => {
  return (
    <div className="bg-[#003580] mt-16 pt-12 pb-10">
      <h2 className="text-center text-white font-bold text-3xl">
        Save time, save money!
      </h2>
      <div className="text-center text-white mt-4">
        Sign up and we'll send the best deals to you
      </div>
      <div className=" mt-4">
        <form className="flex justify-center mx-3 items-center gap-2 flex-col sm:flex-row">
          <input
            className="h-12 w-full sm:w-1/4 block rounded"
            type="text"
            placeholder="  Your email"
          />
          <input
            className="bg-[#0071c2] text-white px-2 py-3 rounded cursor-pointer"
            type="submit"
            value="Subscribe"
          />
        </form>
      </div>
    </div>
  );
};
export default Register;
