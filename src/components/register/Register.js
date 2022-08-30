import React, { useState } from "react";
import styles from "./Register.module.css";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setUser } from "../../redux/optymTrackSlicer";
import { useNavigate } from "react-router-dom";
const initialInputsState = {
  organizationName: "",
  email: "",
  password: "",
  name: "",
  dot: "",
};
function Register() {
  const navigate = useNavigate();
  const [inputsValues, setInputsValues] = useState(initialInputsState);
  const [errorState, setErrorState] = useState({});
  const dispatch = useDispatch();
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
    navigate("/login");
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const isValidate = validateInputsValues();
    if (isValidate) {
      fetch("http://10.20.8.158:5002/api/v2/accounts/register", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputsValues),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          setErrorState({});
          dispatch(setUser(data));
          navigate("/");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };
  return (
    <div className={styles.register}>
      <React.Fragment>
        <div className={styles.validator}>
          <form className={styles.form} onSubmit={(e) => onSubmit(e)}>
            <label htmlFor="organizationName">organization Name</label>
            <input
              onChange={(e) =>
                onChangeHandler("organizationName", e.target.value)
              }
              value={inputsValues.organizationName}
              className={`${styles.input} ${
                errorState.organizationName ? styles.error : null
              }`}
              id="organizationName"
            />
            <label htmlFor="email">email</label>
            <input
              onChange={(e) => onChangeHandler("email", e.target.value)}
              value={inputsValues.email}
              className={`${styles.input} ${
                errorState.email ? styles.error : null
              }`}
              id="email"
              type={"email"}
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
            <label htmlFor="name">name</label>
            <input
              onChange={(e) => onChangeHandler("name", e.target.value)}
              value={inputsValues.name}
              className={`${styles.input} ${
                errorState.name ? styles.error : null
              }`}
              id="name"
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
            <button className={styles.button}>Registration</button>
          </form>
          <button
            className={`${styles.button} ${styles.signInButton}`}
            onClick={onNavigateHandler}
          >
            Already have an account?
          </button>
        </div>
      </React.Fragment>
    </div>
  );
}

export default Register;
