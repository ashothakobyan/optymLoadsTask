import { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import driverService from "../../services/drivercervice";
import styles from "./AddDriver.module.css";
const initialInputsState = {
  name: "",
  email: "",
  phone: "",
  password: "",
};
function AddDriver() {
  const user = useSelector((stat) => stat.optymTrack?.user?.account);
  const [inputsValues, setInputsValues] = useState(initialInputsState);
  const onChangeHandler = (name, value) => {
    setInputsValues({ ...inputsValues, [name]: value });
  };
  const inputsValidations = () => {
    for (const key in inputsValues) {
      if (inputsValues[key] === "") {
        return false;
      }
    }
    return true;
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputsValidations()) {
      const { organizationId, dot } = user;
      const data = {
        ...inputsValues,
        organizationId: organizationId,
        dot: dot,
      };
      driverService.addDriver(data, setInputsValues);
    }
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={(e) => onSubmit(e)}>
        <label htmlFor="driverName">driverName</label>
        <input
          onChange={(e) => onChangeHandler("name", e.target.value)}
          value={inputsValues.name}
          className={styles.input}
          id="driverName"
        />
        <label htmlFor="password">password</label>
        <input
          onChange={(e) => onChangeHandler("password", e.target.value)}
          value={inputsValues.password}
          className={styles.input}
          id="password"
        />
        <label htmlFor="email">email</label>
        <input
          onChange={(e) => onChangeHandler("email", e.target.value)}
          value={inputsValues.email}
          className={styles.input}
          id="email"
        />
        <label htmlFor="phone">phone</label>
        <input
          onChange={(e) => onChangeHandler("phone", e.target.value)}
          value={inputsValues.phone}
          className={styles.input}
          id="phone"
        />

        <button className={styles.button}>Add</button>
      </form>
    </div>
  );
}

export default AddDriver;
