import "./Home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import FeaturedChart from "../../components/featuredchart/FeaturedChart";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <main className="home">
      <Sidebar />
      <section className="home-container">
        <Navbar />
        <article className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </article>
        <article className="charts">
          <FeaturedChart />
          <Chart />
        </article>
        <article className="list">
          <span>Latest Transactions</span>
          <Table />
        </article>
      </section>
    </main>
  );
};

export default Home;
