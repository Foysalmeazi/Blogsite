import React, { useEffect, useState } from 'react';
import './style.css';
import Card from '../../../Components/UI/Card';
import dt from '../../../Data/blog.json';
import { NavLink } from 'react-router-dom';
const Post1sidebar = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const posts = dt.data;
        setPosts(posts);

    }, [posts]);


    return (
        <div className="sidebar-header">
            <div id="first" style={{ marginBottom: "30px", padding: "20px", boxsizing: 'border-box' }}>
                <div className="scontainer">
                    <span>About us</span>
                </div>

                <div className="myimage">
                    <img src={require('../../../BlogpostImages/fb.jpg')} alt="image"></img>

                </div>

                <div className="bio">
                    <p className="biopara">Hello,I am Abdullah Al Foysal.I am web designer and web developer.Specialist in Front-End web development.</p>

                </div>
            </div>

            <div id="seconds" style={{ marginBottom: "35px" }}>
                <div className="scontainertwo">
                    <span>Social network</span>
                </div>
            </div>
            <div className="Third" id="sdbar">
                <div className="rcpost">
                    <span>Recent Post</span>
                </div>
                <div className="parentpost">
                    {
                        posts.map((rposts) => {
                            return (
                                <NavLink key={rposts.id} to={`/post/${rposts.id}`}>
                                    <div className="rpost">
                                        <h4>{rposts.blogTitle}</h4>
                                        <span>{rposts.postedOn}</span>

                                    </div>
                                </NavLink>

                            );

                        })
                    }
                </div>

            </div>
            {/* <div id="fourth" style={{ marginBottom: "30px", padding: "20px", boxsizing: 'border-box', marginTop: "30px" }}>
                <div className="felement">
                    <span>Visit Also</span>
                    <h5>This blog</h5>
                    <span>for more</span>
                    <h5>Information</h5>
                    <button>Go</button>
                </div>


            </div> */}



        </div>
    )
}
export default Post1sidebar;
