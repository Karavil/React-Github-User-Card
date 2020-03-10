import React from "react";
import axios from "axios";

import styled from "styled-components";

import UserCard from "./components/UserCard";
import Followers from "./components/Followers";

const BASE_GITHUB_API = "https://api.github.com";
const github = axios.create({
   baseURL: BASE_GITHUB_API
});

const Container = styled.div`
   height: 100vh;
   width: 100%;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

const LookupInput = styled.input`
   border: 1px solid grey;
   padding: 1rem 1.5rem;
`;

class App extends React.Component {
   constructor() {
      super();
      this.state = {
         firstSearch: true,
         username: "",
         user: null,
         followers: []
      };
   }

   componentDidUpdate(prevProps, prevState) {
      if (this.state.username !== prevState.username) {
         github
            .get(`/users/${this.state.username}`)
            .then(res => {
               console.log(res.data);
               this.setState({ user: res.data });
            })
            .catch(e => {
               console.error("Error while getting user data:", e);
            })
            .then(() => {
               if (this.state.firstSearch)
                  this.setState({ firstSearch: false });
            });
      }
   }

   render() {
      return (
         <Container>
            <LookupInput
               onChange={e => this.setState({ username: e.target.value })}
            ></LookupInput>

            <UserCard
               user={this.state.user}
               firstSearch={this.state.firstSearch}
            />
            <Followers followers={this.state.followers} />
         </Container>
      );
   }
}

export default App;
