import "./SinglePage.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import TableCover from "../../components/table/Table";

const SinglePage = () => {
  return (
    <main className="single">
      <Sidebar />
      <section className="single-container">
        <Navbar />
        <article className="top">
          <aside className="left">
            <button>Edit</button>
            <h1>Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/11578601/pexels-photo-11578601.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <div className="details">
                <h1>Jane Doe</h1>
                <div className="details-item">
                  <span className="item-key">Email:</span>
                  <span className="item-value">janedoe@gmail.com</span>
                </div>
                <div className="details-item">
                  <span className="item-key">Phone:</span>
                  <span className="item-value">084 229 3243</span>
                </div>
                <div className="details-item">
                  <span className="item-key">Address:</span>
                  <span className="item-value">
                    8 Smitson Ave, Sandton Johannesburg
                  </span>
                </div>
                <div className="details-item">
                  <span className="item-key">Country:</span>
                  <span className="item-value">South Africa</span>
                </div>
              </div>
            </div>
          </aside>
          <aside className="right">
            <Chart aspect={3 / 1} title="User Spenditure (Last 6 months)" />
          </aside>
        </article>
        <article className="btm">
          <h1>Last Transactions</h1>
          <TableCover />
        </article>
      </section>
    </main>
  );
};

export default SinglePage;
