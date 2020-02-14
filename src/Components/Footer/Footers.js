import React, { Component } from 'react';
import "./style.css";
export default class Footers extends Component {
    render() {

        var Scroolbtn = () => {
            var scrlbtn = document.querySelector("#Scbtn");
            scrlbtn.addEventListener("click", function () {
                window.scrollTo(
                    {
                        top: 0,
                        left: 0,
                        behavior: "smooth"
                    });
            });
        }

        return (

            <div>
                <footer class="ft">
                    <h4>Get a project then you would like to discuss?<a href="#" className="Cu">Contact us</a></h4>
                    <div class="ln"></div>
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <h2 id="title">He@lthC@re</h2>
                            <p id="para">It is a blog based on Health. You will know a little bit about health by using this blog. Everybody knows that health is so much important in our life. So, Everybody needs to concern about it. This blog is a little bit to help you to improve your quality of life.
                            </p>
                            <h4></h4>


                        </div>

                        <div className="col-md-4 col-sm-12">
                            <h6>Recent News</h6>
                            <ul>
                                <li><p>The current outbreak of infections with a novel type of coronavirus has sparked global anxiety and concern that the virus might spread too far and too fast and cause dramatic harm before health officials find a way to stop it.</p></li>

                            </ul>

                        </div>

                        <div className="col-md-4 col-sm-12">
                            <h6>Contact Information</h6>

                            <div class="follow">
                                <p>Email :<span>faysalmeazi744@gmail.com</span></p>
                                <p>Phone :<span>01639070766</span></p>
                                <a href="https://facebook.com/Faysalmeazi"><i class="fa fa-facebook mr-3"></i></a>
                                <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin"><i
                                    class="fa fa-linkedin mr-3"></i></a>
                                <a href="https://www.instagram.com/faysal_meazi/?hl=en"><i class="fa fa-instagram mr-3"></i></a>
                                <a><i class="fa fa-google-plus mr-3"></i></a>
                                <a> <i class="fa fa-twitter"></i></a>

                            </div>
                        </div>


                    </div>
                    <button id="Scbtn" onClick={Scroolbtn}>
                        <i class="material-icons">arrow_upward</i>

                    </button>




                </footer>
                <div className="cpr">
                    <p>Copyright @Abdullah Al Foysal</p>
                </div>


            </div >



        )
    }
}
