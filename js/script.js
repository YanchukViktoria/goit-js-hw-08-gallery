const galleryItems = [
    {
        preview:
        './img/warmWhite.jpg',
        original:
        './img/warmWhite.jpg',
        description: 'Hokkaido Flower',
    },
    {
        preview:
        './img/GreyWhite.jpg',
        original:
        './img/GreyWhite.jpg',
        description: 'Container Haulage Freight',
    },
    {
        preview:
        './img/orangeWhite.jpg',
        original:
        './img/orangeWhite.jpg',
        description: 'Aerial Beach View',
    },
    {
        preview:
        './img/whitePink.jpg',
        original:
        './img/whitePink.jpg',
        description: 'Flower Blooms',
    },
    {
        preview:
        './img/pastelPink.jpg',
        original:
        './img/pastelPink.jpg',
        description: 'Alpine Mountains',
    },
    {
        preview:
        './img/warmPink.jpg',
        original:
        './img/warmPink.jpg',
        description: 'Mountain Lake Sailing',
    },
    {
        preview:
        './img/lightPink.jpg',
        original:
        './img/lightPink.jpg',
        description: 'Alpine Spring Meadows',
    },
    {
        preview:
        './img/pinkBlue.jpg',
        original:
        './img/pinkBlue.jpg',
        description: 'Nature Landscape',
    },
    {
        preview:
        './img/blue.jpg',
        original:
        './img/blue.jpg',
        description: 'Lighthouse Coast Sea',
    },
    {
        preview:
        './img/dark.jpg',
        original:
        './img/dark.jpg',
        description: 'Lighthouse Coast Sea',
    },
];

let galleryList = document.querySelectorAll(".gallery-list li img");
const modalBtn = document.querySelector(".modal-btn");

document.addEventListener("click", onImgClick);

galleryItems.forEach((el, ind) => {
    let imgEl = galleryList[ind];
    imgEl.setAttribute("src", el.preview);
    imgEl.setAttribute("data-source", el.original);
});

function onImgClick(e) {
    if (e.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(`<img class="created-img" src="${e.target.src}" alt="${e.target.alt}">`);
    instance.show();
    modalBtn.classList.add("visible");

    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape") {
            instance.close();
            modalBtn.classList.remove("visible");
        }
    });

    document.addEventListener("click", (e) => {
        if (e.target.nodeName == "DIV") {
            modalBtn.classList.remove("visible");
        }
    });

    modalBtn.addEventListener("click", () =>{
        instance.close();
    });
}

/* < > */

document.addEventListener("keydown", (e) => {
    if (!["ArrowRight", "ArrowLeft"].includes(e.code)) return;

    let createdImg = document.querySelector(".created-img");

    let currentInd = galleryItems.findIndex(el =>
        createdImg.src.includes(el.preview.slice(1, -1))
    );

    let newInd = e.code === "ArrowRight" ? currentInd + 1 : currentInd - 1;

    if (newInd >= 0 && newInd < galleryItems.length) {
        createdImg.src = galleryItems[newInd].preview;
    }
});
