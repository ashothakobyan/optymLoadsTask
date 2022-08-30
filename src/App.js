import { useSelector } from "react-redux/es/exports";
import Router from "./router/BrowserRouter";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
function App() {
  const isAuth = useSelector((stat) => stat.optymTrack.isAuth);
  return (
    <div className={`${isAuth && "App"}`}>
      <>
        {isAuth && <>{/* <Sidebar /> */}</>}
        <div className="content">
          {isAuth && <Header />}
          <Router isAuth={isAuth} />
          {isAuth && <Footer />}
        </div>
      </>
    </div>
  );
}

export default App;
