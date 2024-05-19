import React from "react";

const user = async () => {
  interface User {
    id: number;
    name: string;
    email: string;
  }
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  return (
    <div>
      <h1 className="p-1 my-5  bg-sky-500 text-white text-lg hover:bg-sky-700">
        user page
      </h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default user;
