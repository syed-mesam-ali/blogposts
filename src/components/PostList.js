import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  render() {
    //console.log(this.props.posts);
    return (
      <div>
        <ul>
          {this.props.posts.map((item) => (
            <li key={item.id}>
              {item.title} -
              <span style={{ fontWeight: "bold" }}>
                <UserHeader userId={item.userId} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.post };
};

export default connect(mapStateToProps, {
  fetchPostsAndUsers,
})(PostList);
