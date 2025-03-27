const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjZhZDE2MzYyMTJkZGFhY2ZmNzNjZjU4NGQ4NTM1NCIsIm5iZiI6MTc0MjUxNzA1Ni43ODksInN1YiI6IjY3ZGNiMzQwZDY4MTA0NTI3OTY5NmI4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GzAs4bTNIf_Z-1uYfH_93BUt_iKl96320jDSQpKjUjQ'
    }
}



function toggleLoading() {
    let loader = document.querySelector(".loader");
    loader.style.display = loader.style.display == "none" ? "block" : "none";
}

window.addEventListener("scroll", function(){
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else{
        navbar.classList.remove("scrolled");
    }
});
