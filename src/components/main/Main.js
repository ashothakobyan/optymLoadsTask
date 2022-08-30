import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import styles from "./Main.module.css";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setUser } from "../../redux/optymTrackSlicer";
const initialInputsState = {
  organizationName: "",
  accountType: "",
  email: "",
  phone: "",
  zoom: "",
};
function Main() {
  const navigate = useNavigate();
  const [inputsValues, setInputsValues] = useState(initialInputsState);
  const isAuth = useSelector((stat) => stat.optymTrack.isAuth);
  const account = useSelector((stat) => stat.optymTrack?.user?.account);
  console.log(useSelector((stat) => stat.optymTrack?.user));
  useEffect(() => {
    if (!isAuth) {
      navigate("/register");
    } else {
      console.log(account);
      if (account) {
        const { organizationName, accountType, email } = account;
        console.log(organizationName, accountType, email);
        setInputsValues({
          ...inputsValues,
          organizationName: organizationName,
          accountType: accountType,
          email: email,
        });
      }
    }
  }, []);

  const dispatch = useDispatch();
  const onChangeHandler = (name, value) => {
    setInputsValues({ ...inputsValues, [name]: value });
  };
  const inputsValidations = () => {
    const { organizationName, accountType, email } = inputsValues;
    if (organizationName && accountType && email) {
      return true;
    } else {
      return false;
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputsValidations()) {
      const data = { ...account, ...inputsValues };
      console.log(data);
      fetch("http://10.20.8.158:5002/api/v2/accounts/user/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          dispatch(setUser(data));
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <div className={styles.wrapper}>
      <h3>Profile</h3>
      <form className={styles.form} onSubmit={(e) => onSubmit(e)}>
        <label htmlFor="organization">organization</label>
        <input
          onChange={(e) => onChangeHandler("organizationName", e.target.value)}
          value={inputsValues.organizationName}
          className={styles.input}
          id="organization"
        />
        <label htmlFor="accountType">accountType</label>
        <input
          onChange={(e) => onChangeHandler("accountType", e.target.value)}
          value={inputsValues.accountType}
          className={styles.input}
          id="accountType"
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
        <label htmlFor="zoom">zoom</label>
        <input
          onChange={(e) => onChangeHandler("zoom", e.target.value)}
          value={inputsValues.zoom}
          className={styles.input}
          id="zoom"
        />
        <button className={styles.button}>Save</button>
      </form>
    </div>
  );
}

export default Main;
