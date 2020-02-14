import React from "react";
import "./style.css"
import Post1sidebar from "../../Components/Sidebars/Post1sidebar";
import Blogpost from "../../Components/Blogpost";
// import Recentposts from '../Home/Recentposts';
// import Card from '../../Components/'

const Post=(props)=>
{
    
    return(
        <div className="container">
            
            <Blogpost {...props}></Blogpost> 
            <Post1sidebar></Post1sidebar>
         
        </div>
    )
}

export default Post;