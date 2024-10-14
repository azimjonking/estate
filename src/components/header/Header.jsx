import "./Header.css";
import logo from "./IMAGE.png";

const Header = () => {
  return <div className="first"> <img className="img1" src={logo} alt="" /> <a className="first1" href="">Listings</a> <a className="first1" href="">Newsroom</a> <a className="first1" href="">Contact</a> <a className="first1"  href="">Our team</a> </div>;
};  

export default Header;
