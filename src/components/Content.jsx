import React, { Component } from 'react';
import axios from 'axios';
import Blog from './Blog';

class Content extends Component {
    state = {
      isLoading: true,
      posts: [],
      error: null,
    };

    fetchContent() {
      axios(`https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/posts.json`,{})
        .then( res =>
            this.setState({
              posts: res.data,
              isLoading: false,
            })
        )
        .catch(error => this.setState({ error, isLoading: false }));
    }
  
    componentDidMount() {
      this.fetchContent();
    }
  
    render() {
      const { isLoading, posts, error } = this.state;
      return (
        <React.Fragment>
          <h1>React Fetch - Blog</h1>
          <hr />
          {!isLoading ? Object.keys(posts).map(key => <Blog key={key} body={posts[key]} />) : <h3>Loading...</h3>}
        </React.Fragment>
      );
    }
  }

  export default Content;