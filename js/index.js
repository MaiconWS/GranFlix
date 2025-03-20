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