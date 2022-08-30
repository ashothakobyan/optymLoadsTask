import { useNavigate } from "react-router";
import styles from "./Sidebar.module.css";
import { sideBarData } from "./sidebarData";

function Sidebar() {
  const navigate = useNavigate();
  const navigateHandler = (navigationLink) => {
    navigate(navigationLink);
  };
  return (
    <div className={styles.sidebar}>
      {sideBarData.map((el, index) => {
        return (
          <button
            onClick={() => navigateHandler(el.navigate)}
            className={styles.button}
            key={index}
          >
            {el.name}
          </button>
        );
      })}
    </div>
  );
}

export default Sidebar;
