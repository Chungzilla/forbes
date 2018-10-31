

let loadText = () => {
    //Creates request
    let xhr = new XMLHttpRequest();
    // console.log(xhr)
    //open - type, url, async?
    xhr.open('GET', 'http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=9CIHM7uD1nGkFdHLsNqeGUsOZi4JZUJk&limit=50', true);

    // console.log(xhr.response);



    xhr.onload = () => {
        console.log('READYSTATE: ', xhr.readyState);
        if (this.status == 200){
            // console.log(this.response);
            let gifs = JSON.parse(this.responseText);
            console.log(gifs);
        }
    }
 

    xhr.error = () => {
        console.log('Request Error..');
    }


    // xhr.onreadystatechange = () => {
    //     console.log('READYSTATE: ', xhr.readyState)
    //     if (this.readyState == 4 && this.status == 200){
    //         // console.log(this.responseText);
    //     }
    // }

    //Sending Giphy response to browser
    xhr.send(); 


}

document.getElementById('button').addEventListener('click', loadText)

// readyState Values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

//HTTP Statuses
// 200 = OK 
// 400 = Forbidden
// 403 Not Found

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
