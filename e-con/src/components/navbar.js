import React from 'react';


const Navbar = () => {

    let show=false;

    const handleMobileNav= () => {
        const navBar=document.querySelector(".navigation");
        const sidenav=document.querySelector(".side_navigation_mobile");
        navBar.classList.toggle('change')
    if (show===false){
        show=true;
        console.log(show)
        return(
        sidenav.style.display="flex"
        )
    }else{
        show=false;
        return(
        sidenav.style.display="none"
        )
}
}

        return (
            <React.Fragment>
                <header>
                    <nav className="navigation">
                        <ul className="navigation">
                            <li className="navigation__options"> <img className="navigation__company_logo" src="images/logo.png" alt="company logo" /></li>

                            <li className="navigation__options"> <a className="navigation__items" href="index.html">Home</a> </li>


                            <li className="navigation__options"> <a className="navigation__items active" href="products.html">Products</a></li>


                            <li className="navigation__options"> <a className="navigation__items" href="contact.html">Contact Us</a></li>


                            <div className="hamburger--container" onClick={() => handleMobileNav()}>
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





export default Navbar 