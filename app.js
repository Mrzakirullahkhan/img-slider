const nextBtn = document.querySelector('#next');
const preBtn = document.querySelector('#previous');
const img = document.querySelector('#myImg');


const imgArray = ["img2.jpg","img3.jpg","img4.jpg"]
    
   

let imageIndexNumber = 0;
const nextSlide = ()=> {
    
    if(imageIndexNumber<imgArray.length){
        imageIndexNumber++;
        img.src = imgArray[imageIndexNumber];
    }
    if(imageIndexNumber>=imgArray.length){
        nextBtn.style.display = "none";
    }
    
    
    
}
nextBtn.addEventListener('click' , nextSlide )
// for prevoiius btn 

const preSlide = ()=> {
    
    if(imageIndexNumber>=imgArray.length){
        imageIndexNumber--;
        img.src = imgArray[imageIndexNumber];
    }
    if(imageIndexNumber = 0){
        preBtn.style.display = "none";
    }   
}
preBtn.addEventListener('click' , preSlide )



// 
// if(imageIndexNumber>=imgArray.length){
//     img.src = imgArray[imageIndexNumber];
//     preBtn.style.display = "inline";
//     nextBtn.style.display = "none";
//     imageIndexNumber--;
// }


// if(imageIndexNumber<imgArray.length){
//     preBtn.style.display = "none";
//     img.src = imgArray[imageIndexNumber];
//     imageIndexNumber++;

// }