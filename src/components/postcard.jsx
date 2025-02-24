import React from "react";

import LikeButton from "./likebutton";

const PostCard=({post})=>{
    return(
        <div className="post-card">
            <img src={post.profileImage} alt={post.username} className="profile-image" style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover" }}/>
            <div className="post-content">
                <h3 className="username">{post.username}</h3>
                <p className="post-text">{post.content}</p>
                <LikeButton />
            </div>
         </div>
    );

};
export default PostCard;