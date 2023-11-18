<?php get_header() 

/*
Template Name: basket
*/

?>

        <main class="main">
            <section class="basket">
                <div class="container">
                    <div class="basket__inner">
                        <h1 class="basket__title title">Корзина</h1>
                        <!-- Пустая корзина -->
                        <!-- <p class="basket__empty-text">В вашей корзине пока нет товаров.</p>
                        <a href="#" class="basket__empty-btn btn">Перейти к покупкам</a> -->
                        <div class="basket__items">
                            <div class="item-basket">
                                <div class="item-basket__image ibg">
                                    <img src="<?php bloginfo('template_url'); ?>/assets/img/product-card/03.png" alt="image">
                                </div>
                                <div class="item-basket__content">
                                    <div class="item-basket__row item-basket__row_header">
                                        <div class="item-basket__col">Наименование</div>
                                        <div class="item-basket__col">Цвет</div>
                                        <div class="item-basket__col">Размер</div>
                                        <div class="item-basket__col">Цена</div>
                                        <div class="item-basket__col">Количество</div>
                                        <div class="item-basket__col">Сумма</div>
                                        <div class="item-basket__col item-basket__col_delete"></div>
                                    </div>
                                    <div class="item-basket__row">
                                        <div class="item-basket__col item-basket__col_name">
                                            <p class="item-basket__articul">Артикул: YK19610</p>
                                            <div class="item-basket__hidden-name">
                                                <b>Бюстгальтер моделирующий Push UP</b>
                                            </div>
                                        </div>
                                        <div class="item-basket__col item-basket__col_color">
                                            <img src="<?php bloginfo('template_url'); ?>/assets/img/colors/01.png" alt="color" class="item-basket__color">
                                        </div>
                                        <div class="item-basket__col">
                                            <div class="filter">
                                                <button class="filter__btn">
                                                    <b>80B</b>
                                                    <svg width="17" height="9" viewBox="0 0 17 9" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16 1L8.36364 7L1 0.999999" stroke="#1D1919"
                                                            stroke-width="2" />
                                                    </svg>
                                                </button>
                                                <div class="dropdown item-basket__dropdown">
                                                    <div class="dropdown__sizes dropdown__list">
                                                        <button
                                                            class="dropdown__size product-card__size-item">70С</button>
                                                        <button
                                                            class="dropdown__size product-card__size-item">70С</button>
                                                        <button
                                                            class="dropdown__size product-card__size-item">70С</button>
                                                        <button
                                                            class="dropdown__size product-card__size-item">70С</button>
                                                        <button
                                                            class="dropdown__size product-card__size-item">70С</button>
                                                        <button
                                                            class="dropdown__size product-card__size-item">70С</button>
                                                        <button
                                                            class="dropdown__size product-card__size-item">70С</button>
                                                        <button
                                                            class="dropdown__size product-card__size-item">70С</button>
                                                        <button
                                                            class="dropdown__size product-card__size-item">70С</button>
                                                        <button
                                                            class="dropdown__size product-card__size-item">70С</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item-basket__col item-basket__col_price">
                                            <b class="item-basket__price">6850 ₽</b>
                                        </div>
                                        <div class="item-basket__col">
                                            <div class="item-basket__count-inner">
                                                <button class="item-basket__count-btn item-basket__count-btn_plus">-</button>
                                                <b class="item-basket__count">1</b>
                                                <button class="item-basket__count-btn item-basket__count-btn_minus">+</button>
                                            </div>
                                        </div>
                                        <div class="item-basket__col item-basket__col_sum">
                                            <b class="item-basket__sum">6850 ₽</b>
                                        </div>
                                        <div class="item-basket__col item-basket__col_delete">
                                            <button class="item-basket__delete">
                                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M1.5 5.25H19.5M6.75 5.25V4.5C6.75 3.50544 7.14509 2.55161 7.84835 1.84835C8.55161 1.14509 9.50544 0.75 10.5 0.75C11.4946 0.75 12.4484 1.14509 13.1517 1.84835C13.8549 2.55161 14.25 3.50544 14.25 4.5V5.25M8.25 8.25V16.5M12.75 8.25V16.5M3.75 5.25H17.25V18.75C17.25 19.1478 17.092 19.5294 16.8107 19.8107C16.5294 20.092 16.1478 20.25 15.75 20.25H5.25C4.85218 20.25 4.47064 20.092 4.18934 19.8107C3.90804 19.5294 3.75 19.1478 3.75 18.75V5.25Z"
                                                        stroke="#BBBABA" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="item-basket__row item-basket__row_name">
                                        <div class="item-basket__col">
                                            <b>Бюстгальтер моделирующий Push UP</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item-basket">
                                <div class="item-basket__image ibg">
                                    <img src="<?php bloginfo('template_url'); ?>/assets/img/product-card/01.png" alt="image">
                                </div>
                                <div class="item-basket__content">
                                    <div class="item-basket__row item-basket__row_header">
                                        <div class="item-basket__col">Наименование</div>
                                        <div class="item-basket__col">Цвет</div>
                                        <div class="item-basket__col">Размер</div>
                                        <div class="item-basket__col">Цена</div>
                                        <div class="item-basket__col">Количество</div>
                                        <div class="item-basket__col">Сумма</div>
                                        <div class="item-basket__col item-basket__col_delete"></div>
                                    </div>
                                    <div class="item-basket__row">
                                        <div class="item-basket__col item-basket__col_name">
                                            <p class="item-basket__articul">Артикул: YK19610</p>
                                            <div class="item-basket__hidden-name">
                                                <b>Трусики</b>
                                            </div>
                                        </div>
                                        <div class="item-basket__col item-basket__col_color">
                                            <img src="<?php bloginfo('template_url'); ?>/assets/img/colors/06.png" alt="color" class="item-basket__color">
                                        </div>
                                        <div class="item-basket__col">
                                            <div class="filter">
                                                <button class="filter__btn">
                                                    <b>80B</b>
                                                    <svg width="17" height="9" viewBox="0 0 17 9" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16 1L8.36364 7L1 0.999999" stroke="#1D1919"
                                                            stroke-width="2" />
                                                    </svg>
                                                </button>
                                                <div class="dropdown item-basket__dropdown">
                                                    <div class="dropdown__sizes dropdown__list">
                                                        <button
                                                            class="dropdown__size product-card__size-item">70С</button>
                                                        <button
                                                            class="dropdown__size product-card__size-item">70С</button>
                                                        <button
                                                            class="dropdown__size product-card__size-item">70С</button>
                                                        <button
                                                            class="dropdown__size product-card__size-item">70С</button>
                                                        <button
                                                            class="dropdown__size product-card__size-item">70С</button>
                                                        <button
                                                            class="dropdown__size product-card__size-item">70С</button>
                                                        <button
                                                            class="dropdown__size product-card__size-item">70С</button>
                                                        <button
                                                            class="dropdown__size product-card__size-item">70С</button>
                                                        <button
                                                            class="dropdown__size product-card__size-item">70С</button>
                                                        <button
                                                            class="dropdown__size product-card__size-item">70С</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item-basket__col item-basket__col_price">
                                            <b class="item-basket__price">1850 ₽</b>
                                        </div>
                                        <div class="item-basket__col">
                                            <div class="item-basket__count-inner">
                                                <button class="item-basket__count-btn item-basket__count-btn_plus">-</button>
                                                <b class="item-basket__count">1</b>
                                                <button class="item-basket__count-btn item-basket__count-btn_minus">+</button>
                                            </div>
                                        </div>
                                        <div class="item-basket__col item-basket__col_sum">
                                            <b class="item-basket__sum">1850 ₽</b>
                                        </div>
                                        <div class="item-basket__col item-basket__col_delete">
                                            <button class="item-basket__delete">
                                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M1.5 5.25H19.5M6.75 5.25V4.5C6.75 3.50544 7.14509 2.55161 7.84835 1.84835C8.55161 1.14509 9.50544 0.75 10.5 0.75C11.4946 0.75 12.4484 1.14509 13.1517 1.84835C13.8549 2.55161 14.25 3.50544 14.25 4.5V5.25M8.25 8.25V16.5M12.75 8.25V16.5M3.75 5.25H17.25V18.75C17.25 19.1478 17.092 19.5294 16.8107 19.8107C16.5294 20.092 16.1478 20.25 15.75 20.25H5.25C4.85218 20.25 4.47064 20.092 4.18934 19.8107C3.90804 19.5294 3.75 19.1478 3.75 18.75V5.25Z"
                                                        stroke="#BBBABA" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="item-basket__row item-basket__row_name">
                                        <div class="item-basket__col">
                                            <b>Трусики</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="basket__bottom">
                            <div class="basket__total-inner">
                                <p>Итого:</p>
                                <p class="basket__total">8700 ₽</p>
                            </div>
                            <a href="#" class="basket__btn btn">Оформить заказ</a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="recently">
                <div class="container">
                    <div class="recently__inner">
                        <h2 class="recently__title title">Вы недавно смотрели:</h2>
                        <div class="cards">
                            <div class="card">
                                <a href="#" class="card__image ibg">
                                    <img src="<?php bloginfo('template_url'); ?>/assets/img/product-card/01.png" alt="image">
                                </a>
                                <a href="#">Верх купальника</a>
                            </div>
                            <div class="card">
                                <a href="#" class="card__image ibg">
                                    <img src="<?php bloginfo('template_url'); ?>/assets/img/product-card/02.png" alt="image">
                                </a>
                                <a href="#">Купальник слитный</a>
                            </div>
                            <div class="card">
                                <a href="#" class="card__image ibg">
                                    <img src="<?php bloginfo('template_url'); ?>/assets/img/product-card/03.png" alt="image">
                                </a>
                                <a href="#">Купальник</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

<?php get_footer() ?>