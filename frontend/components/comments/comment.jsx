import React from "react";
import { FollowInterfaceContainer } from "../follow_interface/follow_interface_container";
import { Link } from "react-router-dom";

export class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: this.props.comment.body, editing: false };
    this.deleteComment = this.deleteComment.bind(this);
  }

  editComment(e) {
    e.preventDefault();
    this.setState({ editing: !this.state.editing });
  }

  updateBody(e) {
    e.preventDefault();
    this.setState({ body: e.target.value });
  }

  submitEditedComment(e) {
    e.preventDefault();
    this.props
      .updateComment({
        id: this.props.comment.id,
        body: this.state.body,
        posts_id: this.props.comment.posts_id,
        users_id: this.props.comment.users_id,
      })
      .then(this.setState({ editing: false }));
  }

  deleteComment(e) {
    e.preventDefault();
    this.props.deleteComment(this.props.comment.id);
  }

  render() {
    return (
      <li key={`comment${this.props.comment.id}`} className="commentContainer">
        <p className="commentBody">
        <Link to={{pathname: `/users/${this.props.commenter.username}`}} className="userProfileLink">
          <span className="commenterUsername">{this.props.commenter.username}</span>
        </Link>
        {this.props.comment.body}
        {this.props.commenter.id === this.props.session_id ? (
          <>
            <button className="btn-2" onClick={(e) => this.deleteComment(e)}>delete</button>
          </>
        ) : (
          // <FollowInterfaceContainer otherUser={this.props.commenter.id} />
          <></>
        )}</p>
      </li>
    );
  }
}
