import React from 'react';
import "./style.css"
import Card from '../../../Components/UI/Card';

const index = () => {
    return (
        <div style={{width:'70%'}}>
            <Card>
                <div className="imgrc">
                    <img src={require('../../../BlogpostImages/fitness-blog-post.jpg')}></img>
                </div>
                <div className="imgdetails">
                    <h5>Featured</h5>
                    <h3>Fitness Mantra To Live Fit Life</h3>
                    <span>Posted on July 21,2016 by Sora Blogging Tips</span>
                    <p>Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill.
                         Seed give firmament doesn't land, isn't lesser creeping.
                         Abundantly you called signs waters yielding he cattle greater were evening.
                         Sixth make moving the multiply dominion creature beast made subdue lights him.</p>
                    <button id="btn">Read more</button>
                
                </div>
            </Card>
            
        </div>
    );
};

export default index;