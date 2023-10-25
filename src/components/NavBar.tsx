import nav_items from "./data/nav_items";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const navItems = nav_items;

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <div className="logo1"></div>
        <div className="logo2">
          <p className="underline">Elektromeisterbetrieb</p>
        </div>
        <div className="logo3"></div>
      </div>
      <ul className="navItems">
        {navItems.map((item) => (
          <li className="navItemsList" key={item.id}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
      <div className="logo4">
        <a href="">
          <FacebookRoundedIcon />
        </a>
        <a href="">
          <InstagramIcon />
        </a>
        <a href="">
          <YouTubeIcon />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
