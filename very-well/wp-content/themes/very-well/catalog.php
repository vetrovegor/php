<?php get_header() 

/*
Template Name: catalog
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
                        <p>Интернет-магазин</p>
                    </div>
                </div>
            </div>
            <section class="catalog">
                <div class="container">
                    <div class="catalog__inner">
                        <h1 class="catalog__title title">Розничный интернет магазин с доставкой по РФ</h1>
                        <div class="catalog__cards cards">
                            <div class="card">
                                <div class="card__image ibg">
                                    <img src="<?php bloginfo('template_url'); ?>/assets/img/examples/01.png" alt="image">
                                    <a href="#" class="card__btn btn transparent">
                                        Моделирующие бюстгальтеры
                                    </a>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card__image ibg">
                                    <img src="<?php bloginfo('template_url'); ?>/assets/img/examples/02.png" alt="image">
                                    <a href="#" class="card__btn btn transparent">
                                        Трусики правильного кроя
                                    </a>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card__image ibg">
                                    <img src="<?php bloginfo('template_url'); ?>/assets/img/examples/03.png" alt="image">
                                    <a href="#" class="card__btn btn transparent">
                                        Корректирующее белье
                                    </a>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card__image ibg">
                                    <img src="<?php bloginfo('template_url'); ?>/assets/img/examples/04.png" alt="image">
                                    <a href="#" class="card__btn btn transparent">
                                        Пляжная одежда
                                    </a>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card__image ibg">
                                    <img src="<?php bloginfo('template_url'); ?>/assets/img/examples/05.png" alt="image">
                                    <a href="#" class="card__btn btn transparent">
                                        Купальники
                                    </a>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card__image ibg">
                                    <img src="<?php bloginfo('template_url'); ?>/assets/img/examples/06.png" alt="image">
                                    <a href="#" class="card__btn btn transparent">
                                        Домашняя одежда
                                    </a>
                                </div>
                            </div>
                        </div>
                        <p class="catalog__text">Мы предлагаем красивое женское белье от фабрики-производителя с интересным дизайном, широкой цветовой линией и большим размерным рядом. Коллекция постоянно пополняется новыми моделями. Курьерская доставка по всей России! Дарим подарочные сертификаты при каждой покупке!</p>
                    </div>
                </div>
            </section>
        </main>

<?php get_footer() ?>