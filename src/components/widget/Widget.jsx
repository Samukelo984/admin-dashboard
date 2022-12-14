import "./Widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
  let data;

  // TEMP ADB
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlineOutlinedIcon
            className="widget-icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "USERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="widget-icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218, 165, 32, 0.2",
            }}
          />
        ),
      };
      break;
    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="widget-icon"
            style={{
              color: "green",
              backgroundColor: "rgba(0, 128, 0, 0.2",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See all users",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="widget-icon"
            style={{
              color: "purple",
              backgroundColor: "rgba(128, 0, 128, 0.2",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <section className="widget">
      <article className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </article>
      <article className="right">
        <aside className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff}%
        </aside>
        {data.icon}
      </article>
    </section>
  );
};

export default Widget;
