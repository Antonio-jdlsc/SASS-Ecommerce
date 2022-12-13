// Cambiando la CANTIDAD DE PRODUCTOS seleccionada por el usuario

let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');
let userInputValue = 0;



minusBtn.addEventListener('click', () =>{
    userInputValue --;
    if(userInputValue <= 0){
        userInputValue = 0;
    }
    userInput.value = userInputValue;
    console.log(userInputValue);
});

plusBtn.addEventListener('click', () =>{
    userInputValue ++;
    userInput.value = userInputValue;
    console.log(userInputValue);
})


// Añadiendo la cantidad de productos al CART MODAL

const addToCartBtn = document.querySelector('.details__button');
const productContainer = document.querySelector('.cart-modal__checkout-container');
let cartNotification = document.querySelector('.header__cart--notification');
let accumulator = parseInt(cartNotification.innerText);


addToCartBtn.addEventListener('click', ()=>{

    accumulator = accumulator + userInputValue;

    cartNotification.style.display = 'block';
    cartNotification.innerText = accumulator;
    productModal();
    
});


// Mostrando el CART MODAL a través de un click event

const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');


cartIconBtn.addEventListener('click', ()=>{
    cartModal.classList.toggle('show');

    if(accumulator == 0){
        productContainer.innerHTML = '<p class = cart-empty> Your cart is empty </p>';
    } else{
        productModal();
    }
});


// Borrando cantidad de productos en CART MODAL

function deleteProduct(){
    const deleteIconBtn = document.querySelector('.cart-modal__delete');

    deleteIconBtn.addEventListener('click', ()=>{
        productContainer.innerHTML = '<p class = cart-empty> Your cart is empty </p>';
        accumulator = 0;
        cartNotification.innerText = accumulator;
    });
}

// Cambiando imágenes de la galleria SIN MODAL

const imageContainer = document.querySelector('.gallery__image-container');
const previusGalleryBtn = document.querySelector('.gallery__previus');
const nextGalleryBtn = document.querySelector('.gallery__next');
let imgIndex = 1;



nextGalleryBtn.addEventListener('click', ()=>{
    console.log('Le diste click aquí')
    nextImg(imageContainer);
});

previusGalleryBtn.addEventListener('click', ()=>{
    prevImg(imageContainer);
});


// Monstrando y cerrando GALLERY MODAL en vista desktop

const modalGallery = document.querySelector('.modal-gallery__background');
const modalClose = document.querySelector('.modal-gallery__close');

imageContainer.addEventListener('click', () =>{
    modalGallery.style.display = 'grid';
})

modalClose.addEventListener('click', ()=>{
    modalGallery.style.display = 'none'
})


// Cambiando las imágenes del MODAL GALLERY a través de la galeria de thumnails

let galleryModalThumnails = document.querySelectorAll('.modal-gallery__thumnail');
const modalImageContainer = document.querySelector('.modal-gallery__image-container');
galleryModalThumnails = [...galleryModalThumnails];

galleryModalThumnails.forEach(image =>{
    image.addEventListener('click', event =>{
        console.log(event.target.id.slice(-1));
        modalImageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id.slice(-1)}.jpg')`
    })
})


// Cambiando imágenes de la galeria a través de los thumnails

let galleryThumnails = document.querySelectorAll('.gallery__thumnail');
galleryThumnails = [...galleryThumnails];

galleryThumnails.forEach(image => {
    image.addEventListener('click', event =>{
        console.log(event.target.id)
        imageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id}.jpg')`

    })
})

// Cambiando imagen de MODAL GALLERY a través de icónos

const previusModalIcon = document.querySelector('.modal-gallery__previus');
const nextModalIcon = document.querySelector('.modal-gallery__next');

previusModalIcon.addEventListener('click', ()=>{
    prevImg(modalImageContainer);
});

nextGalleryBtn.addEventListener('click', ()=>{
    nextImg(modalImageContainer);
});

// Mostrando el MODAL NAVBAR 

const modalIconMenu = document.querySelector('.header__menu');
const modalMenu = document.querySelector('.modal-navbar');


modalIconMenu.addEventListener('click', ()=>{
    console.log('Diste click')
});


// FUNCIONES 

function productModal (){
    productContainer.innerHTML = `
        <div class="cart-modal__checkout-container">
        <div class="cart-modal__details-container">
        <img class="cart-modal__image" src="./images/image-product-1-thumbnail.jpg" alt="">
        <div>
            <p class="cart-modal__product">Autumn Limited Edition...</p>
            <p class="cart-modal__price">$125 x3 <span>$375.00</span> </p>
        </div>
        <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="delete">
        </div>
        <button class="cart-modal__checkout" >Checkout</button>
    </div>`
    deleteProduct();
    let priceModal = document.querySelector('.cart-modal__price');
     priceModal.innerHTML = `$125 x ${accumulator}  <span>${125 * accumulator}</span>`;
}

function nextImg(Imagecontainer){
    if(imgIndex == 4){
        imgIndex = 1;
    } else{
        imgIndex ++;
    }
    Imagecontainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`
}

function prevImg(Imagecontainer){
    if(imgIndex == 1){
        imgIndex = 4;
    } else{
        imgIndex --;
    }
    Imagecontainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`
}