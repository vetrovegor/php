<?php get_header() 

/*
Template Name: contacts
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
                        <p>Контакты</p>
                    </div>
                </div>
            </div>
            <section class="map-block">
                <div class="container">
                    <div class="map-block__inner">
                        <div class="map-block__content">
                            <h1 class="map-block__title title">Найти магазин</h1>
                            <div class="map-block__input-inner input-inner">
                                <button class="input-inner__arrow-btn">
                                    <svg width="9" height="17" viewBox="0 0 9 17" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L7 8.63636L1 16" stroke="#1D1919" stroke-width="2" />
                                    </svg>
                                </button>
                                <input type="text" class="find__input input" placeholder="Город или почтовый индекс">
                            </div>
                            <div class="map-block__stores">
                                <b>3 найденных магазина</b>
                                <ul class="map-block__list">
                                    <li class="item-map-block">
                                        <div class="item-map-block__icon">
                                            <img src="<?php bloginfo('template_url'); ?>/assets/img/placemark.svg" alt="placemark">
                                            <span>A</span>
                                        </div>
                                        <div class="item-map-block__content">
                                            <div class="item-map-block__info">
                                                <b class="item-map-block__title">ТЦ «Космос»</b>
                                                <p class="item-map-block__text">355000, Ставрополь, ул. Доваторцев, 75А</p>
                                                <p class="item-map-block__text"><span class="item-map-block__open">Сейчас открыто</span> до 22:00</p>
                                                <p class="item-map-block__text">Ежедневно с 10:00 до 22:00</p>
                                            </div>
                                            <button class="item-map-block__text item-map-block__btn">Посмотреть на карте</button>
                                        </div>
                                    </li>
                                    <li class="item-map-block">
                                        <div class="item-map-block__icon">
                                            <img src="<?php bloginfo('template_url'); ?>/assets/img/placemark.svg" alt="placemark">
                                            <span>B</span>
                                        </div>
                                        <div class="item-map-block__content">
                                            <div class="item-map-block__info">
                                                <b class="item-map-block__title">ТЦ «Европейский»</b>
                                                <p class="item-map-block__text">355000, Ставрополь, ул. Артема, 49А</p>
                                                <p class="item-map-block__text"><span class="item-map-block__close">Сейчас закрыто</span> откроется в 10:00</p>
                                                <p class="item-map-block__text">Ежедневно с 10:00 до 22:00</p>
                                            </div>
                                            <button class="item-map-block__text item-map-block__btn">Посмотреть на карте</button>
                                        </div>
                                    </li>
                                    <li class="item-map-block">
                                        <div class="item-map-block__icon">
                                            <img src="<?php bloginfo('template_url'); ?>/assets/img/placemark.svg" alt="placemark">
                                            <span>C</span>
                                        </div>
                                        <div class="item-map-block__content">
                                            <div class="item-map-block__info">
                                                <b class="item-map-block__title">ТЦ «Космос»</b>
                                                <p class="item-map-block__text">355000, Ставрополь, ул. Доваторцев, 75А</p>
                                                <p class="item-map-block__text"><span class="item-map-block__open">Сейчас открыто</span> до 22:00</p>
                                                <p class="item-map-block__text">Ежедневно с 10:00 до 22:00</p>
                                            </div>
                                            <button class="item-map-block__text item-map-block__btn">Посмотреть на карте</button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="map-block__map" id="map-block__map"></div>
                    </div>
                </div>
            </section>
            <section class="contacts">
                <div class="container">
                    <div class="contacts__inner">
                        <h2 class="contacts__title title">Контакты</h2>
                        <div class="contacts__columns">
                            <div class="contacts__column">
                                <p>Телефон:</p>
                                <a href="#"><b>8 (800) 201-24-36</b></a>
                            </div>
                            <div class="contacts__column">
                                <p>E-mail: 
                                </p>
                                <a href="#"><b>info@verywellcompany.com</b></a>
                            </div>
                            <div class="contacts__column big">
                                <p>Почтовый адрес: <b>355037, г. Ставрополь, ул. Пирогова 42/1 офис 25</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

<?php get_footer() ?>