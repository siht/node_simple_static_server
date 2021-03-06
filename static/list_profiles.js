
const listProfiles = async () => {
    const response = await fetch(API_URL + '/profiles');
    const json_response = await response.json();
    let htmlIndex = "";
    let htmlImages = "";
    json_response.forEach((element, index) => {
        activeList = !index ? `class="active"` : "";
        activeImage = !index ? `class="carousel-item active"` : `class="carousel-item"`;
        const templateIndex = `<li ${activeList} data-target="#myCarousel" data-slide-to="${index}"></li>`;
        const templateImages = `<div ${activeImage}><img src="${element.imagen}" alt="${element.titulo}"></div>`;
        htmlIndex += templateIndex;
        htmlImages += templateImages;
    });
    let carrouselInner = document.getElementsByClassName("carousel-inner")[0];
    let imageIndicator = document.getElementsByClassName("carousel-indicators")[0];
    carrouselInner.innerHTML = htmlImages;
    imageIndicator.innerHTML = htmlIndex;
}

window.onload = async () => {
    await listProfiles();
}
