import React, { Component } from 'react';
import axios from 'axios';

class UsersComponent extends Component {
    state = {
      isLoading: true,
      users: [],
      error: null
    };
  
    fetchUsers() {
      axios.get(`https://jsonplaceholder.typicode.com/users`,{})
        .then(res =>
          this.setState({
            users: res.data,
            isLoading: false,
          })
        )
        .catch(error => this.setState({ error, isLoading: false }));
    }
  
    componentDidMount() {
      this.fetchUsers();
    }

    render() {
      const { isLoading, users, error } = this.state;
      return (
        <React.Fragment>
          <h1>Random User</h1>
          {error ? <p>{error.message}</p> : null}
          {!isLoading ? (
            users.map(user => {
              const { username, name, email } = user;
              return (
                <div key={username}>
                  <p>Name: {name}</p>
                  <p>Email Address: {email}</p>
                  <hr />
                </div>
              );
            })
          ) : (
            <h3>Loading...</h3>
          )}
        </React.Fragment>
      );
    }
  }
  
  
export default UsersComponent;