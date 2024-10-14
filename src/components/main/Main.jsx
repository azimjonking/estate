import "./Main.css";
import logo from "../../assets/home/logo.png";
import homebg from "../../assets/home/home-bg.png";
import { FaArrowDown } from "react-icons/fa6";
const Main = () => {
  return (
    <section className="main" style={{ backgroundImage: `url(${homebg})` }}>
      <div className="main-info">
        <img src={logo} alt="Estate" />
        <h1 className="home-title">We're here to help you find a new home.</h1>
      </div>
      <button className="home-btn">
        <FaArrowDown />
      </button>
    </section>
  );
};

export default Main;
