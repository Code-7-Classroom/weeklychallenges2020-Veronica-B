var side_Nav= document.querySelector('.side_navigation_mobile');
var x_icon= document.querySelector('.x');
var hamburger_Icon= document.getElementById('side-nav');



function show_Side_Nav(){
    //will show the green side with side nav, and will add x and remove hamburger icon
    side_Nav.style.display= "block";
    x_icon.style.display="block";
    hamburger_Icon.style.display="none"
};

function no_show_Side_Nav(){
    //the reverse of show_Side_Nav
    side_Nav.style.display= "none";
    x_icon.style.display="none";
    hamburger_Icon.style.display="block"
};




hamburger_Icon.addEventListener("click",show_Side_Nav);

x_icon.addEventListener("click",no_show_Side_Nav);







