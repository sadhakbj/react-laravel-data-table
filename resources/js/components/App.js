import React from "react";
import DataTable from "./DataTable";

const App = () => {
    return (
        <div className="card">
            <div className="card-header">Users</div>
            <div className="card-body">
                <DataTable
                    fetchUrl="/api/users"
                    columns={["name", "address", "email", "created_at"]}
                ></DataTable>
            </div>
        </div>
    );
};

export default App;
