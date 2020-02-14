import React, { useEffect, useState } from 'react';
import './style.css'
import Card from '../UI/Card';
import dt from '../../Data/blog.json';
const Blogpost = (props) => {

  const [post, setPost] = useState({
            id:"",
            blogCategory:"" ,
            blogTitle:"",
            slug: "",
            postedOn: "",
            author: "",
            blogImage: "",
            blogText:""
  });
  const [postId,setPostId]=useState("");

  useEffect(() => {
    const previousid = props.match.params.pid;
    const post = dt.data.find(idofpost=>idofpost.id==previousid);
    setPost(post);
    setPostId(postId);

  },[post, props.match.params.pid]);

  if(post.blogImage=="")
  {
    return null;
  }

  return (
    <div className="blogpost-container">
      <div id="bcard">
        <div className="header-menu">
          <span className="category">{post.blogCategory}</span>
          <h4 className="title">{post.blogTitle}</h4>
          <span className="postby">{post.postedOn} by {post.author}</span>
        </div>

        <div className="postimage">
          <img src={require("../../BlogpostImages/"+post.blogImage)} alt="Image"></img>
        </div>
        <div className="tiltetext">
          <h3>{post.blogTitle}</h3>
          <p>{post.blogText}</p>
        </div>
  

      </div>

    </div>

  );
}
export default Blogpost;
