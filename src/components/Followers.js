import React from "react";
import styled from "styled-components";

const Container = styled.div`
   max-width: 1200px;

   display: flex;
   flex-direction: row;
   flex-wrap: wrap;

   justify-content: flex-start;

   h2 {
      width: 100%;
      margin-left: 0.5%;
   }
`;

const Block = styled.div`
   width: 19%;
   margin: 0.5%;
   padding: 30px;

   border: 1px solid #00000020;

   p {
      text-align: center;
      margin: 2px 0;
   }
`;

const Followers = ({ followers }) => {
   console.log("FOLLOWER 0", followers[0]);
   const Followers = followers.map(follower => (
      <Block>
         <p>{follower.login}</p>
      </Block>
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
