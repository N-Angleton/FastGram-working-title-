import React from "react";
import { Link } from "react-router-dom";

export const SidebarUser = (props) => (
  <div className="followUserContainer">
    <img
      className="otherUserImg"
      src={props.user.photoUrl ? props.user.photoUrl : window.defaultPhoto}
      alt="profile photo"
    />
    <div className="namesContainer">
     <Link to={`/${props.user.username}`} className="userProfileLink">
      <h3 className="usernameOtherUser">{props.user.username}</h3>
     </Link>
     <h3 className="fullnameOtherUser">{props.user.full_name}</h3>
    </div>
     <button className="btn-follow" onClick={() => {props.createFollow({
      approved: true,
      follower_id: props.current_user_id,
      user_to_be_followed_id: props.user.id,
    }).then(() => props.fetchFeed(props.current_user_id))}}>Follow</button>
  </div>
);
