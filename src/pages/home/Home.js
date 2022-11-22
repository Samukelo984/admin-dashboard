import "./Home.scss";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <main className="home">
      <Sidebar />
      <section className="home-container">Container</section>
    </main>
  );
};

export default Home;
