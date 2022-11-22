import "./Home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <main className="home">
      <Sidebar />
      <section className="home-container">
        <Navbar />
        Container
      </section>
    </main>
  );
};

export default Home;
