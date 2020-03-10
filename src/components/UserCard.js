import React from "react";
import styled from "styled-components";

const Card = styled.a`
   width: 450px;
   padding: 20px;
   display: block;

   color: black;
   text-decoration: none;

   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

   cursor: pointer;
`;

const UserCard = ({ user }) => {
   console.log("USER", user);
   return (
      <>
         {user && user.name && (
            <Card href={user.html_url}>
               <h1>{user.name}</h1>
               <h2>{user.location}</h2>
               <h2>{user.bio}</h2>
            </Card>
         )}
         {(!user || !user.name) && <h2>No user found.</h2>}
      </>
   );
};

export default UserCard;
