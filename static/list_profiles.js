
const listProfiles = async () => {
    const response = await fetch('http://' + API_URL + '/profiles');
    const json_response = await response.json();
    let htmlIndex = "";
    let htmlImages = "";
    json_response.forEach((element, index) => {
        activeList = !index ? `class="active"` : "";
        activeImage = !index ? `class="item active"` : `class="item"`;
        const templateIndex = `<li ${activeList} data-target="#myCarousel" data-slide-to="${index}"></li>`;
        const templateImages = `<div ${activeImage}><img src="${element.imagen}" alt="${element.titulo}"></div>`;
        htmlIndex += templateIndex;
        htmlImages += templateImages;
    });
    let imageIndicator = document.getElementsByClassName("carousel-indicators")[0];
    imageIndicator.innerHTML = htmlIndex;
    let carrouselInner = document.getElementsByClassName("carousel-inner")[0];
    carrouselInner.innerHTML = htmlImages;
}

window.addEventListener("load", listProfiles);