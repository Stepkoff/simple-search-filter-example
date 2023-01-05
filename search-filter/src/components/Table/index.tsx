import React from 'react';
import {IUser} from "../../users";

interface ITable {
  users: IUser[]
}

const Table:React.FC<ITable> = ({users}) => {
  return (
    <table>
      <thead>
      <tr>
        <th>Id</th>
        <th>First Name</th>
        <th>Last name</th>
        <th>Email</th>
      </tr>
      </thead>
      <tbody>
      {users.map(user => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
          <td>{user.email}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default Table;