const images = document.querySelectorAll('.gallery-img');
const lightImages = document.querySelector('.add-image');
const lightContainer = document.querySelector('.light-image');
const hamburguer1 = document.querySelector('.hamburguer');

// console.log(images);
// console.log(lightImages);
// console.log(lightContainer);

images.forEach(image =>{
    image.addEventListener('click', ()=>{
        startingImage(image.getAttribute('src'));
        // console.log(image.getAttribute('src'));
        // alert("Starting image...");
    });
});

lightContainer.addEventListener('click', (e)=>{
    if(e.target !== lightImages){
        lightContainer.classList.toggle('show');
        lightImages.classList.toggle('show-image');
        hamburguer1.style.opacity = '1';
    }
    // console.log(e.target);
}); 

const startingImage = (image)=>{
    lightImages.src = image;
    lightContainer.classList.toggle('show');
    lightImages.classList.toggle('show-image'); 
    hamburguer1.style.opacity = '0';
}