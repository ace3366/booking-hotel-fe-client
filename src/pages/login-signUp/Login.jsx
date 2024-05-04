import React from "react";
import { useEffect } from "react";
import { Form, useActionData, redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { validateAction } from "../../store/validate";
import { getData, setData } from "../../util/localStorage";
import classes from "./styles.module.css";

export default function Login() {
  const user = getData("userLogin");
  const validCheck = useActionData();
  const isValid = useSelector((state) => state.validate.isValid);
  const announce = useSelector((state) => state.validate.announce);
  const dispatch = useDispatch();
  useEffect(() => {
    if (validCheck) {
      switch (validCheck.email) {
        case "empty":
          dispatch(validateAction.emptyEmailSignIn());
          break;
        case "notFound":
          dispatch(validateAction.invalidSignIn());
          break;
      }

      switch (validCheck.password) {
        case "empty":
          dispatch(validateAction.emptyPasswordSignIn());
          break;
        case "notFound":
          dispatch(validateAction.invalidSignIn());
          break;
      }
    }
  }, [validCheck]);
  return (
    <section className={classes["container"]}>
      <h2>Login</h2>
      <Form method="POST" className={classes["form"]}>
        <div className={classes["input-container"]}>
          {" "}
          <p className={classes["alert"]}>{announce.signIn}</p>{" "}
          <input
            type="text"
            name="email"
            className={`${classes["form-input"]} ${
              !isValid.emailSignIn && classes["invalid"]
            }`}
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            className={`${classes["form-input"]} ${
              !isValid.passwordSignIn && classes["invalid"]
            }`}
            placeholder="Password"
          />
        </div>

        <button className={classes["btn"]}>Login</button>
      </Form>
    </section>
  );
}

export async function action({ request, params }) {
  const data = await request.formData();
  const loginData = {
    email: data.get("email"),
    password: data.get("password"),
  };
  const response = await fetch(`${process.env.REACT_APP_API}/login`, {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: { "Content-type": "application/json" },
  });
  if (!response.ok) {
    throw new Error("Can not fetch");
  }
  const resData = await response.json();
  // Nếu tìm được user thì lưu User vào local, nếu không thì return lỗi
  if (resData._id) {
    setData("userLogin", resData);
    return redirect("/");
  } else {
    return resData;
  }
}
