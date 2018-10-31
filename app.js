//Create template function to display images

let gifGallery = document.getElementById('gallery')
let displayTitle = document.getElementById('title')
let displayStill = document.createElement('img')
let displayGif = document.createElement('img')

let gifWrap = document.createElement('div')
gifWrap.id = 'gifWrap'

gifWrap.appendChild(displayTitle, displayStill, displayGif)

gifGallery.append(gifWrap);

let setup = (i) => {
    displayGif.src = movingGif;
}