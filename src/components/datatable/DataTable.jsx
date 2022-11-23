import "./DataTable.scss";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../DataTable";

const DataTable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cell-action">
            <Link to="/users/:id">
              <button className="view-btn">View</button>
            </Link>
            <button className="delete-btn">Delete</button>
          </div>
        );
      },
    },
  ];

  return (
    <section className="data-table">
      <aside className="table-title">
        Add New User
        <Link to="/users/new">Add New</Link>
      </aside>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </section>
  );
};

export default DataTable;
