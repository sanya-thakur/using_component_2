import React from "react";
import { useState } from "react";

const LikeButton=()=>{
    const [liked,setLiked]=useState(false);

    return(
        <button 
        className={`like-button ${liked ? "liked" : ""} `}
        onClick={()=>setLiked(!liked)}
        >
            {liked?"❤️ Liked" : "🤍 Like"}
        </button>
    );
};

export default LikeButton;