// проверка на мобильное устройство
let isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

// удалить пустые теги p
$('p:empty').remove();

// изменение ширины экрана
window.addEventListener('resize', function (e) {
    if (window.innerWidth > 1240) {
        burgerBtn.classList.remove('active');
        menuPopup.classList.remove('active');
        body.classList.remove('lock');
    }
});

// бургер меню
let burgerBtn = document.querySelector('.burger-btn');
let menuPopup = document.querySelector('.menu-popup');
let body = document.body;

burgerBtn.addEventListener('click', function (e) {
    e.preventDefault();

    burgerBtn.classList.toggle('active');
    menuPopup.classList.toggle('active');
    body.classList.toggle('lock');
})

// кнопка на верх
function GoUp() {
    window.scrollTo({
        behavior: "smooth",
        top: 0,
    });
}

document.querySelector('.up-btn__circle')
    .addEventListener('click', GoUp);

document.querySelector('.up-btn__text')
    .addEventListener('click', GoUp);

// reasons
let reasonItems = document.querySelectorAll('.reasons__item');

for (let i = 0; i < reasonItems.length; i++) {
    let circles = reasonItems[i].querySelector('.reasons__circles');

    for (let j = 0; j < i + 1; j++) {
        circles.insertAdjacentHTML('beforeend', '<span class="reasons__circle"></span>');
    }
}

// trust-slider
new Swiper('.trust-slider', {
    navigation: {
        nextEl: '.trust-slider__btn-next',
        prevEl: '.trust-slider__btn-prev',
    },
    pagination: {
        el: '.trust-slider__dots',
        clickable: true,
    },

    spaceBetween: 32,
    loop: true,

    breakpoints: {
        767: {

        },
    }
});

// events-slider
new Swiper('.events-slider', {
    navigation: {
        nextEl: '.events-slider__btn-next',
        prevEl: '.events-slider__btn-prev',
    },

    loop: true,
});

// why-we
let whyWeItems = document.querySelectorAll('.item-why-we');

for (let i = 0; i < whyWeItems.length; i++) {
    let circles = whyWeItems[i].querySelector('.item-why-we__circles');

    for (let j = 0; j < i + 1; j++) {
        circles.insertAdjacentHTML('beforeend', '<span class="item-why-we__circle"></span>');
    }
}

// faq
$('.faq__question').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).next().slideToggle(300);
})

// попап обратной связи
let requestPopup = document.querySelector('.request-popup');

document.querySelectorAll('.request-popup-btn')
    .forEach(btn => btn.addEventListener('click', openRequestPopup));

function openRequestPopup(e) {
    e.preventDefault();

    requestPopup.classList.add('active');
    let scrollWidth = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    setPadding(scrollWidth);
    body.classList.add('lock');
}

let requestPopupCloseBtn = document.querySelector('.request-popup__close-btn');

if (requestPopupCloseBtn) {
    requestPopupCloseBtn.addEventListener('click', function (e) {
        e.preventDefault();

        requestPopup.classList.remove('active');
        setPadding('0px');
        if(!menuPopup.classList.contains('active'))
            body.classList.remove('lock');
    });
}

function setPadding(padding) {
    document.querySelectorAll('.lock-padding')
        .forEach(e => e.style.paddingRight = padding);
}

// отправка формы
let phoneInputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(phoneInputs);

let requestForms = document.querySelectorAll('.request__form');

requestForms.forEach(f=>f.addEventListener('submit', formSend));

function validateCheckbox(form) {
    let checkbox = form.querySelector('input[type="checkbox"]');
    return checkbox.checked;
}

// фильтры в моделях
$('.sidebar-models__filter-items').slideUp(0);

$('.sidebar-models-open-btn').click(function (e) {
    e.preventDefault();
    $(this).next().slideToggle(200);
    $(this).toggleClass('active');
});

// табы в модели
let modelTabs = document.querySelectorAll('.model-photos__tab');
let modelImages = document.querySelectorAll('.model-photos__items');

if (modelTabs.length > 0 && modelImages.length > 0) {
    modelTabs[0].classList.add('active');
    modelImages[0].classList.add('active');

    modelTabs.forEach(t => t.
        addEventListener('click', function (e) {
            e.preventDefault();
            modelTabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            let index = e.target.dataset.tab;
            let images = document.querySelector(`[data-images="${index}"]`)
            if (images) {
                modelImages.forEach(i => i.classList.remove('active'));
                images.classList.add('active');
            }
        }));
}

// light-gallery
$('.light-gallery__btn').on('click', function(e) {
    e.preventDefault();
    $('.light-gallery__item:first-child').trigger('click');
 });
