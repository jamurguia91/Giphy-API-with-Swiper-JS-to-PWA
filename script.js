// initialize Swiper
const swiper = new Swiper(".swiper", {});

// VARIABLES
// API Key
const API_KEY = 'vRgpxNRNKxyIlc1sk9lEifd6kDJZDK57';

// Go fetch Giphy API data
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=50`)
      .then( response => response.json() )
      .then( gifs => {
      
        // Check Check         
        //console.log(gifs.data);
        //console.log(gifs.data[0].images.downsized.url);
      
      // Get container for data
      const videoContainer = document.querySelector('.swiper-wrapper');         
      
       // Loop through the array of data
      gifs.data.forEach( gif => {
        
          // template 
          const template  = `
            <div class="swiper-slide">
              <img src="${gif.images.downsized.url}" />
            </div>
          `;
        
          // append
          videoContainer.insertAdjacentHTML("afterbegin", template);
        
      });
      
    });