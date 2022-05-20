// initialize Swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  effect: 'coverflow',
  centeredSlides: true,
  slidesPerView: '3',
});

// VARIABLES
// API Key
const API_KEY = 'PeHq7nutMojzQ3zpHHf9eTtroz6ivN2j';

// Go fetch Giphy API data
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=kermit&limit=25&rating=pg`)
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