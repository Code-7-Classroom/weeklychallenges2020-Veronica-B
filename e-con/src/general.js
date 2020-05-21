let left_ArrowId = document.getElementById('left-arrow');
let right_ArrowId = document.getElementById('right-arrow');
let img=document.getElementById('img');
let dot1=document.getElementById('dot1');
let dot2=document.getElementById('dot2');
let dot3=document.getElementById('dot3');
let i= 0;

//0 1 2

const images= ['../images/img1.jpg', '../images/img2.jpg', '../images/img3.jpg'];
const dots=[dot1, dot2, dot3];
console.log(dots)
//10000 is equaled to 10 seconds.
const time= 10000;




function change_Image(){
    img.src =images[i];

    switch(i){
        case 0:
        dots[i].style["height"]="40px"
        dots[i].style["width"]="40px";
        dots[2].style["height"]="20px"
        dots[2].style["width"]="20px";
        i=i+1;
        break;

        case 1:
        dots[i].style["height"]="40px"
        dots[i].style["width"]="40px";
        dots[i-1].style["height"]="20px"
        dots[i-1].style["width"]="20px";
        i=i+1;
        break;

        case 2:
        dots[i].style["height"]="40px"
        dots[i].style["width"]="40px";
        dots[i-1].style["height"]="20px"
        dots[i-1].style["width"]="20px";    
        i=0;
        break;    
    }
}


function change_Image_Reverse(){
    img.src =images[i];
        switch(i){
            case 0:
            dots[i].style["height"]="40px"
            dots[i].style["width"]="40px";
            dots[i+1].style["height"]="20px"
            dots[i+1].style["width"]="20px";    
            i=2;
            break;

            case 1:
            dots[i].style["height"]="40px"
            dots[i].style["width"]="40px";
            dots[i+1].style["height"]="20px"
            dots[i+1].style["width"]="20px";    
            i=i-1;
           
            break;
 
            case 2:
            dots[i].style["height"]="40px"
            dots[i].style["width"]="40px";
            dots[0].style["height"]="20px"
            dots[0].style["width"]="20px";    
            i=i-1;
            break;    
        }
}

    
setTimeout("change_Image()", time);


//loads the slideshow when the window loads
window.onload=change_Image;

left_ArrowId.addEventListener("click", change_Image_Reverse);

right_ArrowId.addEventListener("click", change_Image);
