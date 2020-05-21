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
)

