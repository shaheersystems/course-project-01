import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
const AddUser = ({ onAddUser }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (username === "" || age === "") {
      setError({
        title: "Invalid Input!",
        message: "Please enter a valid name and age (non-empty values)",
      });
    } else if (Number(age) < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0)",
      });
    } else {
      onAddUser(username, age);
    }
    setUsername("");
    setAge("");
  };
  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div className=''>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <div className='h-10 w-full'></div>
      <Card>
        <form
          className='flex flex-col gap-4'
          action=''
          onSubmit={addUserHandler}
        >
          <label className='text-lg font-semibold' htmlFor='username'>
            Username
          </label>
          <input
            value={username}
            onChange={usernameChangeHandler}
            className=' bg-[#202425] outline-none px-4 py-2 rounded'
            id='username'
            type='text'
            autoComplete='off'
          />
          <label className='text-lg font-semibold' htmlFor='age'>
            Age (Years)
          </label>
          <input
            value={age}
            onChange={ageChangeHandler}
            className='outline-none bg-[#202425] focus:outline-2  px-4 py-2 rounded'
            id='age'
            type='number'
            autoComplete='off'
          />

          <Button onClick={addUserHandler}>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
