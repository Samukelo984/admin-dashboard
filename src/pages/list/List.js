import "./List.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DataTable from "../../components/datatable/DataTable";

const List = () => {
  return (
    <main className="list">
      <Sidebar />
      <section className="list-container">
        <Navbar />
        <DataTable />
      </section>
    </main>
  );
};

export default List;
