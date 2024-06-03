import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../../util/localStorage";
import { loginAction } from "../../store/login";

const NavBar = () => {
  // Fetch user
  const user = useSelector((state) => state.login.user);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(loginAction.logOut());
    setData("userLogin", {});
  };
  return (
    <section className=" bg-[#003580] h-14">
      <div className="flex justify-between pt-4 max-w-5xl mx-auto px-2 ipad:px-0">
        <Link to="/" className="text-[#fff] sp:text-lg text-sm">
          Booking Website
        </Link>
        {user._id ? (
          <div>
            <p className=" sm:inline-block hidden text-[#efefef]">
              {user.username}
            </p>

            <Link
              to="transaction"
              className="text-[#003580] hover:bg-neutral-300 bg-[#efefef] px-2 py-2 ml-5 rounded"
            >
              Transactions
            </Link>

            <Link
              to="login"
              className="text-[#003580] hover:bg-neutral-300 bg-[#efefef] px-2 py-2 ml-5 rounded"
              onClick={logoutHandler}
            >
              Logout
            </Link>
          </div>
        ) : (
          <div className="inline-block">
            <Link
              to="register"
              className="text-[#003580] hover:bg-neutral-300 bg-[#efefef] px-2 py-2 ml-5 rounded"
            >
              Register
            </Link>

            <Link
              to="login"
              className="text-[#003580] hover:bg-neutral-300 bg-[#efefef] px-2 py-2 ml-5 rounded"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
export default NavBar;
