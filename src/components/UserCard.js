import React from "react";

const UserCard = ({ user }) => {
   console.log("USER", user);
   return (
      <div>
         {user && user.name && (
            <a href={user.html_url}>
               <h1>{user.name}</h1>
               <h2>{user.location}</h2>
               <h2>{user.bio}</h2>
            </a>
         )}
         {(!user || !user.name) && <h2>No user found.</h2>}
      </div>
   );
};

export default UserCard;
