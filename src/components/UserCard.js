import React from "react";
import styled from "styled-components";

const Card = styled.a`
   width: 100%;
   padding: 20px;
   min-height: 200px;

   display: flex !important;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   margin: 30px 0 10px;

   display: block;

   border-radius: 10px;

   color: black;
   text-decoration: none;
   text-align: center;

   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

   cursor: ${props => (props.hoverEffect ? "cursor" : {})};

   h1 {
      margin: 0 0 5px 0;
   }

   p {
      margin: 3px 0;
   }
`;

const UserCard = ({ user, firstSearch }) => {
   console.log("USER", user);
   return (
      <>
         {user && user.name && (
            <Card href={user.html_url} hoverEffect={true}>
               <h1>{user.name}</h1>
               <p>
                  <b>Location</b>: {user.location}
               </p>
               <p>
                  <b>Bio</b>: {user.bio}
               </p>
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
