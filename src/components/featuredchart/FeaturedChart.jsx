import "./FeaturedChart.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const FeaturedChart = () => {
  return (
    <section className="featured">
      <aside className="top">
        <h1>Total Revenue</h1>
        <MoreVertOutlinedIcon className="featured-icon" />
      </aside>
      <aside className="bottom">
        <div className="featured-bar">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total sales mad etoday</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>

        <div className="summary">
          <div className="item">
            <span>Target</span>
            <div className="item-result">
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
              <span>$12 400</span>
            </div>
          </div>
          <div className="item">
            <span>Last Week</span>
            <div className="item-result positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <span>$12 400</span>
            </div>
          </div>
          <div className="item">
            <span>Last Month</span>
            <div className="item-result positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <span>$12 400</span>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default FeaturedChart;
