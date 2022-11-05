import "./App.css";
import Button from "./components/UI/Button";
import Overlay from "./components/UI/Overlay";
import AddUser from "./components/Users/AddUser";
import { useState } from "react";
import Modal from "./components/UI/ErrorModal";
import UserList from "./components/Users/UserList";
import EmptyStateComponent from "./components/UI/EmptyStateComponent";
function App() {
  // const [hidden, setHidden] = useState(true);
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { id: Math.random().toString(), username: uName, age: uAge },
      ];
    });
  };
  return (
    <div className='App font-code'>
      <AddUser onAddUser={addUserHandler} />
      <div className='py-5'></div>
      {usersList.length === 0 ? (
        <EmptyStateComponent message='No Users' />
      ) : (
        <UserList users={usersList} />
      )}
    </div>
  );
}

export default App;
