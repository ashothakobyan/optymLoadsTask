import styles from "./AddTrailer.module.css";
import { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import trailerService from "../../services/trailerService";
const initialInputsState = {
  name: "",
  make: "",
  model: "",
  year: "",
  vin: "",
};
function AddTrailer() {
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
      const { organizationId, dot, id } = user;

      const data = {
        ...inputsValues,
        id: id,
        organizationId: organizationId,
        dot: dot,
        status: "AVAILABLE",
      };
      console.log(data);
      trailerService.addTrailer(data, setInputsValues);
    }
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={(e) => onSubmit(e)}>
        <label htmlFor="name">Trailer Name</label>
        <input
          onChange={(e) => onChangeHandler("name", e.target.value)}
          value={inputsValues.name}
          className={styles.input}
          id="name"
        />
        <label htmlFor="make">Make</label>
        <input
          onChange={(e) => onChangeHandler("make", e.target.value)}
          value={inputsValues.make}
          className={styles.input}
          id="make"
        />
        <label htmlFor="model">Model</label>
        <input
          onChange={(e) => onChangeHandler("model", e.target.value)}
          value={inputsValues.model}
          className={styles.input}
          id="model"
        />
        <label htmlFor="vin">Vin</label>
        <input
          onChange={(e) => onChangeHandler("vin", e.target.value)}
          value={inputsValues.vin}
          className={styles.input}
          id="vin"
        />
        <label htmlFor="year">Year</label>
        <input
          onChange={(e) => onChangeHandler("year", e.target.value)}
          value={inputsValues.year}
          className={styles.input}
          id="year"
        />
        <button className={styles.button}>Add</button>
      </form>
    </div>
  );
}

export default AddTrailer;
