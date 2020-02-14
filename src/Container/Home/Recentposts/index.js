import React from 'react';
import "./style.css"
import Card from '../../../Components/UI/Card';

const index = () => {
    return (
        <div style={{ width: '70%' }}>
            <Card>
                <div className="imgrc">
                    <img src={require('../../../BlogpostImages/Nutrition.jpg')}></img>
                </div>
                <div className="imgdetails">
                    <h5>Nutrition</h5>
                    <h3>Fiber: Your Secret Weapon for Weight Loss and Better Health</h3>
                    <span>Posted on MARCH 7, 2018 by SARAH SCHLICHTER</span>
                    <p>We’ve all heard about the importance of fiber to our health and digestion, but there are different kinds of fiber that play distinct roles and have varying effects on your health.Fiber is a non-digestible carbohydrate that offers many health benefits. Many of us fall short of the daily recommendations for fiber: The average American consumes 15 grams/day, compared to the recommended 25 or 38 grams/day for women and men, respectively.</p>
                    <button id="btn">Read more</button>

                </div>
                <div className="imgrc">
                    <img src={require('../../../BlogpostImages/Love-Hormon.jpg')}></img>
                </div>
                <div className="imgdetails">
                    <h5>Weight</h5>
                    <h3>The Love Hormone Could Affect Your Weight, According To Science</h3>
                    <span>FEBRUARY 10, 2020 by CASSIE SHORTSLEEVE</span>
                    <p>Oxytocin, also known as the ‘love hormone,’ seems pretty magical: Moms and dads release it as they form lifelong bonds with their newborns, lovers share an upsurge of it, even pet owners create oxytocin. “Anything that gives you self-pleasure will increase the release of oxytocin,” says Dr. Rocio Salas-Whalen, an endocrinologist and founder of New York Endocrinology.</p>
                    <button id="btn">Read more</button>

                </div>
            </Card>

        </div>
    );
};

export default index;