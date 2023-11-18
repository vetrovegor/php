<?php get_header() 

/*
Template Name: single-catalog
*/

?>

        <main class="main">
            <div class="breadcrumbs">
                <div class="container">
                    <div class="breadcrumbs__inner">
                        <a href="/" class="dim">Главная</a>
                        <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 8.63636L1 16" stroke="#BBBABA" stroke-width="2" />
                        </svg>
                        <a href="#" class="dim">Интернет магазин</a>
                        <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 8.63636L1 16" stroke="#BBBABA" stroke-width="2" />
                        </svg>
                        <p>Моделирующие бюстгальтеры</p>
                    </div>
                </div>
            </div>
            <section class="products">
                <div class="container">
                    <div class="products__inner">
                        <h1 class="products__title title">Моделирующие бюстгальтеры</h1>
                        <div class="products__header">
                            <div class="products__filters">
                                <button class="products__close-btn close-btn">
                                    <img src="<?php bloginfo('template_url'); ?>/assets/img/header/close-btn.svg" alt="close">
                                </button>
                                <div class="filter products__filter">
                                    <button class="filter__btn products__filter-btn">
                                        цвет
                                        <svg width="17" height="9" viewBox="0 0 17 9" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 1L8.36364 7L1 0.999999" stroke="#1D1919" stroke-width="2" />
                                        </svg>
                                    </button>
                                    <div class="dropdown dropdown_checkboxes products__dropdown">
                                        <button class="dropdown__select-btn">Выбрать все</button>
                                        <div class="dropdown__checkboxes dropdown__list">
                                            <div class="dropdown__checkbox-inner">
                                                <input type="checkbox" id="checkbox11"
                                                    class="dropdown__checkbox checkbox">
                                                <label for="checkbox11" class="dropdown__label label label_checkbox">
                                                    <img src="<?php bloginfo('template_url'); ?>/assets/img/colors/01.png" alt="color" class="dropdown__color">
                                                    Бежевый
                                                    <span class="dropdown__count">3</span>
                                                </label>
                                            </div>
                                            <div class="dropdown__checkbox-inner">
                                                <input type="checkbox" id="checkbox22"
                                                    class="dropdown__checkbox checkbox">
                                                <label for="checkbox22" class="dropdown__label label label_checkbox">
                                                    <img src="<?php bloginfo('template_url'); ?>/assets/img/colors/02.png" alt="color" class="dropdown__color">
                                                    Светло-бежевый
                                                    <span class="dropdown__count">1</span>
                                                </label>
                                            </div>
                                            <div class="dropdown__checkbox-inner disabled">
                                                <input type="checkbox" id="checkbox33"
                                                    class="dropdown__checkbox checkbox">
                                                <label for="checkbox33" class="dropdown__label label label_checkbox">
                                                    <img src="<?php bloginfo('template_url'); ?>/assets/img/colors/03.png" alt="color" class="dropdown__color">
                                                    Золотой персик
                                                    <span class="dropdown__count">0</span>
                                                </label>
                                            </div>
                                            <div class="dropdown__checkbox-inner">
                                                <input type="checkbox" id="checkbox44"
                                                    class="dropdown__checkbox checkbox">
                                                <label for="checkbox44" class="dropdown__label label label_checkbox">
                                                    <img src="<?php bloginfo('template_url'); ?>/assets/img/colors/04.png" alt="color" class="dropdown__color">
                                                    Какао
                                                    <span class="dropdown__count">4</span>
                                                </label>
                                            </div>
                                            <div class="dropdown__checkbox-inner">
                                                <input type="checkbox" id="checkbox55"
                                                    class="dropdown__checkbox checkbox">
                                                <label for="checkbox55" class="dropdown__label label label_checkbox">
                                                    <img src="<?php bloginfo('template_url'); ?>/assets/img/colors/05.png" alt="color" class="dropdown__color">
                                                    Коричневый
                                                    <span class="dropdown__count">2</span>
                                                </label>
                                            </div>
                                            <div class="dropdown__checkbox-inner">
                                                <input type="checkbox" id="checkbox66"
                                                    class="dropdown__checkbox checkbox">
                                                <label for="checkbox66" class="dropdown__label label label_checkbox">
                                                    <img src="<?php bloginfo('template_url'); ?>/assets/img/colors/06.png" alt="color" class="dropdown__color">
                                                    Красный
                                                    <span class="dropdown__count">2</span>
                                                </label>
                                            </div>
                                        </div>
                                        <button class="dropdown__btn btn">Применить</button>
                                    </div>
                                </div>
                                <div class="filter products__filter">
                                    <button class="filter__btn products__filter-btn">
                                        размер
                                        <svg width="17" height="9" viewBox="0 0 17 9" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 1L8.36364 7L1 0.999999" stroke="#1D1919" stroke-width="2" />
                                        </svg>
                                    </button>
                                    <div class="dropdown dropdown_checkboxes products__dropdown">
                                        <button class="dropdown__select-btn">Выбрать все</button>
                                        <div class="dropdown__checkboxes dropdown__list">
                                            <div class="dropdown__checkbox-inner">
                                                <input type="checkbox" id="checkbox1"
                                                    class="dropdown__checkbox checkbox">
                                                <label for="checkbox1" class="dropdown__label label label_checkbox">
                                                    70С
                                                    <span class="dropdown__count">7</span>
                                                </label>
                                            </div>
                                            <div class="dropdown__checkbox-inner">
                                                <input type="checkbox" id="checkbox2"
                                                    class="dropdown__checkbox checkbox">
                                                <label for="checkbox2" class="dropdown__label label label_checkbox">
                                                    70E
                                                    <span class="dropdown__count">5</span>
                                                </label>
                                            </div>
                                            <div class="dropdown__checkbox-inner disabled">
                                                <input type="checkbox" id="checkbox3"
                                                    class="dropdown__checkbox checkbox">
                                                <label for="checkbox3" class="dropdown__label label label_checkbox">
                                                    70F
                                                    <span class="dropdown__count">0</span>
                                                </label>
                                            </div>
                                            <div class="dropdown__checkbox-inner">
                                                <input type="checkbox" id="checkbox4"
                                                    class="dropdown__checkbox checkbox">
                                                <label for="checkbox4" class="dropdown__label label label_checkbox">
                                                    70G
                                                    <span class="dropdown__count">15</span>
                                                </label>
                                            </div>
                                            <div class="dropdown__checkbox-inner">
                                                <input type="checkbox" id="checkbox5"
                                                    class="dropdown__checkbox checkbox">
                                                <label for="checkbox5" class="dropdown__label label label_checkbox">
                                                    70I
                                                    <span class="dropdown__count">8</span>
                                                </label>
                                            </div>
                                            <div class="dropdown__checkbox-inner">
                                                <input type="checkbox" id="checkbox6"
                                                    class="dropdown__checkbox checkbox">
                                                <label for="checkbox6" class="dropdown__label label label_checkbox">
                                                    75B
                                                    <span class="dropdown__count">10</span>
                                                </label>
                                            </div>
                                            <div class="dropdown__checkbox-inner">
                                                <input type="checkbox" id="checkbox7"
                                                    class="dropdown__checkbox checkbox">
                                                <label for="checkbox7" class="dropdown__label label label_checkbox">
                                                    75B
                                                    <span class="dropdown__count">10</span>
                                                </label>
                                            </div>
                                            <div class="dropdown__checkbox-inner">
                                                <input type="checkbox" id="checkbox8"
                                                    class="dropdown__checkbox checkbox">
                                                <label for="checkbox8" class="dropdown__label label label_checkbox">
                                                    75B
                                                    <span class="dropdown__count">10</span>
                                                </label>
                                            </div>
                                        </div>
                                        <button class="dropdown__btn btn">Применить</button>
                                    </div>
                                </div>
                                <div class="filter products__filter">
                                    <button class="filter__btn products__filter-btn">
                                        Сортировать по
                                        <svg width="17" height="9" viewBox="0 0 17 9" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 1L8.36364 7L1 0.999999" stroke="#1D1919" stroke-width="2" />
                                        </svg>
                                    </button>
                                    <div class="dropdown dropdown_radioboxes dropdown__list products__dropdown">
                                        <div class="dropdown__radioboxes">
                                            <div class="dropdown__radiobox-inner">
                                                <input type="radio" name="radio" class="radiobox" id="radiobox1">
                                                <label for="radiobox1" class="dropdown__label label label_radiobox">
                                                    По новизне
                                                </label>
                                            </div>
                                            <div class="dropdown__radiobox-inner">
                                                <input type="radio" name="radio" class="radiobox" id="radiobox2">
                                                <label for="radiobox2" class="dropdown__label label label_radiobox">
                                                    По возрастанию цены
                                                </label>
                                            </div>
                                            <div class="dropdown__radiobox-inner">
                                                <input type="radio" name="radio" class="radiobox" id="radiobox3">
                                                <label for="radiobox3" class="dropdown__label label label_radiobox">
                                                    По убыванию цены
                                                </label>
                                            </div>
                                        </div>
                                        <button class="dropdown__btn btn">Применить</button>
                                    </div>
                                </div>
                                <p class="products__count products__count_filters">Товаров: 9</p>
                                <div class="products__bottom-btns">
                                    <button class="products__apply-btn btn">Применить</button>
                                    <button class="products__clear-btn">Очистить</button>
                                </div>
                            </div>
                            <button class="products__filters-btn">
                                <img src="<?php bloginfo('template_url'); ?>/assets/img/filters-btn.svg" alt="filters-btn">
                                фильтры
                            </button>
                            <p class="products__count">Товаров: 9</p>
                        </div>
                        <div class="cards cards_products">
                            <div class="card">
                                <a href="#" class="card__image card__image_products ibg">
                                    <img src="<?php bloginfo('template_url'); ?>/assets/img/examples/01.png" alt="image">
                                    <div class="card__discount">
                                        Скидка 30%
                                    </div>
                                </a>
                                <div class="card__content">
                                    <a href="#">Бюстгальтер моделирующий Push UP</a>
                                    <div class="card__price">
                                        <p class="card__current-price active">3149 ₽.</p>
                                        <p class="card__old-price dim">4499 ₽</p>
                                    </div>
                                    <p class="card__colors">4 цвета</p>
                                </div>
                            </div>
                            <div class="card">
                                <a href="#" class="card__image card__image_products ibg">
                                    <img src="<?php bloginfo('template_url'); ?>/assets/img/examples/01.png" alt="image">
                                </a>
                                <div class="card__content">
                                    <a href="#">Бюстгальтер моделирующий Push UP</a>
                                    <div class="card__price">
                                        <p class="card__current-price">3149 ₽.</p>
                                    </div>
                                    <p class="card__colors">4 цвета</p>
                                </div>
                            </div>
                            <div class="card">
                                <a href="#" class="card__image card__image_products ibg">
                                    <img src="<?php bloginfo('template_url'); ?>/assets/img/examples/01.png" alt="image">
                                </a>
                                <div class="card__content">
                                    <a href="#">Бюстгальтер моделирующий Push UP</a>
                                    <div class="card__price">
                                        <p class="card__current-price">3149 ₽.</p>
                                    </div>
                                    <p class="card__colors">4 цвета</p>
                                </div>
                            </div>
                            <div class="card">
                                <a href="#" class="card__image card__image_products ibg">
                                    <img src="<?php bloginfo('template_url'); ?>/assets/img/examples/01.png" alt="image">
                                </a>
                                <div class="card__content">
                                    <a href="#">Бюстгальтер моделирующий Push UP</a>
                                    <div class="card__price">
                                        <p class="card__current-price">3149 ₽.</p>
                                    </div>
                                    <p class="card__colors">4 цвета</p>
                                </div>
                            </div>
                            <div class="card">
                                <a href="#" class="card__image card__image_products ibg">
                                    <img src="<?php bloginfo('template_url'); ?>/assets/img/examples/01.png" alt="image">
                                    <div class="card__discount active">
                                        Скидка 30%
                                    </div>
                                </a>
                                <div class="card__content">
                                    <a href="#">Бюстгальтер моделирующий Push UP</a>
                                    <div class="card__price">
                                        <p class="card__current-price active">3149 ₽.</p>
                                        <p class="card__old-price dim">4499 ₽</p>
                                    </div>
                                    <p class="card__colors">4 цвета</p>
                                </div>
                            </div>
                        </div>
                        <button class="products__btn btn">Показать еще</button>
                        <div class="products__pagination pagination">
                            <button class="pagination__btn">
                                <svg width="9" height="17" viewBox="0 0 9 17" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 1L2 8.63636L8 16" stroke="#1D1919" stroke-width="2" />
                                </svg>
                            </button>
                            <button class="pagination__btn dim">
                                1
                            </button>
                            <button class="pagination__btn dim">
                                2
                            </button>
                            <button class="pagination__btn dim active">
                                3
                            </button>
                            <button class="pagination__btn dim">
                                4
                            </button>
                            <button class="pagination__btn dim dots">
                                ...
                            </button>
                            <button class="pagination__btn dim">
                                10
                            </button>
                            <button class="pagination__btn">
                                <svg width="9" height="17" viewBox="0 0 9 17" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 8.63636L1 16" stroke="#1D1919" stroke-width="2" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>

<?php get_footer() ?>