import React from "react";
import "./style.css"
import Header from "../../Components/Header";
import Card from "../../Components/UI/Card";
import Sidebar from "../../Components/Sidebars/Sidebar";
import Recentposts from '../Home/Recentposts';
import dt from '../../Data/blog.json';

const Home = (props) => {

    return (
        <div>
            <div>
                <div className="allposts">

                    <div class="bimges">
                        <img src={require("../../BlogpostImages/beautiful-&-simple.jpg")} id="pimg1"></img>

                    </div>

                    <div id="allimg" style={{ width: "30%" }}>
                        <div id="bimge">
                        <img src={require("../../BlogpostImages/BlogpostImagesaffection-baby.jpg")} id="limg1"></img>

                        </div>
                        <div id="bimge">
                        <img src={require("../../BlogpostImages/Breath.jpeg")} id="limg1"></img>


                        </div>
                        <div id="bimge">
                        <img src={require("../../BlogpostImages/Meatloaf.jpg")} id="limg1"></img>


                        </div>
                    </div>


                </div>

            </div>
            <section >
                <div className="hcontainer">
              
                   <Recentposts></Recentposts>
                   <Sidebar></Sidebar>
               
                </div>
               
            </section>
        </div>


    )
}

export default Home;