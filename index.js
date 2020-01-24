
const baseEndPoint = `https://api.giphy.com/v1/gifs/search?api_key=UZ4y4xSpAF966j4NDtajNMawaRlOKed8`
//const proxy = 'https://cors-anywhere.herokuapp.com/';
const submitBtn = document.querySelector('#button');
const searchBox = document.querySelector('#search');
const gifsGrid = document.querySelector('.giphy');

async function fetchGiphy(val) {
    const res = await fetch(`${baseEndPoint}&q=${val}&limit=25&offset=0&rating=G&lang=en`);
    const data = await res.json();
    return data;
}

function displaygiphy(gifs){
    const html = gifs.map(
        gif => `<div class="recipe">
          <h2>${gif.title}</h2>
          <img src="${gif.images.downsized_large.url}" alt="${gif.title}"/>
        </div>`
      );
      gifsGrid.innerHTML = html.join('');
}

async function submitHandler() {
   const retData =  await fetchGiphy(searchBox.value);
   console.log(retData.data);
    displaygiphy(retData.data);
}

submitBtn.addEventListener('click', submitHandler);