import React from "react";
import "./UsersList.css"

const UsersList = ({ users }) => {
  const list = users.map(user => (
    <div className="user" key={user.email}>
      <img src={user.picture.large} alt="user"/>
      <h3>{user.name.first} {user.name.last}</h3>
      <p>{user.email}</p>
      <div className="spacer"></div>
    </div>
  ));
  return (
    <div>
      {list}
    </div>
  );
};

export default UsersList;
