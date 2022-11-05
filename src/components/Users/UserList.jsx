import React from "react";
import Card from "../UI/Card";
function UserList({ users }) {
  return (
    <Card>
      <ul>
        {users.map((user) => {
          return (
            <li
              key={user.id}
              className='px-4 py-2 border border-neutral-700 my-2 rounded'
            >
              {user.username} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

export default UserList;
