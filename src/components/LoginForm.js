import { useState, useContext } from "react";
import { loginSchema } from "../utils/schemas";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { BASE_URL, AUTH_PATH } from "../utils/constants";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const [, setAuth] = useContext(AuthContext);

  const history = useHistory();

  const onSubmit = async (data) => {
    setSubmitting(true);
    setLoginError(null);

    try {
      const response = await axios.post(`${BASE_URL}${AUTH_PATH}`, data);
      setAuth(response.data);
      history.push("/");
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
      <div className="loginError">{loginError && <p>{loginError}</p>}</div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={submitting}>
          <div>
            <label>Username</label>
            <input
              name="identifier"
              placeholder="Username"
              ref={register}
              type="text"
            />
            {errors.identifier && (
              <p className="form__error">{errors.identifier.message}</p>
            )}
          </div>
          <div>
            <label>Password</label>
            <input
              name="password"
              placeholder="Password"
              ref={register}
              type="password"
            />
            {errors.password && (
              <p className="form__error">{errors.password.message}</p>
            )}
          </div>
          <button className="form__btn" type="submit">
            {submitting ? "Logging in..." : "Login"}
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default LoginForm;
