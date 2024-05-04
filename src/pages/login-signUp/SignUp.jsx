import React from "react";
import { useEffect } from "react";
import { Form, useActionData, redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { validateAction } from "../../store/validate";
import classes from "./styles.module.css";

export default function SignUp() {
  const validCheck = useActionData();
  const isValid = useSelector((state) => state.validate.isValid);
  const announce = useSelector((state) => state.validate.announce);
  const dispatch = useDispatch();
  useEffect(() => {
    if (validCheck) {
      switch (validCheck.email) {
        case "empty":
          dispatch(validateAction.emptyEmailRegister());
          break;
        case "invalid":
          dispatch(validateAction.invalidEmailRegister());
          break;
        case "duplicate":
          dispatch(validateAction.duplicateEmailRegister());
          break;
        case "valid":
          dispatch(validateAction.validEmailRegister());
          break;
      }

      switch (validCheck.password) {
        case "empty":
          dispatch(validateAction.emptyPasswordRegister());
          break;
        case "notEnough":
          dispatch(validateAction.notEnoughPasswordRegister());
          break;

        case "valid":
          dispatch(validateAction.validPasswordRegister());
          break;
      }
    }
  }, [validCheck]);

  return (
    <section className={classes["container"]}>
      <h2>Sign Up</h2>
      <Form method="POST" className={classes["form"]}>
        <div className={classes["input-container"]}>
          {" "}
          <input
            type="text"
            name="email"
            className={`${classes["form-input"]} ${
              !isValid.emailRegister && classes["invalid"]
            }`}
            placeholder="Username"
          />
          <p className={classes["alert"]}>{announce.emailRegister}</p>{" "}
          <input
            type="password"
            name="password"
            className={`${classes["form-input"]} ${
              !isValid.passwordRegister && classes["invalid"]
            }`}
            placeholder="Password"
          />
          <p className={classes["alert"]}>{announce.passwordRegister}</p>
        </div>

        <button className={classes["btn"]}>Create Account</button>
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
  const response = await fetch(`${process.env.REACT_APP_API}/register`, {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: { "Content-type": "application/json" },
  });
  if (!response.ok) {
    throw new Error("Can not fetch");
  }
  const resData = await response.json();
  if (resData.email === "valid" && resData.password === "valid") {
    return redirect("/login");
  } else {
    return resData;
  }
}
