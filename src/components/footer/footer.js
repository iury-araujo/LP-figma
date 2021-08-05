import React from 'react'
import footer from '../../img/footer.png'
import footerImage from '../../img/bx_bx-map.png'
import footerImage2 from '../../img/ic_baseline-phone-android.png'
import socialMedias from '../../img/socialmedia.png'


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
            <img src={footer} className="img-footer-desktop" />
            <div className="lado-direito">
                <figure>
                    <img src={footerImage}/>
                    <span>7480 Mockingbird Hill undefined </span>
                </figure>
                <figure>
                    <img src={footerImage2}/>
                    <span>(239) 555-0108 </span>
                </figure>
                <img src={socialMedias}/>
            </div>
        </footer>
    );

}

export default Footer