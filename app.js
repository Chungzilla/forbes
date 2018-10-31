

axios.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=9CIHM7uD1nGkFdHLsNqeGUsOZi4JZUJk&limit=50").then((response) => {
    console.log(response.data);
    let data = response.data
}
);

let loadText = () => {
    let xhr = new XMLHttpRequest();
    console.log(xhr)
    //open - type, url, async?
    xhr.open('GET', 'http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=9CIHM7uD1nGkFdHLsNqeGUsOZi4JZUJk&limit=50', true);

    xhr.onload = () => {
        if (this.status == 200){
            console.log(tis.response);
        }
    }  
        xhr.send(); 
}



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
