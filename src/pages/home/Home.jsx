import { useEffect } from "react";
import { useDispatch } from "react-redux";

import NavBarItems from "../../components/Nav/NavBarItems";
import Header from "../../components/Header/Header";
import City from "../../components/Display/Home/City";
import Type from "../../components/Display/Home/Type";
import Hotel from "../../components/Display/Home/Hotel";
import Register from "../../components/Form/Register";

import { getData } from "../../util/localStorage";
import { loginAction } from "../../store/login";
import { validateAction } from "../../store/validate";
const Home = () => {
  console.log(process.env.REACT_APP_API);
  const user = getData("userLogin");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(validateAction.validSignIn());
    dispatch(loginAction.logIn(user));
  }, [user]);
  return (
    <div className="my-0 ">
      {/* Phần trên cùng chứa navbar và Header */}
      <NavBarItems></NavBarItems>
      <Header></Header>
      {/* Phần chứa các info */}
      <div className="max-w-5xl mx-auto px-2">
        {/* Phần hiển thị các City */}
        <City></City>
        {/* Phần hiển thị các Type */}
        <Type></Type>
        <Hotel></Hotel>
      </div>
      <Register></Register>
    </div>
  );
};

export default Home;
