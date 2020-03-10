import React from "react";
import styled from "styled-components";

const Container = styled.div`
   max-width: 700px;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   p {
      margin: 2px 0;
   }
`;

const Followers = ({ followers }) => {
   console.log("FOLLOWER 0", followers[0]);
   const Followers = followers.map((follower, index) => (
      <p>
         {index + 1}. {follower.login}
      </p>
   ));
   return (
      <Container>
         {followers.length > 0 && (
            <>
               <h2>Followers:</h2>
               {Followers}
            </>
         )}
      </Container>
   );
};

export default Followers;
