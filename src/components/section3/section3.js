import React from 'react'
import imagemTerceira from '../../img/terceira-section.png'

function TerceiraSection () {

    return (
        <section id="terceira-section">
            <div>
                <h1>Quick & Easy Process</h1>
                <h5>Most calendars are designed for teams. Slate is designed<br/> for freelancers who want a simple way to plan<br/> their schedule.</h5>
                <div className = "terceira-section-botoes">
                    <button className="terceira-section-primary">sign up for free</button>
                    <button className="terceira-section-secundary">find out more</button>
                </div>
            </div>
            <img src={imagemTerceira}/>
        </section>
    )

}

export default TerceiraSection