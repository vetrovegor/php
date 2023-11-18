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

// для попапов
let wrapper = document.querySelector('.wrapper');

const setPadding = (padding) => {
    wrapper.style.paddingRight = padding + 'px';
}

document.addEventListener("DOMContentLoaded", function () {
    const currentProductColor = document.querySelector('.product-card__color.active');

    if (currentProductColor) {
        setProductCurrentColor(currentProductColor.dataset.color);
    }
})

// изменение ширины экрана
window.addEventListener('resize', function (e) {
    if (window.innerWidth > 992 && burgerBtn && menuPopup) {
        menuPopup.classList.remove('active');
        body.classList.remove('lock');
    }
});

// установка цвета
const setProductCurrentColor = (color) => {
    if (productCurrentColor) {
        productCurrentColor.innerHTML = color;
    }
}

const closeActiveFilter = (currentFilter) => {
    const activeFilter = document.querySelector('.filter.active');
    if (activeFilter && activeFilter !== currentFilter) {
        activeFilter.classList.remove('active');
    }
}

// открытие попапа
const openPopup = (popup) => {
    popup.classList.add('active');
    let scrollWidth = window.innerWidth - wrapper.offsetWidth;
    setPadding(scrollWidth);
    body.classList.add('lock');
}

// закрытие активного попапа
const closeActivePopup = () => {
    const activePopup = document.querySelector('.popup.active');

    if (activePopup) {
        activePopup.classList.remove('active');
        setPadding(0);
        body.classList.remove('lock');
    }
}

// событие клика
document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.closest('.burger-btn')) {
        e.preventDefault();

        menuPopup.classList.toggle('active');
        body.classList.toggle('lock');
    }

    if (targetEl.closest('.menu-popup__close-btn')) {
        openPopup(menuPopup);
    }

    if (targetEl.closest('.search-btn')
        && !targetEl.closest('.search-popup__search-btn')) {
        let input = targetEl.closest('.search-btn').nextElementSibling;
        let inputValue = input.value;
        searchPopup.classList.add("active");
        searchPopupInner.classList.add("active");
        setPadding(0);
        body.classList.add('lock');
        searchPopupInput.value = inputValue;
    }

    if (targetEl.closest('.search-popup__close-btn')
        || targetEl.closest('.search-popup__back-btn')
        || targetEl.closest('.search-popup') && !targetEl.closest('.search-popup__inner')) {
        searchPopup.classList.remove("active");
        searchPopupInner.classList.remove("active");
        body.classList.remove('lock');

        if (targetEl.closest('.search-popup__close-btn')
            && window.innerWidth < 993) {
            menuPopup.classList.remove('active');
            body.classList.remove('lock');
        }
    }

    if (targetEl.closest('.product-card__color')) {
        const activeColor = document.querySelector('.product-card__color.active');
        activeColor.classList.remove('active');
        const targetColor = targetEl.closest('.product-card__color');
        targetColor.classList.add('active');
        setProductCurrentColor(targetColor.dataset.color);
    }

    if (targetEl.closest('.product-card__desc-btn')) {
        productDescBtn.classList.toggle('active');
        productDesc.classList.toggle('active');
    }

    if (targetEl.closest('.order__products-btn')) {
        orderProductsBtn.classList.toggle('active');
        orderProducts.classList.toggle('active');
    }

    if (targetEl.closest('.header__btn')
        || targetEl.closest('.menu-popup__btn')
        || targetEl.closest('.advantages__sign-btn')) {
        openPopup(consultingPopup);
    }

    if (targetEl.closest('.product-card__add-btn')) {
        openPopup(addPopup);
    }

    if (targetEl.closest('.product-card__size-btn_table')) {
        openPopup(sizesPopup);
    }

    if (targetEl.closest('.wholesale__register')) {
        openPopup(registerPopup);
    }

    if (targetEl.closest('.wholesale__remind')) {
        openPopup(remindPopup);
    }

    if (targetEl.closest('.product-card__size-btn_how')) {
        openPopup(howPopup);
    }

    if (targetEl.closest('.dignities__link')) {
        const dignitieParent = targetEl.closest('.dignities__item');
        dignitiesPopup.querySelector('.popup__title').innerHTML = dignitieParent.querySelector('.dignities__caption').innerHTML;
        dignitiesPopup.querySelector('.dignities__text').innerHTML = dignitieParent.querySelector('.dignities__text').innerHTML;
        openPopup(dignitiesPopup);
    }

    if (targetEl.closest('.reviews__more-link')) {
        const reviewParent = targetEl.closest('.reviews__item');
        reviewsPopup.querySelector('.reviews__name').innerHTML = reviewParent.querySelector('.reviews__name').innerHTML;
        reviewsPopup.querySelector('.reviews__city').innerHTML = reviewParent.querySelector('.reviews__city').innerHTML;
        reviewsPopup.querySelector('.reviews__review').innerHTML = reviewParent.querySelector('.reviews__review p').innerHTML;
        reviewsPopup.querySelector('.reviews__image img').setAttribute('src', reviewParent.querySelector('.reviews__image img').getAttribute('src'));
        openPopup(reviewsPopup);
    }

    if (targetEl.closest('.how__btn')) {
        sizesPopup.classList.add('active');
    }

    if (targetEl.closest('.sizes-popup')
        && !targetEl.closest('.popup__inner')
        && howPopup.classList.contains('active')
        || targetEl.closest('.sizes-popup__close-btn')) {
        sizesPopup.classList.remove('active');
        return;
    }

    if (targetEl.closest('.close-popup')
        || targetEl.closest('.popup')
        && !targetEl.closest('.popup__inner')) {
        closeActivePopup();
    }

    if (targetEl.closest('.menu-popup__close-btn')) {
        menuPopup.classList.remove('active');
        body.classList.remove('lock');
    }

    if (targetEl.closest('.products__filters-btn')) {
        filtersPopup.classList.add('active');
        body.classList.add('lock');
    }

    if (targetEl.closest('.products__close-btn')) {
        filtersPopup.classList.remove('active');
        body.classList.remove('lock');
    }

    if (isMobile.any()) {
        if (targetEl.closest('.filter__btn')) {
            const filter = targetEl.closest('.filter');
            if (filter) {
                closeActiveFilter(filter);
                filter.classList.toggle('active');
            }
        }

        if (!targetEl.closest('.filter__btn')
            && !targetEl.closest('.dropdown')) {
            closeActiveFilter();
        }
    }
});

const burgerBtn = document.querySelector('.burger-btn');
const menuPopup = document.querySelector('.menu-popup');
const body = document.body;
const searchInput = document.querySelector('.input_search');
const searchPopup = document.querySelector('.search-popup');
const searchPopupInner = document.querySelector('.search-popup__inner');
const searchPopupInput = document.querySelector('.search-popup__input');
const productDescBtn = document.querySelector('.product-card__desc-btn');
const productDesc = document.querySelector('.product-card__desc');
const productCurrentColor = document.querySelector('.product-card__current-color');
const orderProductsBtn = document.querySelector('.order__products-btn');
const orderProducts = document.querySelector('.order__products');
const consultingPopup = document.querySelector('.consulting-popup');
const addPopup = document.querySelector('.add-popup');
const sizesPopup = document.querySelector('.sizes-popup');
const reviewsPopup = document.querySelector('.reviews-popup');
const registerPopup = document.querySelector('.register-popup');
const remindPopup = document.querySelector('.remind-popup');
const dignitiesPopup = document.querySelector('.dignities-popup');
const thxPopup = document.querySelector('.thx-popup');
const howPopup = document.querySelector('.how-popup');
const filtersPopup = document.querySelector('.products__filters');

// инпут выбора магазина
const pickupCheckbox = document.querySelector('.order__pickup-checkbox');
const deliveryCheckbox = document.querySelector('.order__delivery-checkbox');
const selectShopInput = document.querySelector('.order__input-inner_shop');

if (pickupCheckbox && deliveryCheckbox && selectShopInput) {
    const updateSelectShopInput = (e) => {
        pickupCheckbox.checked
            ? selectShopInput.classList.add('active')
            : selectShopInput.classList.remove('active');
    }

    pickupCheckbox.addEventListener('change', (e) => updateSelectShopInput(e))
    deliveryCheckbox.addEventListener('change', (e) => updateSelectShopInput(e))
}

// валидация инпутов
const inputErrors = {
    empty: "Это поле обязательно для заполнения"
}

const forms = document.querySelectorAll('form');

if (forms) {
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const currentForm = e.target;
            const requiredInputsInners = currentForm.querySelectorAll('.input-inner[data-error]');
            const requiredCheckBoxInners = currentForm.querySelectorAll('.checkbox-inner[data-error]');
            let isOk = true;

            // валидация инпутов
            requiredInputsInners.forEach(inputInner => {
                const input = inputInner.querySelector('.input');
                const isInvalidInput = input.placeholder.indexOf('*') > 0;

                if (!input.value) {
                    isOk = false;
                    inputInner.classList.add('invalid');
                    inputInner.setAttribute("data-error", inputErrors.empty);

                    if (!isInvalidInput) {
                        input.placeholder = input.placeholder + "*";
                    }
                } else {
                    inputInner.classList.remove('invalid');

                    if (isInvalidInput) {
                        input.placeholder = input.placeholder.replace('*', "");
                    }
                }
            });

            // валидация чекбоксов
            requiredCheckBoxInners.forEach(checkboxInner => {
                const checkbox = checkboxInner.querySelector('.checkbox');
                const label = checkboxInner.querySelector('.order__agree');
                const isInvalidCheckbox = label.innerHTML.indexOf('*') > 0;

                if (!checkbox.checked) {
                    isOk = false;
                    checkboxInner.classList.add('invalid');

                    if (!isInvalidCheckbox) {
                        label.innerHTML = label.innerHTML + "*";
                    }
                } else {
                    checkboxInner.classList.remove('invalid');

                    if (isInvalidCheckbox) {
                        label.innerHTML = label.innerHTML.replace('*', "");
                    }
                }
            });

            if (isOk) {
                currentForm.reset();
                closeActivePopup();
                openPopup(thxPopup);
            }
        });
    })
}

// кнопка активации промокода
const promoInput = document.querySelector('.order__promo-input');
const promoBtn = document.querySelector('.order__promo-btn');

if (promoInput && promoBtn) {
    promoInput.addEventListener('input', function (e) {
        if (promoInput.value) {
            if (!promoBtn.classList.contains('active')) {
                promoBtn.classList.add('active');
            }
        } else {
            promoBtn.classList.remove('active');
        }
    })
}

// выбор файла в отзывах
const fileInput = document.querySelector('.write__file-input');
const fileName = document.querySelector('.write__fine-name');

if (fileInput) {
    fileInput.addEventListener('change', function (e) {
        const selectedFile = e.target.files[0];

        selectedFile
            ? fileName.innerHTML = selectedFile.name
            : "Файл не найден";
    });
}

// фото до и после
$(document).ready(function () {
    $(".difference__image").twentytwenty();
});

$(function () {
    $(".twentytwenty-container").twentytwenty({
        before_label: 'До', // Set a custom before label
        after_label: 'После', // Set a custom after label
    });
});

// слайдер на главной
new Swiper('.main-block__swiper', {
    navigation: {
        nextEl: '.main-block__btn_next',
        prevEl: '.main-block__btn_prev',
    },
    pagination: {
        el: '.main-block__pagination',
        clickable: true,
    },

    slidesPerView: 1,
    loop: true,
    autoplay: true,
    effect: "fade",
});

// слайдеры в карточке товара
const verticalSlider = new Swiper('.vertical-slider', {
    navigation: {
        nextEl: '.vertical-slider__btn_next',
        prevEl: '.vertical-slider__btn_prev',
    },

    slidesPerView: 3,
    direction: "vertical",
    spaceBetween: 20,
});

const gorizontalSlider = new Swiper('.gorizontal-slider', {
    navigation: {
        nextEl: '.gorizontal-slider__btn_next',
        prevEl: '.gorizontal-slider__btn_prev',
    },
    pagination: {
        el: '.gorizontal-slider__pagination',
        clickable: true,
    },

    slidesPerView: 1
});

var verticalSliderSlides = document.querySelectorAll('.vertical-slider__slide');

if (verticalSliderSlides) {
    verticalSliderSlides.forEach(el =>
        el.addEventListener('click', function () {
            const index = el.dataset.slide;
            gorizontalSlider.slideTo(index);
        }));
}

// слайдер до и после
new Swiper('.difference__swiper', {
    pagination: {
        el: '.difference__pagination',
        clickable: true,
    },

    slidesPerView: 1
});
