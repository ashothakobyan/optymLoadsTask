import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import { routes } from "./routes";
import styles from "./Router.module.css";
function Router({ isAuth }) {
  const routeComponents = routes.map(({ path, element }, key) => (
    <Route exact path={path} element={element} key={key} />
  ));

  return (
    <div className={styles.wrapper}>
      <BrowserRouter>
        {isAuth && <Sidebar />}
        <Routes>{routeComponents}</Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
