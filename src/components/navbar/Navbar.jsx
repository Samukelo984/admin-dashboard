import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ListIcon from "@mui/icons-material/List";

const Navbar = () => {
  return (
    <section className="navbar">
      <article className="nav-wrapper">
        <aside className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </aside>
        <aside className="items">
          <div className="item">
            <LanguageIcon className="nav-icon" />
            English
          </div>
          <DarkModeOutlinedIcon className="item nav-icon" />
          <FullscreenExitIcon className="item nav-icon" />
          <NotificationsNoneIcon className="item nav-icon"></NotificationsNoneIcon>
          {/* <div className="counter">1</div> */}
          <ChatBubbleOutlineIcon className="item nav-icon" />
          {/* <div className="counter">2</div> */}
          <ListIcon className="item nav-icon" />
          <img
            src="https://images.pexels.com/photos/11720281/pexels-photo-11720281.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="avatar"
            className="avatar"
          />
        </aside>
      </article>
    </section>
  );
};

export default Navbar;
