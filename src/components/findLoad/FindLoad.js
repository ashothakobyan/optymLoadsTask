import { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import { loadsPerPage } from "../Pagination/PaginationFunctions";
import styles from "./FindLoad.module.css";

function FindLoad() {
  const [loads, setLoads] = useState();
  const [changeLoads, setChangeLoads] = useState(0);
  const [postsLengthForPaginate, setPostsLengthForPaginate] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    fetch("http://10.20.8.158:5002/api/v2/loads/search/random")
      .then((response) => response.json())
      .then((data) => {
        setLoads(data.loads);
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [changeLoads]);
  const paginate = (number) => {
    setCurrentPage(number);
  };
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        onClick={() => {
          setChangeLoads(changeLoads + 1);
        }}
      >
        Refresh
      </button>
      <table border={"1px"}>
        <thead border={"2px"}>
          <th>Company</th>
          <th>Contact Name</th>
          <th>Equipment Type</th>
          <th>Load Miles</th>
          <th>Origin City</th>
          <th>Phone Number</th>
        </thead>
        <tbody>
          {loads &&
            loadsPerPage(currentPage, 15, loads)?.map((el, index) => {
              return (
                <tr key={index}>
                  <td>{el.company}</td>
                  <td>{el.contactName}</td>
                  <td>{el.equipmentType}</td>
                  <td>{el.loadMiles}</td>
                  <td>{el.originCity}</td>
                  <td>{el.phoneNumber}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Pagination
        loadsPerPage={15}
        totalLoads={loads?.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
}

export default FindLoad;
