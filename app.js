//Create template function to display images

let gifGallery = document.getElementById('gallery')
let displayTitle = document.getElementById('title')
let displayStill = document.createElement('img')
let displayGif = document.createElement('img')

let gifWrap = document.createElement('div')
gifWrap.id = 'gifWrap'

gifWrap.append(displayTitle, displayStill, displayGif);

gifGallery.append(gifWrap);
