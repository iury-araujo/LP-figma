import React from 'react'
import carrinho from '../../img/icone-carrinho.png'

function Carrinho () {

    return (

        <div className="carrinho-geral">
            <img src={carrinho} style={{width: "45px"}} alt="imagem do carrinho"/>
            <span></span>
        </div>

    )

}

export default Carrinho
