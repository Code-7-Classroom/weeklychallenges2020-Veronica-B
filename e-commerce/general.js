var left_ArrowId = document.getElementById('left-arrow');
var right_ArrowId = document.getElementById('right-arrow');
var img=document.getElementById('img');
var i= 0;

//0 1 2
var images= ['img1.jpg', 'img2.jpg', 'img3.jpg'];
//10000 is equaled to 10 seconds.
var time= 10000;




function change_Image(){
    //this works because I put name="img" on my html
    img.src =images[i];

    if(i < images.length-1 ){
        i++; 
    }else{
        i=0;
    }
}


function change_Image_Reverse(){
    //this works because I put name="img" on my html
    img.src =images[i];
        switch(i){
            case 0:
            i=0;
            break;

            case 1:
            i=i-1;
            break;
            
            case 2:
            i=i-1;
            break;    
        }
}

    
setTimeout("change_Image()", time);


//loads the slideshow when the window loads
window.onload=change_Image;

left_ArrowId.addEventListener("click", change_Image_Reverse);

right_ArrowId.addEventListener("click", change_Image);



