import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { myFriends, createFriend, unfriend } from "../store/friend";


function UsersList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const friends = useSelector(state => state.friend.friends)
  console.log(friends)
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/users/");
      const responseData = await response.json();
      dispatch(myFriends())
      setUsers(responseData.users);
    }
    fetchData();
  }, [dispatch]);


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

  const renderChoice = (userId) => {
    let friend1 = friends.map(friend => friend.id)
    if(friend1.includes(userId)){
      return (
        <>
        ✔
        </>
      )
    }
    return (
      <>
      Add
      </>
    )
  }
  const userComponents = users.map((user) => {
    return (
      <div key={user.id}>
        <div className="individualNames">
          {user.username}
          <button
          className="buttonFriend"
            onClick={() => { Add(user.id) }}
          >
            {renderChoice(user.id)}
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      <h2 className="anotherr">All Users</h2>
      <ul className="mainList">{userComponents}</ul>
    </>
  );
}

export default UsersList;
