import React from 'react'
import imgCard1 from '../../img/img-card1.png'
import precoCard1 from '../../img/preco-card1.png'
import imgCard2 from '../../img/img-card2.png'
import precoCard2 from '../../img/preco-card2.png'
import imgCard3 from '../../img/img-card3.png'
import precoCard3 from '../../img/preco-card3.png'

function SextaSection () {

    return (
        <section id="sexta-section">
            <div className="cards">
                <div className="card1">
                    <h1> Education </h1>
                    <h5> Brief price Description </h5>
                    <img src={imgCard1} alt=""/>
                    <img src={precoCard1} alt=""/>
                    <ul>
                        <li>Only 2 Operators</li>
                        <li>Abandoned Cart</li>
                        <li>Facebook & Instagram Ads</li>
                        <li className="notIncluse">Order Notifications</li>
                        <li className="notIncluse">Landing Pages</li>
                    </ul>
                    <div className="buttons-sexta-section">
                        <span> Order now </span>
                    </div>
                </div>
                <div className="card2">
                    <h1> Professional </h1>
                    <h5> Brief price Description </h5>
                    <img src={imgCard2} alt=""/>
                    <img src={precoCard2} alt=""/>
                    <ul>
                        <li>Only 2 Operators</li>
                        <li>Abandoned Cart</li>
                        <li>Facebook & Instagram Ads</li>
                        <li>Order Notifications</li>
                        <li className="notIncluse">Landing Pages</li>
                    </ul>
                    <div className="buttons-sexta-section">
                        <span> Order now </span> 
                    </div>
                </div>
                <div className="card3">
                    <h1> Business </h1>
                    <h5> Brief price Description </h5>
                    <img src={imgCard3} alt=""/>
                    <img src={precoCard3} alt=""/>
                    <ul>
                        <li>Only 2 Operators</li>
                        <li>Abandoned Cart</li>
                        <li>Facebook & Instagram Ads</li>
                        <li>Order Notifications</li>
                        <li>Landing Pages</li>
                    </ul>
                    <div className="buttons-sexta-section">
                        <span> Order now </span>
                    </div>
                </div>
            </div>
            <div><hr/></div>
    </section>
    )

}

export default SextaSection;