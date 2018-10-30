require('dotenv').config()

// alert("I'm working!!!")

let xhr = new XMLHttpRequest();

xhr.onload = () =>{
    if (xhr.status >= 200 && xhr.status < 300){
        console.log('success!, xhr');
    } else {
        console.log('This request failed.')
    }
    console.log('This always runs...')
}

xhr.open('GET', 'https://api.giphy.com/v1/gifs/cats&api_key=GIPHY2_API&limit=50')
xhr.send();

let imagesOnPage = new Array();
let currentPage = 1;
let imagesPerPage = 10;
const events = 
Array.prototype.slice.call(document.querySelectorAll(".images"));

// console.log(events);

const totalPages = () => Math.ceil(events.length / imagesPerPage);

// console.log(totalPages.length)

let previousPage = () => {currentPage -= 1; createPage()}
let nextPage = () => {currentPage += 1; createPage()}



//Dispaly list on page
const createPage = () => {
    let firstImage = ((currentPage - 1)) * imagesPerPage;
    let lastImage = firstImage + imagesPerPage;
    for (i = 0; i < imagesOnPage.length; i++){
        imagesOnPage[i].classList.add("hidden")
            //Hides other images
    }
    imagesOnPage = events.slice(firstImage, lastImage);
    showImages();
    check();
}

const showImages = () => {
    for (i = 0; i < imagesOnPage.length; i++){
        imagesOnPage[i].classList.remove("hidden")
    }
}

const check = () => {
    document.getElementById("next").disabled = currentPage == numOfPages ? true : false;
    document.getElementById("previous").disabled = currentPage == 1 ? true : false;

  }

const start = () => createPage();

let numOfPages = totalPages(); 
window.onload = start;
