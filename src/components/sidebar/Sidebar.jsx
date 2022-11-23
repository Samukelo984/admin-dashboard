import "./Sidebar.scss";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssessmentIcon from "@mui/icons-material/Assessment";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <article className="top">
        <Link to="/">
          <h2 className="logo">myadmin</h2>
        </Link>
      </article>
      <hr />
      <article className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Link>
              <DashboardIcon className="side-icon" />
              <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">LISTS</p>
          <li>
            <Link to="/users">
              <PersonOutlineOutlinedIcon className="side-icon" />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link to="/products">
              <StoreIcon className="side-icon" />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Link>
              <CreditCardIcon className="side-icon" />
              <span>Orders</span>
            </Link>
          </li>
          <li>
            <LocalShippingIcon className="side-icon" />
            <span>Delivery</span>
          </li>
          <p className="title">INSIDE</p>
          <li>
            <AssessmentIcon className="side-icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="side-icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <CloudDoneIcon className="side-icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className="side-icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="side-icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="side-icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="side-icon" />
            <span>Logout</span>
          </li>
        </ul>
      </article>
      <article className="bottom">
        <div className="color-option"></div>
        <div className="color-option"></div>
      </article>
    </section>
  );
};

export default Sidebar;
