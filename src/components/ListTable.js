import React from "react";
import dayjs from "dayjs";

function ListTable({rows}) {
    return (
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">姓名</th>
                    <th scope="col">手機</th>
                    <th scope="col">電郵</th>
                    <th scope="col">生日</th>
                    <th scope="col">地址</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((r) => {
                    return (
                        <tr key={r.sid}>
                            <td>{r.sid}</td>
                            <td>{r.name}</td>
                            <td>{r.mobile}</td>
                            <td>{r.email}</td>
                            <td>{dayjs(r.birthday).format("YYYY-MM-DD")}</td>
                            <td>{r.address}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default ListTable;
