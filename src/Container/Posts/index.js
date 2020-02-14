import React from "react";
import "./style.css"
import Sidebar from "../../Components/Sidebar";
import Recentposts from '../Home/Recentposts';

const Posts=(props)=>
{
    
    return(
        <div className="container">
            
        <Recentposts></Recentposts>
        <Sidebar></Sidebar>
         
        </div>
    )
}

export default Posts;
