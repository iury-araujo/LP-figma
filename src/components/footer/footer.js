import React from 'react'
import footer from '../../img/footer.png'
import footerImage from '../../img/bx_bx-map.png'
import footerImage2 from '../../img/ic_baseline-phone-android.png'
import socialMedias from '../../img/socialmedia.png'
import $ from 'jquery'
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

function Footer () {

    return (
        <footer>
            <div className="lado-esquerdo">
                <div className="menu-footer">
                    <span>Price Item One<br/>Price Item Two<br/>Price Item Three</span>
                    <br/>
                    <span>Price Item One<br/>Price Item Two<br/>Price Item Three</span>
                </div>
                <p>Just type what's on your mind </p>
            </div>   
            <img src={footer} className="img-footer-desktop" alt="Imagem de localização"/>
            <div className="lado-direito">
                <figure>
                    <img src={footerImage} alt="Icone de localização"/>
                    <span>7480 Mockingbird Hill undefined </span>
                </figure>
                <figure>
                    <img src={footerImage2} alt="Icone de celular"/>
                    <span>(239) 555-0108 </span>
                </figure>
                <img src={socialMedias}/>
            </div>
        </footer>
    );
}

export default Footer