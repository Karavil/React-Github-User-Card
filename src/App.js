import React from "react";
import axios from "axios";

import UserCard from "./components/UserCard";
import Followers from "./components/Followers";

const BASE_GITHUB_API = "https://api.github.com";
const github = axios.create({
   baseURL: BASE_GITHUB_API
});

class App extends React.Component {
   constructor() {
      super();
      this.state = {
         username: "",
         user: null,
         followers: []
      };
   }

   componentDidUpdate(prevProps, prevState) {
      if (this.state.username !== prevState.username) {
         console.log("Username changed");
         github
            .get(`/users/${this.state.username}`)
            .then(res => {
               console.log(res.data);
               this.setState({ user: res.data });
            })
            .catch(e => {
               console.error("Error while getting user data:", e);
            });
      }
   }

   render() {
      return (
         <div className="App">
            <input
               onChange={e => this.setState({ username: e.target.value })}
            ></input>
            <UserCard user={this.state.user} />
            <Followers followers={this.state.followers} />
         </div>
      );
   }
}

export default App;
