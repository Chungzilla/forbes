class Gif{
    constructor(title, stillGif, movingGif){
        this.title = title;
        this.stillGif = stillGif;
        this.movingGif = movingGif;
    }
}

let showGifs = () => {
    //Creates request
    let xhr = new XMLHttpRequest();
    console.log(xhr)
    //open - (method, url, async?)
    xhr.open('GET', 'http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=kyQhfV4Bysw7t6wFTbgjOVEusLvwmGjV&limit=50', true);

    console.log(xhr.status);

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

    xhr.onload = () => {
        console.log('READYSTATE: ', xhr.readyState);
        let gifObject = JSON.parse(xhr.response).data;
            console.log(gifObject);
        let numOfGifs = gifObject.length;
        // console.log(numOfGifs);
        // if (this.status == 200){
            // console.log(gifObject[0])

            gifObject.forEach(function(gif){
                let title = gif.title;
                console.log(title);
                let stillGif = gif.images.original_still.url;
                let movingGif = gif.images.original.url; 
                console.log(movingGif);
                
                //This will dynamically create elements needed to render the images

                let gifGallery = document.getElementById('gallery')
                let displayTitle = document.getElementById('title')
                let displayGif = document.createElement('img')
                let displayStill = document.createElement('img')
                //Adding class to hide images by default
                // displayStill.classList.add("images", "hidden")

                // Displays only the first 10 images
                let x = 1
                while (x < 51) {
                    displayStill.id = x;
                    console.log(x);
                    x++;
                }
                // // let i = 1
                // // do {
                // //     displayStill.id = i;
                // //     i++;
                // // }
                // // while (i < 51);




                let gifWrap = document.createElement('div')
                gifWrap.id = 'gifWrap'

                gifWrap.append(displayStill);

                gifGallery.append(gifWrap);

                // displayTitle.innerHTML = title;
                displayStill.src = stillGif;
                // displayGif.src = movingGif;
                
            });

            
                // for (let x in gif){
                //     let title = x.title;
                //     console.log(title);
                // }
                
                // let stillGif = data.images.original_still.url;
                // let movingGif = data.images.original.url;
        // }
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
const start = () => showGifs();

window.onload = start;







