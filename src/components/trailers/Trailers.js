import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import trailerService from "../../services/trailerService";
import styles from "./Trailers.module.css";
function Trailers() {
  const organizationId = useSelector(
    (stat) => stat.optymTrack?.user?.account.organizationId
  );
  const [Trailers, setTrailers] = useState();
  useEffect(() => {
    if (organizationId) {
      trailerService.searchTrailers(organizationId, setTrailers);
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
          {Trailers?.map((el, index) => {
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

export default Trailers;
