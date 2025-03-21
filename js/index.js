document.addEventListener("DOMContentLoaded", async () => {
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
})

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