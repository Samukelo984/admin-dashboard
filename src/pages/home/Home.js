import "./Home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import FeaturedChart from "../../components/featuredchart/FeaturedChart";
import Chart from "../../components/chart/Chart";

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
      </section>
    </main>
  );
};

export default Home;
