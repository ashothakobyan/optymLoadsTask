import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import tractorService from "../../services/tractorService";
import styles from "./Tracktors.module.css";
function Tractors() {
  const organizationId = useSelector(
    (stat) => stat.optymTrack?.user?.account.organizationId
  );
  const [tractors, setTractors] = useState();
  useEffect(() => {
    if (organizationId) {
      tractorService.searchTractors(organizationId, setTractors);
    }
  }, []);
  return (
    <div className={styles.wrapper}>
      <table border={"1px"}>
        <thead border={"2px"}>
          <th>Name</th>
          <th>Vin</th>
          <th>Year</th>
          <th>Model</th>
          <th>Status</th>
        </thead>
        <tbody>
          {tractors &&
            tractors?.map((el, index) => {
              return (
                <tr key={index}>
                  <td>{el.name}</td>
                  <td>{el.vin}</td>
                  <td>{el.year}</td>
                  <td>{el.model}</td>
                  <td>{el.status}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Tractors;
