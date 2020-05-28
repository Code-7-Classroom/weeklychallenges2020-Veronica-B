import React from 'react';


class Navbar extends React.Component {

    handleMobileNav(){
    const hamburgerIcon= document.querySelector(".hamburger--container");
    const navBar=document.querySelector(".navigation");
    const sidenav=document.querySelector(".side_navigation_mobile");

    let e=0;

    hamburgerIcon.addEventListener('click', ()=>{
    navBar.classList.toggle('change')


    if (e===0){
        sidenav.style.display="flex"
        e++;
    }else{
        sidenav.style.display="none"
        e--;
}
}
)}

    render() {
        return (
            <React.Fragment>
                <header>
                    <nav className="navigation">
                        <ul className="navigation">
                            <li className="navigation__options"> <img className="navigation__company_logo" src="images/logo.png" alt="company logo" /></li>

                            <li className="navigation__options"> <a className="navigation__items" href="index.html">Home</a> </li>


                            <li className="navigation__options"> <a className="navigation__items active" href="products.html">Products</a></li>


                            <li className="navigation__options"> <a className="navigation__items" href="contact.html">Contact Us</a></li>


                            <div className="hamburger--container" onClick="handleMobileNav">
                                <div className="hamburger--line line--one"></div>
                                <div className="hamburger--line line--two"></div>
                                <div className="hamburger--line line--three"></div>
                            </div>

                        </ul>
                    </nav>
                    <nav className="side_navigation_mobile">
                        <ul>
                            <li className=" side_navigation_mobile__options"><a className="navigation__items" href="index.html">Home
                </a></li>

                            <li className="side_navigation_mobile__options side_navigation_mobile__options__current"><a className="navigation__items" href="products.html">Products
                </a></li>

                            <li className="side_navigation_mobile__options"><a className="navigation__items" href="contact.html">Contact Us!
                </a></li>
                        </ul>
                    </nav>
                </header>
            </React.Fragment>
        )
    }
}




export default Navbar 