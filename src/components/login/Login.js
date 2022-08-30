import React, { useState } from "react";
import styles from "./Login.module.css";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setUser } from "../../redux/optymTrackSlicer";
import { useNavigate } from "react-router-dom";
const initialInputsState = {
  email: "",
  password: "",
  dot: "",
};
function Login() {
  const navigate = useNavigate();
  const [inputsValues, setInputsValues] = useState(initialInputsState);
  const dispatch = useDispatch();
  const [errorState, setErrorState] = useState({});
  const onChangeHandler = (name, value) => {
    setInputsValues({ ...inputsValues, [name]: value });
  };
  const validateInputsValues = () => {
    let state = true;
    const obj = {};
    for (const key in inputsValues) {
      if (inputsValues[key] === "") {
        obj[key] = "Error";
        state = false;
      }
    }
    setErrorState(obj);
    return state;
  };
  const onNavigateHandler = () => {
    navigate("/register");
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const isValidate = validateInputsValues();
    if (isValidate) {
      fetch("http://10.20.8.158:5002/api/v2/accounts/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputsValues),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          dispatch(setUser(data));
          navigate("/");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };
  return (
    <div className={styles.login}>
      <React.Fragment>
        <div className={styles.validator}>
          <form className={styles.form} onSubmit={(e) => onSubmit(e)}>
            <label htmlFor="email">email</label>
            <input
              onChange={(e) => onChangeHandler("email", e.target.value)}
              value={inputsValues.email}
              className={`${styles.input} ${
                errorState.email ? styles.error : null
              }`}
              type={"email"}
              id="email"
            />
            <label htmlFor="password">password</label>
            <input
              onChange={(e) => onChangeHandler("password", e.target.value)}
              value={inputsValues.password}
              className={`${styles.input} ${
                errorState.password ? styles.error : null
              }`}
              id="password"
              type={"password"}
            />
            <label htmlFor="dot">dot</label>
            <input
              onChange={(e) => onChangeHandler("dot", e.target.value)}
              value={inputsValues.dot}
              className={`${styles.input} ${
                errorState.dot ? styles.error : null
              }`}
              id="dot"
            />
            <button className={styles.button}>Login</button>
          </form>
          <button
            className={`${styles.button} ${styles.signInButton}`}
            onClick={onNavigateHandler}
          >
            Create account
          </button>
        </div>
      </React.Fragment>
    </div>
  );
}

export default Login;
