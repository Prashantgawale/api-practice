import React, { useEffect, useState } from "react";

function Table() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/posts").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, [data]);
  return (
    <div>
      <table border={1}>
        <thead>
          <td>Id</td>
          <td>Name</td>
          <td>Mobile</td>
          <td>Email Id</td>
        </thead>
        <tbody>
          {data.map((items) => (
            <tr>
              <td>{items.id}</td>
              <td>{items.name}</td>
              <td>{items.mobile}</td>
              <td>{items.email}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
