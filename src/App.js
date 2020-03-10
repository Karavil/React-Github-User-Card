import React from "react";
import axios from "axios";

import styled, { createGlobalStyle } from "styled-components";

import UserCard from "./components/UserCard";
import Followers from "./components/Followers";

const BASE_GITHUB_API = "https://api.github.com";
const github = axios.create({
   baseURL: BASE_GITHUB_API
});

const Global = createGlobalStyle`
   * {
      box-sizing: border-box;
      font-family: "Raleway", sans-serif;
   }
   body {
      margin: 0;
   }
`;

const Container = styled.div`
   min-height: 100vh;
   width: 100%;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

const Bar = styled.div`
   width: 100%;
   padding: 30px 0;
   background: black;

   display: flex;
   justify-content: center;
   align-items: center;
`;

const LookupInput = styled.input`
   border: 2px solid #00000020;
   border-radius: 20px;

   width: 400px;
   padding: 1rem 0.2rem;

   text-align: center;
   font-size: 1.2rem;

   transition: 0.3s all ease;

   &:focus {
      outline: none !important;
      border-color: black;
      box-shadow: 0 0 10px #00000020;
   }
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
               if (!res.data.user || !res.data.user.name) {
                  this.setState({ followers: [] });
               }
               this.setState({ user: res.data });
            })
            .catch(e => {
               console.error("Error while getting user data:", e);
            })
            .then(() => {
               if (this.state.firstSearch)
                  this.setState({ firstSearch: false });
            });
         github
            .get(`/users/${this.state.username}/followers`)
            .then(res => {
               console.log(res.data);
               this.setState({ followers: res.data });
            })
            .catch(e => {
               console.error("Error while getting user followers:", e);
            });
      }
   }

   render() {
      return (
         <>
            <Global />
            <Container>
               <UserCard
                  user={this.state.user}
                  firstSearch={this.state.firstSearch}
               />
               <Followers followers={this.state.followers} />
            </Container>
            <Bar>
               <LookupInput
                  onChange={e => this.setState({ username: e.target.value })}
                  placeholder={"Enter a GitHub username."}
               ></LookupInput>
            </Bar>
         </>
      );
   }
}

export default App;
