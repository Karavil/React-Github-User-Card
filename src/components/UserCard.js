import React from "react";
import styled from "styled-components";

const Card = styled.a`
   width: 100%;
   padding: 20px;
   min-height: 200px;

   margin: 30px 0 10px;

   display: block;

   border-radius: 10px;

   color: black;
   text-decoration: none;
   text-align: center;

   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

   cursor: ${props => (props.hoverEffect ? "cursor" : {})};
`;

const UserCard = ({ user, firstSearch }) => {
   console.log("USER", user);
   return (
      <>
         {user && user.name && (
            <Card href={user.html_url} hoverEffect={true}>
               <h1>{user.name}</h1>
               <p>{user.location}</p>
               <p>{user.bio}</p>
            </Card>
         )}
         {!firstSearch && (!user || !user.name) && (
            <Card>
               <h1>User not found.</h1>
            </Card>
         )}
      </>
   );
};

export default UserCard;
