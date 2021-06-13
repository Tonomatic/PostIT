import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { myFriends, createFriend, unfriend } from "../store/friend";


function UsersList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/users/");
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  const dispatch = useDispatch();

  const Add = async (friendId) => {
    setIsLoading(true)
    await dispatch(createFriend(friendId))
  }

  // <form onSubmit={friendForm} id="postForm" method="POST">
  //   <input
  //     id="formInput"
  //     placeholder="Pick a friend by his ID"
  //     value={friendId}
  //     onChange={updateFriendInput}
  //   />
  //   <button type="submit">Add</button>
  // </form>


  const userComponents = users.map((user) => {
    return (
      <div key={user.id}>
        <div className="individualNames">
          {user.username}
          <button
            onClick={() => { Add(user.id) }}
          >
            Add
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      <ul className="mainList">All Users {userComponents}</ul>
    </>
  );
}

export default UsersList;
