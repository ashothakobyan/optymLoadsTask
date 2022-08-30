import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import driverService from "../../services/drivercervice";
import styles from "./Drivers.module.css";
function Drivers() {
  const organizationId = useSelector(
    (stat) => stat.optymTrack?.user?.account.organizationId
  );
  const [drivers, setDrivers] = useState();
  useEffect(() => {
    if (organizationId) {
      driverService.searchDrivers(organizationId, setDrivers);
    }
  }, []);
  return (
    <div className={styles.wrapper}>
      <table border={"1px"}>
        <thead border={"2px"}>
          <th>Name</th>
          <th>E-mail</th>
          <th>Phone</th>
          <th>Status</th>
          <th>Edit</th>
        </thead>
        <tbody>
          {drivers?.map((el, index) => {
            return (
              <tr key={index}>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>{el.phone}</td>
                <td>{el.status}</td>
                <td>
                  <button className={styles.button}>Update</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Drivers;
