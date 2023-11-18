// изменение ширины экрана
window.addEventListener('resize', function (e) {
    if (window.innerWidth > 767) {
        closeMenu();
    }

    if (window.innerWidth > 576) {
        initImageHeight();
    }
});

// бургер меню
let openMenuBtn = document.querySelector('.burger-btn');
let menuPopup = document.querySelector('.menu-popup');
let body = document.body;

openMenuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    menuPopup.classList.toggle('active');
    body.classList.toggle('lock');
})

let closeMenuBtn = document.querySelector('.close-btn');
closeMenuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    closeMenu();
});

function closeMenu() {
    menuPopup.classList.remove('active');
    body.classList.remove('lock');
}

// картинка в блоке about-us
let image = document.querySelector('.about-us__image');
let aboutUs = document.querySelector('.about-us');

function initImageHeight() {
    let step = 0.06;
    let coeff = 130;

    if (window.innerWidth < 1440) {
        coeff -= Math.abs(1440 - window.innerWidth) * step;
    }

    let diff = image.getBoundingClientRect().top - aboutUs.getBoundingClientRect().top;
    let height = aboutUs.clientHeight - diff + coeff;

    image.style.height = height + 'px';
}

document.addEventListener('onload', initImageHeight());

// slider
new Swiper('.slider-slider-block', {
    navigation: {
        nextEl: '.slider-slider-block__btn_next',
        prevEl: '.slider-slider-block__btn_prev',
    },
    pagination: {
        el: '.slider-slider-block__pagination',
        clickable: true,
    },

    loop: true,
    spaceBetween: 20,

    breakpoints: {
        767: {

        },
    }
});

// переход к рвзделам страницы
const menuLinks = document.querySelectorAll('.header__nav a[data-goto]');

menuLinks.forEach(l => l.addEventListener('click', function (e) {
    e.preventDefault();

    let menuLink = e.target;

    if (menuLink.dataset.goto && document.querySelector(`.${menuLink.dataset.goto}`)) {
        let gotoBlock = document.querySelector(`.${menuLink.dataset.goto}`);
        let gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

        window.scrollTo({
            behavior: "smooth",
            top: gotoBlockValue,
        });

        if (menuPopup.classList.contains('active')) {
            closeMenu();
        }
    }
}));

// read more
let readMoreBtn = document.querySelector('.marketplace__link');

function ShowMore(n = 2) {
    let disabledArticles = document.querySelectorAll('.marketplace__text-column.disabled');

    for (let i = 0; i < n; i++) {
        if (disabledArticles[i]) {
            disabledArticles[i].classList.remove('disabled');
        }
    }
    
    disabledArticles = document.querySelectorAll('.marketplace__text-column.disabled');
    
    if(disabledArticles.length==0) {
        readMoreBtn.classList.add('disabled')
    }
}

ShowMore(2);

readMoreBtn.addEventListener('click', function(e) {
    e.preventDefault();
    ShowMore(2);
});

// document.addEventListener('onload', ShowMore);

// попап формы
let form = document.querySelector('.contact__form').cloneNode(1);
let formPopupInner = document.querySelector('.form-popup__inner');
formPopupInner.appendChild(form);

let openFormPopupBtn = document.querySelector('.header__btn');
let formPopup = document.querySelector('.form-popup');

openFormPopupBtn.addEventListener('click', function (e) {
    e.preventDefault();
    formPopup.classList.add('active');
    let scrollWidth = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    setPadding(scrollWidth);
    body.classList.add('lock');
});

document.addEventListener('click', function (e) {
    if (!e.target.closest('.header__btn')
        && !e.target.closest('.form-popup__inner')
        && formPopup.classList.contains('active')
        || e.target.closest('.form-popup__close-btn')) {
        formPopup.classList.remove('active');
        setPadding('0px');
        body.classList.remove('lock');
    }
});

function setPadding(padding) {
    document.querySelectorAll('.lock-padding')
        .forEach(e => e.style.paddingRight = padding);
}

let contactForms = document.querySelectorAll('.form-contact');
contactForms.forEach(f => f.addEventListener('submit', SendForm));

// карта
// let map = document.querySelector('.map');
// let latitude = map.dataset.latitude;
// let longitude =map.dataset.longitude;
// let zoom = map.dataset.zoom;
// let center = [latitude, longitude];

// function initMap() {
//     let map = new ymaps.Map('map', {
//         center: center,
//         zoom: zoom
//     });

//     map.controls.remove('geolocationControl'); // удаляем геолокацию
//     map.controls.remove('searchControl'); // удаляем поиск
//     map.controls.remove('trafficControl'); // удаляем контроль трафика
//     map.controls.remove('typeSelector'); // удаляем тип
//     map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
//     map.controls.remove('zoomControl'); // удаляем контрол зуммирования
//     map.controls.remove('rulerControl'); // удаляем контрол правил
//     // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
// }

// ymaps.ready(initMap);

// попап политика конфиденциальности
let privacyOpenBtn = document.querySelector('.privacy-policy-btn');
let policyPopup = document.querySelector('.policy-popup');

privacyOpenBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (document.querySelector('.policy-popup__inner').childNodes.length > 5) {
        policyPopup.classList.add('active');
        let scrollWidth = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
        setPadding(scrollWidth);
        body.classList.add('lock');
    }
});

let privacyCloseBtn = document.querySelector('.policy-popup__close-btn');

privacyCloseBtn.addEventListener('click', function (e) {
    e.preventDefault();

    policyPopup.classList.remove('active');
    setPadding('0px');
    body.classList.remove('lock');
});