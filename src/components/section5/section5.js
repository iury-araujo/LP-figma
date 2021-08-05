import React from 'react'
import imagemPrincipal from '../../img/quinta-section.png'

function QuintaSection () {

    return (
    <section id="quinta-section">
        <div className="quinta-subsection">
            <h1> Perfect solution <br/>for small <br/>businesse</h1>
            <h5>Being a freelancer is a <br/>rollercoaster of emotions.<br/> We built Slate to keep your<br/> freelance business less stressful.<br/> We'd love to show you<br/> what we're building...</h5>
            <div className="buttons-quinta-section">
                <span className="button quinta-section-primary">sign up for free</span>
                <span className="button quinta-section-secondary">find out more</span>
            </div>
        </div>
        <img src={imagemPrincipal} alt="" className="image-quinta-section"/>
    </section>
    )

}

export default QuintaSection