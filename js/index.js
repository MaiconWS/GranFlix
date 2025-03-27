document.addEventListener("DOMContentLoaded", async () => {
    await banner();
    await trendingMovies();
    await toRateMovies();
    toggleLoading();

    setTimeout(() => {
        toggleLoading();
    }, 2000);

    let trendingContainer = document.querySelector("#trendingMovies");
    trendingContainer.innerHTML = "";
    for (let i = 1; i <= 20; i++) {
        trendingContainer.innerHTML += `<a href='detalhes.html?id=${i}'>
                    <img src="img/posters/${i}.jpg" alt="${i}">
                </a>`;
    }
});


async function banner() {
    let trendings =[];
    await fetch('https://api.themoviedb.org/3/trending/all/week?language=pt-BR', options)
    .then(res => res.json())
    .then(res => res.results.forEach(movie => {
        trendings.push(movie);
    }))
    .catch(err => console.error(err));
    let carousel = document.querySelector('.carousel-inner');
    carousel.innerHTML = '';
    for (let i = 0; i < trendings.length; i++) {
        let active = i == 0 ? 'active' : '';
        carousel.innerHTML += 
            `<div class="carousel-item ${active}" data-bs-interval="10000">
                <a href='detalhes.html?id=${trendings[i].id}&media=${trendings[i].media_type}'>
                    <img src="https://image.tmdb.org/t/p/original/${trendings[i].backdrop_path}" class="d-block w-100" alt="">
                    <div class="carousel-caption d-md-block">
                        <h3>${trendings[i].title ?? trendings[i].name}</h3>
                        <p class="d-none d-md-block">${trendings[i].overview}</p>
                    </div>
                </a>
            </div>`;
    }
}

async function trendingMovies() {
    let trendings = [];
    await fetch('https://api.themoviedb.org/3/trending/movie/day?language=pt-BR', options)
        .then(res => res.json())
        .then(res => res.results.forEach(movie => {
            trendings.push(movie);
        }))
        .catch(err => console.error(err));

    let trendingContainer = document.querySelector('#trendingMovies');
    trendingContainer.innerHTML = '';
    for (let i = 0; i < trendings.length; i++) {
        trendingContainer.innerHTML +=
            `<a href='detalhes.html?id=${trendings[i].id}&media=${trendings[i].media_type}'>
                <img src="https://image.tmdb.org/t/p/original/${trendings[i].poster_path}" alt="">
            </a>`;
    }
}

async function topRatedMovies() {
    let toprated = [];
    await fetch('https://api.themoviedb.org/3/movie/top_rated?language=pt-BR', options)
        .then(res => res.json())
        .then(res => res.results.forEach(movie => {
            toprated.push(movie);
        }))
        .catch(err => console.error(err));

    //console.log(toprated);

    let topRatedContainer = document.querySelector('#topRatedMovies');
    topRatedContainer.innerHTML = '';
    for (let i = 0; i < toprated.length; i++) {
        topRatedContainer.innerHTML +=
            `<a href='detalhes.html?id=${toprated[i].id}&media=movie'>
                <img src="https://image.tmdb.org/t/p/original/${toprated[i].poster_path}" alt="">
            </a>`;
    }
}


const containerTrendingMovies = document.getElementById("trendingMovies");

let scrollIntervalTrendingMovies;
let scrollDirectionTrendingMovies = 0;

containerTrendingMovies.addEventListener("mousemove", (e) => {
    const boundingRect = containerTrendingMovies.getBoundingClientRect();
    const mouseX = e.clientX;

    const threshold = 200;

    if (mouseX < boundingRect.left + threshold) {
        scrollDirectionTrendingMovies = -1;
        containerTrendingMovies.style.cusor = "url('/img/arrow-left.png'),auto";
    } else if (mouseX > boundingRect.right - threshold){
        scrollDirectionTrendingMovies = 1;
    } else {
        scrollDirectionTrendingMovies = 0;
        containerTrendingMovies.style.cursor = "pointer";
    }
});

containerTrendingMovies.addEventListener("mouseleave", () => {
    scrollDirectionTrendingMovies = 0;
    containerTrendingMovies.style.cursor = "default";
});

function autoScrollTrendingMovies() {
    if(scrollDirectionTrendingMovies !== 0) {
        containerTrendingMovies.scrollLeft += scrollDirectionTrendingMovies * 6;
    }
}

scrollIntervalTrendingMovies =setInterval(autoScrollTrendingMovies,16);