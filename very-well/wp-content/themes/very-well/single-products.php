<?php get_header() 

/*
Template Name: single-products
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
                        <a href="#" class="dim">Корректирующее белье</a>
                        <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 8.63636L1 16" stroke="#BBBABA" stroke-width="2" />
                        </svg>
                        <p>О компании</p>
                    </div>
                </div>
            </div>
            <section class="product-card">
                <div class="container">
                    <div class="product-card__inner">
                        <div class="product-card__vertical-slider">
                            <button class="vertical-slider__btn vertical-slider__btn_prev">
                                <svg width="17" height="9" viewBox="0 0 17 9" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 8L8.63636 2L16 8" stroke="#1D1919" stroke-width="2" />
                                </svg>
                            </button>
                            <div class="swiper vertical-slider">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide vertical-slider__slide ibg" data-slide="0">
                                        <img src="<?php bloginfo('template_url'); ?>/assets/img/examples/01.png" alt="image">
                                    </div>
                                    <div class="swiper-slide vertical-slider__slide ibg" data-slide="1">
                                        <img src="<?php bloginfo('template_url'); ?>/assets/img/examples/02.png" alt="image">
                                    </div>
                                    <div class="swiper-slide vertical-slider__slide ibg" data-slide="2">
                                        <img src="<?php bloginfo('template_url'); ?>/assets/img/examples/03.png" alt="image">
                                    </div>
                                    <div class="swiper-slide vertical-slider__slide ibg" data-slide="3">
                                        <img src="<?php bloginfo('template_url'); ?>/assets/img/examples/04.png" alt="image">
                                    </div>
                                    <div class="swiper-slide vertical-slider__slide ibg" data-slide="4">
                                        <img src="<?php bloginfo('template_url'); ?>/assets/img/examples/05.png" alt="image">
                                    </div>
                                </div>
                            </div>
                            <button class="vertical-slider__btn vertical-slider__btn_next">
                                <svg width="17" height="9" viewBox="0 0 17 9" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 1L8.36364 7L1 1" stroke="#1D1919" stroke-width="2" />
                                </svg>
                            </button>
                        </div>
                        <div class="product-card__gorizontal-slider">
                            <div class="swiper gorizontal-slider">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide gorizontal-slider__slide ibg">
                                        <img src="<?php bloginfo('template_url'); ?>/assets/img/examples/01.png" alt="image">
                                    </div>
                                    <div class="swiper-slide gorizontal-slider__slide ibg">
                                        <img src="<?php bloginfo('template_url'); ?>/assets/img/examples/02.png" alt="image">
                                    </div>
                                    <div class="swiper-slide gorizontal-slider__slide ibg">
                                        <img src="<?php bloginfo('template_url'); ?>/assets/img/examples/03.png" alt="image">
                                    </div>
                                    <div class="swiper-slide gorizontal-slider__slide ibg">
                                        <img src="<?php bloginfo('template_url'); ?>/assets/img/examples/04.png" alt="image">
                                    </div>
                                    <div class="swiper-slide gorizontal-slider__slide ibg">
                                        <img src="<?php bloginfo('template_url'); ?>/assets/img/examples/05.png" alt="image">
                                    </div>
                                </div>
                                <div class="gorizontal-slider__pagination slider-pagination"></div>
                            </div>
                            <div class="gorizontal-slider__btns">
                                <button class="gorizontal-slider__btn slider-btn gorizontal-slider__btn_prev">
                                    <svg width="17" height="31" viewBox="0 0 17 31" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 1L2 15.7636L16 30" stroke="white" stroke-width="2" />
                                    </svg>
                                </button>
                                <button class="gorizontal-slider__btn slider-btn gorizontal-slider__btn_next">
                                    <svg width="17" height="31" viewBox="0 0 17 31" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L15 15.7636L1 30" stroke="white" stroke-width="2" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="product-card__content">
                            <h1 class="product-card__name title">Бюстье</h1>
                            <div class="product-card__price-inner">
                                <p class="title">1 500 ₽</p>
                                <div class="product-card__price-more">
                                    <p>Или 4 платежа по 375 ₽</p>
                                    <a href="#" class="product-card__price-link">Подробнее</a>
                                </div>
                            </div>
                            <div class="product-card__colors-inner">
                                <b>Цвет: <span class="product-card__current-color"></span></b>
                                <div class="product-card__colors">
                                    <div class="product-card__color active" data-color="бежевый">
                                        <img src="<?php bloginfo('template_url'); ?>/assets/img/colors/01.png" alt="color">
                                    </div>
                                    <div class="product-card__color" data-color="коричневый">
                                        <img src="<?php bloginfo('template_url'); ?>/assets/img/colors/05.png" alt="color">
                                    </div>
                                    <div class="product-card__color" data-color="красный">
                                        <img src="<?php bloginfo('template_url'); ?>/assets/img/colors/06.png" alt="color">
                                    </div>
                                </div>
                            </div>
                            <p class="product-card__articul">Артикул: V0005</p>
                            <div class="product-card__size-inner">
                                <div class="filter">
                                    <button class="filter__btn">
                                        размер
                                        <svg width="17" height="9" viewBox="0 0 17 9" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 1L8.36364 7L1 0.999999" stroke="#1D1919" stroke-width="2" />
                                        </svg>
                                    </button>
                                    <div class="dropdown">
                                        <div class="dropdown__sizes dropdown__list">
                                            <button class="dropdown__size product-card__size-item">70С</button>
                                            <button class="dropdown__size product-card__size-item">70С</button>
                                            <button class="dropdown__size product-card__size-item">70С</button>
                                            <button class="dropdown__size product-card__size-item">70С</button>
                                            <button class="dropdown__size product-card__size-item">70С</button>
                                            <button class="dropdown__size product-card__size-item">70С</button>
                                            <button class="dropdown__size product-card__size-item">70С</button>
                                            <button class="dropdown__size product-card__size-item">70С</button>
                                            <button class="dropdown__size product-card__size-item">70С</button>
                                            <button class="dropdown__size product-card__size-item">70С</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-card__size-btns">
                                    <button class="product-card__size-btn product-card__size-btn_table">Таблица
                                        размеров</button>
                                    <button class="product-card__size-btn product-card__size-btn_how">Как подобрать
                                        размер?</button>
                                </div>
                            </div>
                            <div class="product-card__desc-inner">
                                <button class="filter__btn filter__btn_no-animate product-card__desc-btn">
                                    описание
                                    <svg width="17" height="9" viewBox="0 0 17 9" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 1L8.36364 7L1 0.999999" stroke="#1D1919" stroke-width="2" />
                                    </svg>
                                </button>
                                <p class="product-card__desc">Бюстье превосходно корректирует фигуру до талии,
                                    создает красивый силуэт и подчеркивает зону декольте. Эластичные, широкие
                                    бретели хорошо поддерживают объемную грудь и равномерно распределяют
                                    давление на плечи. Такая модель, несомненно, должна быть в гардеробе
                                    современной женщины!</p>
                            </div>
                            <button class="product-card__btn product-card__add-btn btn">Добавить в корзину</button>
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