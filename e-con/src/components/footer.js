import React from 'react';


class Footer extends React.Component {
render(){
    return(

        <footer class="footer">

        <a href="https://www.facebook.com/">
            <img class="footer__icon" src="https://i.ya-webdesign.com/images/facebook-icon-png-black-1.png"
                alt="facebook icon"/>
        </a>
        <a href="https://www.instagram.com/">
            <img class="footer__icon"
                src="https://library.kissclipart.com/20180912/eq/kissclipart-transparent-background-instagram-logo-black-and-wh-31e3f146fed68009.jpg"
                alt="Instagram icon"/>
        </a>
        <a href="https://twitter.com/explore">
            <img class="footer__icon" src="https://chaminade.edu/wp-content/uploads/2019/08/Twitter-Icon-black-1.png"
                alt="Twitter icon"/>
        </a>

    </footer>
    )
}

}

export default Footer