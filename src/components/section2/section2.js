import React from 'react'
import card1 from '../../img/mdi_alarm-light.png'
import card2 from '../../img/Vector.png'
import card3 from '../../img/vector_1.png'

function SegundaSection () {

    return (
        <section id="section-secundaria">
        <h1>FigmaLand was Built Specifically <br/>for You</h1>
        <div className="cards-section-secundaria">
            <div className="cards1 card-section-secundaria">
                <img src={card1} alt=""/>
                <h2>Management</h2>
                <p>Slate helps you see how many <br/>more days you need to work <br/>to reach your financial goal <br/>for the month and year.</p>
                <a href="">Learn More</a>
            </div>
            <div className="cards2 card-section-secundaria">
                <img src={card2} alt=""/>
                <h2>Customer Support</h2>
                <p>Slate helps you see how many <br/>more days you need to work <br/>to reach your financial goal <br/>for the month and year.</p>
                <a href="">Learn More</a>
            </div>
            <div className="cards3 card-section-secundaria">
                <img src={card3} alt=""/>
                <h2>Collaborative</h2>
                <p>Slate helps you see how many <br/>more days you need to work <br/>to reach your financial goal <br/>for the month and year.</p>
                <a href="">Learn More</a>
            </div>
        </div>
    </section>
    )

}

export default SegundaSection