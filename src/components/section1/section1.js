import React from 'react'
import imagemPrincipal from '../../img/screen.png'


function PrimeiraSection () {
    return (
        <section id = "section-principal">
            <div className="principal">
                    <div className="container-principal">
                        <h1 className="escrita-principal">Find the Best Solution in Seconds</h1>
                        <h4 className="escrita-subPrincipal">If debugging is the process of removing software bugs.</h4>
                    </div>
                    <div className="buttons-princpal">
                        <span className="button-primary">get started</span>
                        <span className="button-secondary">try for free</span>
                    </div>
                    <img src={imagemPrincipal} alt="" width="65%"/>
                </div>
        </section>
    );
}

export default PrimeiraSection;