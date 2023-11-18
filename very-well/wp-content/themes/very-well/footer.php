<footer class="footer">
            <div class="container">
                <div class="footer__inner">
                    <div class="footer__left">
                        <a href="/" class="footer__logo logo">
                            <span class="logo__title">Very well</span>
                            <span class="logo__subtitle">Сеть салонов нижнего женского белья</span>
                        </a>
                        <p class="footer__text"><?= get_field("footer-text", 86); ?></p>
                    </div>
                    <div class="footer__middle">
                        <div class="footer__columns">
                            <div class="footer__column">
                                <div class="footer__links">
                                    <a href="mailto:<?= get_field("mail", 86); ?>"><?= get_field("mail", 86); ?></a>
                                    <a href="tel:<?= get_field("tel-link", 86); ?>"><?= get_field("tel", 86); ?></a>
                                </div>
                            </div>
                            <div class="footer__column">
                                <?php
                                    wp_nav_menu( [
                                    'theme_location'  => 'footer-menu',
                                    'container'       => null,
                                    'menu_class'      => 'footer__links'
                                    ] );
                                ?>
                            </div>
                        </div>
                        <div class="footer__social">
                            <?php
                            while( have_rows("social", 86) ) : the_row();
                                ?>
                                <a href="<?= get_sub_field("link") ?>" target="_blank">
                                    <img src="<?= get_sub_field("icon") ?>" alt="social">
                                </a>
                                <?php
                            endwhile;
                            ?>
                        </div>
                    </div>
                    <div class="footer__right">
                        <p>Способы оплаты:</p>
                        <div class="footer__pay-methods">
                            <?php
                            while( have_rows("pay", 86) ) : the_row();
                                ?>
                                <img src="<?= get_sub_field("icon") ?>" alt="pay">
                                <?php
                            endwhile;
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    <div class="menu-popup">
        <button class="menu-popup__close-btn close-btn close-popup">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M20 1.81818L18.1818 0L10 8.18182L1.81818 0L0 1.81818L8.18182 10L0 18.1818L1.81818 20L10 11.8182L18.1818 20L20 18.1818L11.8182 10L20 1.81818Z"
                    fill="#1D1919" />
            </svg>
        </button>
        <div class="menu-popup__search-inner input-inner">
            <button class="search-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19.7832 16.3911L24 20.6069L22.6069 22L18.3911 17.7832C16.8224 19.0407 14.8713 19.7246 12.8609 19.7218C7.96968 19.7218 4 15.7521 4 10.8609C4 5.96968 7.96968 2 12.8609 2C17.7521 2 21.7218 5.96968 21.7218 10.8609C21.7246 12.8713 21.0407 14.8224 19.7832 16.3911ZM17.8082 15.6605C19.0577 14.3756 19.7555 12.6532 19.7527 10.8609C19.7527 7.05366 16.6681 3.96909 12.8609 3.96909C9.05366 3.96909 5.96909 7.05366 5.96909 10.8609C5.96909 14.6681 9.05366 17.7527 12.8609 17.7527C14.6532 17.7555 16.3756 17.0577 17.6605 15.8082L17.8082 15.6605Z"
                        fill="#1D1919" />
                </svg>
            </button>
            <input type="text" class="input input_search" placeholder="Поиск">
        </div>
        <div class="menu-popup__nav">
            <?php
                wp_nav_menu( [
                'theme_location'  => 'header-menu',
                'container'       => null
                ] );
            ?>
        </div>
        <div class="menu-popup__btns">
            <button class="menu-popup__btn btn">Консультация специалиста</button>
            <a href="tel:+78002012436">8 (800) 201-24-36</a>
        </div>
    </div>
    <div class="search-popup">
        <div class="search-popup__inner">
            <button class="close-btn search-popup__close-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20 1.81818L18.1818 0L10 8.18182L1.81818 0L0 1.81818L8.18182 10L0 18.1818L1.81818 20L10 11.8182L18.1818 20L20 18.1818L11.8182 10L20 1.81818Z"
                        fill="#1D1919" />
                </svg>
            </button>
            <button class="search-popup__back-btn">
                <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 1L2 11.1818L11 21" stroke="#1D1919" stroke-width="2" />
                </svg>
            </button>
            <div class="search-popup__search-inner input-inner">
                <button class="search-btn search-popup__search-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19.7832 16.3911L24 20.6069L22.6069 22L18.3911 17.7832C16.8224 19.0407 14.8713 19.7246 12.8609 19.7218C7.96968 19.7218 4 15.7521 4 10.8609C4 5.96968 7.96968 2 12.8609 2C17.7521 2 21.7218 5.96968 21.7218 10.8609C21.7246 12.8713 21.0407 14.8224 19.7832 16.3911ZM17.8082 15.6605C19.0577 14.3756 19.7555 12.6532 19.7527 10.8609C19.7527 7.05366 16.6681 3.96909 12.8609 3.96909C9.05366 3.96909 5.96909 7.05366 5.96909 10.8609C5.96909 14.6681 9.05366 17.7527 12.8609 17.7527C14.6532 17.7555 16.3756 17.0577 17.6605 15.8082L17.8082 15.6605Z"
                            fill="#1D1919" />
                    </svg>
                </button>
                <input type="text" class="input input_search search-popup__input" placeholder="Поиск">
            </div>
            <div class="search-popup__variants-inner">
                <p class="dim">Вы имели в виду:</p>
                <div class="search-popup__variants">
                    <a href="#">Бюст</a>
                    <a href="#">Бюстгарльтер</a>
                </div>
            </div>
            <div class="search-popup__header">
                <p class="dim">Товары</p>
                <a href="#" class="search-popup__link more-link">
                    Посмотреть все
                    <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 8.63636L1 16" stroke="#1D1919" stroke-width="2" />
                    </svg>
                </a>
            </div>
            <div class="search-popup__items">
                <div class="search-popup__item">
                    <a href="#" class="search-popup__img ibg">
                        <img src="<?php bloginfo('template_url'); ?>/assets/img/header/01.png" alt="image">
                    </a>
                    <a href="#">Бюстгальтер моделирующий мягкая чашка</a>
                </div>
                <div class="search-popup__item">
                    <a href="#" class="search-popup__img ibg">
                        <img src="<?php bloginfo('template_url'); ?>/assets/img/header/02.png" alt="image">
                    </a>
                    <a href="#">Бюстгальтер моделирующий Push UP</a>
                </div>
                <div class="search-popup__item">
                    <a href="#" class="search-popup__img ibg">
                        <img src="<?php bloginfo('template_url'); ?>/assets/img/header/03.png" alt="image">
                    </a>
                    <a href="#">Бюстгальтер "Corin"</a>
                </div>
            </div>
        </div>
    </div>
    <div class="popup consulting-popup">
        <div class="popup__container">
            <div class="popup__inner">
                <button class="popup__close-btn close-btn close-popup">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20 1.81818L18.1818 0L10 8.18182L1.81818 0L0 1.81818L8.18182 10L0 18.1818L1.81818 20L10 11.8182L18.1818 20L20 18.1818L11.8182 10L20 1.81818Z"
                            fill="#1D1919" />
                    </svg>
                </button>
                <h2 class="popup__title title small">Консультация специалиста</h2>
                <div class="popup__content">
                    <form action="#" class="popup__form">
                        <div class="popup__input-inner input-inner" data-error>
                            <input type="text" class="popup__input input" placeholder="Ваше имя">
                        </div>
                        <div class="popup__input-inner input-inner" data-error>
                            <input type="text" class="popup__input input" placeholder="Телефон или e-mail">
                        </div>
                        <div class="popup__input-inner input-inner" data-error>
                            <div class="input-inner__arrow-btn popup__arrow-btn">
                                <svg width="17" height="9" viewBox="0 0 17 9" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 1L8.36364 7L1 0.999999" stroke="#1D1919" stroke-width="2" />
                                </svg>
                            </div>
                            <input type="text" class="popup__input input" placeholder="Город">
                        </div>
                        <div class="popup__checkbox-inner checkbox-inner" data-error>
                            <input type="checkbox" name="delivery" class="checkbox" id="popup-agree">
                            <label for="popup-agree" class="popup__label label label_checkbox">
                                <span>Согласен с <a href="<?= get_page_link(34); ?>" class="order__agree">политикой обработки персональных
                                        данных</a></span>
                            </label>
                        </div>
                        <button class="popup__btn btn">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="popup thx-popup">
        <div class="popup__container">
            <div class="popup__inner popup__inner_thx">
                <button class="popup__close-btn close-btn close-popup">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20 1.81818L18.1818 0L10 8.18182L1.81818 0L0 1.81818L8.18182 10L0 18.1818L1.81818 20L10 11.8182L18.1818 20L20 18.1818L11.8182 10L20 1.81818Z"
                            fill="#1D1919" />
                    </svg>
                </button>
                <h2 class="popup__title title small">Спасибо!</h2>
                <div class="popup__content">
                    <div class="popup__text-block">
                        <p>Ваша заявка принята.</p>
                        <p>Мы свяжемся с вами по емейлу ivanova@gmail.com в течение суток.</p>
                    </div>
                    <div class="popup__btns">
                        <button class="popup__btn btn close-popup">Ок</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="popup dignities-popup">
        <div class="popup__container">
            <div class="popup__inner">
                <button class="popup__close-btn close-btn close-popup">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20 1.81818L18.1818 0L10 8.18182L1.81818 0L0 1.81818L8.18182 10L0 18.1818L1.81818 20L10 11.8182L18.1818 20L20 18.1818L11.8182 10L20 1.81818Z"
                            fill="#1D1919" />
                    </svg>
                </button>
                <h2 class="popup__title title small popup__title_dignities"></h2>
                <div class="popup__content popup__content_dignities">
                    <p class="dignities__text"></p>
                </div>
            </div>
        </div>
    </div>
    <div class="popup reviews-popup">
        <div class="popup__container">
            <div class="popup__inner popup__inner_reviews">
                <button class="popup__close-btn close-btn close-popup">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20 1.81818L18.1818 0L10 8.18182L1.81818 0L0 1.81818L8.18182 10L0 18.1818L1.81818 20L10 11.8182L18.1818 20L20 18.1818L11.8182 10L20 1.81818Z"
                            fill="#1D1919" />
                    </svg>
                </button>
                <div class="reviews__item reviews__item_popup">
                    <div class="reviews__image ibg">
                        <img src="<?php bloginfo('template_url'); ?>/assets/img/main-block/01.png" alt="image">
                    </div>
                    <div class="reviews__content">
                        <p class="reviews__name"></p>
                        <p class="reviews__city dim"></p>
                        <p class="reviews__review"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="popup add-popup">
        <div class="popup__container">
            <div class="popup__inner popup__inner_add">
                <button class="popup__close-btn close-btn close-popup">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20 1.81818L18.1818 0L10 8.18182L1.81818 0L0 1.81818L8.18182 10L0 18.1818L1.81818 20L10 11.8182L18.1818 20L20 18.1818L11.8182 10L20 1.81818Z"
                            fill="#1D1919" />
                    </svg>
                </button>
                <h2 class="popup__title title small">Спасибо!</h2>
                <div class="popup__content">
                    <p class="popup__text">Товар добавлен в корзину</p>
                    <div class="popup__btns">
                        <a href="#" class="popup__btn btn">Перейти в корзину</a>
                        <button class="popup__link close-popup">Продолжить покупки</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="popup how-popup">
        <div class="popup__container">
            <div class="popup__inner popup__inner_how">
                <button class="popup__close-btn close-btn close-popup">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20 1.81818L18.1818 0L10 8.18182L1.81818 0L0 1.81818L8.18182 10L0 18.1818L1.81818 20L10 11.8182L18.1818 20L20 18.1818L11.8182 10L20 1.81818Z"
                            fill="#1D1919" />
                    </svg>
                </button>
                <div class="how__blocks">
                    <div class="how__block">
                        <p class="how__title title small">КАК ПРАВИЛЬНО ОПРЕДЕЛИТЬ РАЗМЕР БЮСТГАЛЬТЕРА?</p>
                        <div class="how__sub-block">
                            <p>Прежде всего необходимо снять две основные мерки. Это обхват под грудью (тот, что
                                измеряется в сантиметрах, например - 75 см, 80 см и т.д.) и обхват груди (речь идет о
                                чашечках – это A, B, C и т.д.). Правильно измерить объем груди несколько сложнее.
                                Идеальный вариант – когда кто-нибудь снимает с Вас мерки, но если Вам приходится делать
                                это самостоятельно, воспользуйтесь нашими советами.</p>
                        </div>
                        <div class="how__sub-block">
                            <b>1. Обхват под грудью (ОПГ)</b>
                            <p>Возьмите сантиметровую ленту и измерьте обхват грудной клетки под грудью. Сантиметровая
                                лента должна плотно прилегать к телу и проходить строго горизонтально. Полученное число
                                и есть Ваш обхват (объем) под грудью. Снимая мерку (обхват под грудью), нужно расправить
                                корпус (выпрямиться) и проводить замер в спокойном положении, не на вдохе или выдохе.
                            </p>
                            <p>
                                <img src="<?php bloginfo("template_url"); ?>/assets/img/how-popup/01.png" alt="image">
                            </p>
                            <p>Если у вас получилось нечетное число, тогда вам стоит попробовать бюстгальтеры большего
                                размера, чем тот результат, который вы получили, и меньше. К примеру, если у вас объем
                                78.7 см, ваш размер может быть 80 или же 75.</p>
                            <p>Если у вас получилось четное число, оно практически всегда будет соответствовать вашему
                                объему, но он может варьироваться в большую или меньшую сторону, в зависимости
                                от телосложения.</p>
                        </div>
                        <div class="how__sub-block">
                            <b>2. Обхват груди (ОГ)</b>
                            <p>Измерение проводится по самой выступающей точке груди. Сантиметровая лента должна
                                проходить строго горизонтально по самым выступающим точкам груди, и не должна ее
                                стягивать. Для получения точных результатов во время проведения замера лучше надеть
                                удобный бюстгальтер с мягкой чашкой, без каких-либо корректирующих эффектов. Ни в коем
                                случае не поднимайте руки! Определите размер чашечки. Помните, что размер чашки – это
                                относительное число, оно пропорционально объему груди.</p>
                            <p>Наклонитесь так, чтобы Ваша грудь была параллельно земле. Это нужно для того, чтобы
                                измерить полностью все ткани молочной железы, не только те, что выступают наружу, когда
                                вы стоите.</p>
                            <p>
                                <img src="<?php bloginfo("template_url"); ?>/assets/img/how-popup/02.png" alt="">
                            </p>
                            <p>Сделайте сантиметром замеры вокруг туловища посредине груди. Сантиметр должен плотно
                                прилегать к телу, но не жать. Запишите полученное число.</p>
                            <p>Убедитесь в том, что ваша рулетка расположена правильно. Она не должна отклоняться на
                                несколько сантиметров вниз по спине, иначе вы получите неправильное число. Чтобы
                                избежать этого, измеряйте себя, стоя перед зеркалом, или же попросите свою вторую
                                половинку или близкого друга помочь вам. Определите свой размер чашечки. Теперь Вы с
                                легкостью сможете найти свой размер <button class="how__btn">бюстгальтера</button> в таблице.</p>
                        </div>
                    </div>
                    <div class="how__block">
                        <p class="how__title title small">КАК ОПРЕДЕЛИТЬ РАЗМЕР ТРУСОВ ИЛИ ПАНТАЛОНОВ?</p>
                        <div class="how__sub-block">
                            <p>Возьмите сантиметровую ленту и измерьте обхват талии и обхват бедер.</p>
                            <ul>
                                <li>Обхват талии – по самой тонкой части талии</li>
                                <li>Обхват бедер – положите сантиметровую ленту на самые выступающие части ягодиц и
                                    соедините ее спереди.</li>
                            </ul>
                            <p>
                                <img src="<?php bloginfo("template_url"); ?>/assets/img/how-popup/03.png" alt="">
                            </p>
                            <p>А затем найдите полученные результаты в таблице размеров <button class="how__btn">трусов</button> или панталонов.</p>
                        </div>
                    </div>
                    <div class="how__block">
                        <p class="how__title title small">КАК ОПРЕДЕЛИТЬ РАЗМЕР КОРСЕТА?</p>
                        <div class="how__sub-block">
                            <p>Как снять мерки для покупки корсета:</p>
                            <p>Возьмите сантиметровую ленту и измерьте обхват талии. Обхват талии – по самой тонкой
                                части талии измеряется по туго повязанному по талии пояску.</p>
                            <p>
                                <img src="<?php bloginfo("template_url"); ?>/assets/img/how-popup/04.png" alt="">
                            </p>
                            <p>А затем найдите полученные результаты в таблице размеров <button class="how__btn">корсетов</button>.</p>
                        </div>
                    </div>
                    <div class="how__block">
                        <p class="how__title title small">ВАЖНО!</p>
                        <div class="how__sub-block">
                            <p>Необходимо учитывать Ваше желание утянуть талию или просто посадить корсет по фигуре.
                                Если Вы хотите утягиваться, то выбирайте размер с учетом утяжки, то есть цифры,
                                приведенные в таблице, должны соответствовать обхвату Вашей талии в утянутом состоянии.
                                Убедительная просьба не забывать, что степень утяжки ограничена не только конструкцей
                                корсета, но и возможностями Вашего организма. Не забывайте, что вам в нем еще нужно
                                дышать и двигаться! Зайдя слишком далеко в погоне за тонкой талией, Вы рискуете
                                повредить не только корсет, но и себя.</p>
                        </div>
                    </div>
                    <div class="how__block">
                        <p class="how__title title small">Посмотрите видео:</p>
                        <div class="how__sub-block">
                            <div class="video">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/jPOCxzGCY6g"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="popup sizes-popup">
        <div class="popup__container">
            <div class="popup__inner">
                <button class="popup__close-btn sizes-popup__close-btn close-btn close-popup">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20 1.81818L18.1818 0L10 8.18182L1.81818 0L0 1.81818L8.18182 10L0 18.1818L1.81818 20L10 11.8182L18.1818 20L20 18.1818L11.8182 10L20 1.81818Z"
                            fill="#1D1919" />
                    </svg>
                </button>
                <h2 class="popup__title title small">Таблица размеров</h2>
                <div class="popup__content popup__content_table">
                    <div class="sizes-table">
                        <div class="sizes-table__row">
                            <div class="sizes-table__column sizes-table__column_big">Размер</div>
                            <div class="sizes-table__column">64/М</div>
                            <div class="sizes-table__column">70/L</div>
                            <div class="sizes-table__column">76/XL</div>
                            <div class="sizes-table__column">82/XXL</div>
                            <div class="sizes-table__column">90/XXXL</div>
                        </div>
                        <div class="sizes-table__row">
                            <div class="sizes-table__column sizes-table__column_big">Талия</div>
                            <div class="sizes-table__column">61-67</div>
                            <div class="sizes-table__column">67-73</div>
                            <div class="sizes-table__column">73-79</div>
                            <div class="sizes-table__column">79-85</div>
                            <div class="sizes-table__column">85-91</div>
                        </div>
                        <div class="sizes-table__row">
                            <div class="sizes-table__column sizes-table__column_big">Бедра</div>
                            <div class="sizes-table__column">83-93</div>
                            <div class="sizes-table__column">86-96</div>
                            <div class="sizes-table__column">89-99</div>
                            <div class="sizes-table__column">91-103</div>
                            <div class="sizes-table__column">94-106</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="popup register-popup">
        <div class="popup__container">
            <div class="popup__inner">
                <button class="popup__close-btn close-btn close-popup">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20 1.81818L18.1818 0L10 8.18182L1.81818 0L0 1.81818L8.18182 10L0 18.1818L1.81818 20L10 11.8182L18.1818 20L20 18.1818L11.8182 10L20 1.81818Z"
                            fill="#1D1919" />
                    </svg>
                </button>
                <h2 class="popup__title title small">Регистрация оптового покупателя</h2>
                <div class="popup__content">
                    <form action="#" class="popup__form">
                        <div class="popup__input-inner input-inner" data-error>
                            <input type="text" class="popup__input input" placeholder="Ваше ФИО">
                        </div>
                        <div class="popup__input-inner input-inner" data-error>
                            <input type="text" class="popup__input input" placeholder="Телефон или e-mail">
                        </div>
                        <div class="popup__input-inner input-inner" data-error>
                            <div class="input-inner__arrow-btn popup__arrow-btn">
                                <svg width="17" height="9" viewBox="0 0 17 9" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 1L8.36364 7L1 0.999999" stroke="#1D1919" stroke-width="2" />
                                </svg>
                            </div>
                            <input type="text" class="popup__input input" placeholder="E-mail">
                        </div>
                        <div class="popup__checkbox-inner checkbox-inner" data-error>
                            <input type="checkbox" name="delivery" class="checkbox" id="popup-register">
                            <label for="popup-register" class="popup__label label label_checkbox">
                                <span>Согласен с <a href="<?= get_page_link(34); ?>" class="order__agree">политикой обработки персональных
                                        данных</span></a>
                            </label>
                        </div>
                        <div class="popup__btns">
                            <button class="popup__btn btn">Отправить</button>
                            <p>Есть аккаунт? <span class="popup__link close-popup">Войти</span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="popup remind-popup">
        <div class="popup__container">
            <div class="popup__inner">
                <button class="popup__close-btn close-btn close-popup">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20 1.81818L18.1818 0L10 8.18182L1.81818 0L0 1.81818L8.18182 10L0 18.1818L1.81818 20L10 11.8182L18.1818 20L20 18.1818L11.8182 10L20 1.81818Z"
                            fill="#1D1919" />
                    </svg>
                </button>
                <h2 class="popup__title title small">Напомнить пароль</h2>
                <div class="popup__content">
                    <form action="#" class="popup__form">
                        <p class="popup__text">Если Вы забыли пароль, мы поможем вам его восстановить.</p>
                        <div class="popup__input-inner input-inner" data-error>
                            <input type="text" class="popup__input input" placeholder="Телефон или e-mail">
                        </div>
                        <button class="popup__btn btn">Восстановить</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

	<?php wp_footer() ?>

    <!-- карта -->
    <script>
        const mapBlock = document.querySelector('.map-block__map');

        if(mapBlock) {
            let center = [45.050329, 41.986017];

            function init() {
                let map = new ymaps.Map('map-block__map', {
                    center: center,
                    zoom: 17
                });

                // метка
                let placemark = new ymaps.Placemark(center, {}, {
                    iconLayout: 'default#image',
                    iconImageHref: '<?php bloginfo("template_url"); ?>/assets/img/placemark.svg',
                    iconImageSize: [32, 51],
                    // отступ от центра (не нужен)
                    // iconImageOffset: [0, 0]
                });

                map.geoObjects.add(placemark);

                map.controls.remove('geolocationControl'); // удаляем геолокацию
                map.controls.remove('searchControl'); // удаляем поиск
                map.controls.remove('trafficControl'); // удаляем контроль трафика
                map.controls.remove('typeSelector'); // удаляем тип
                map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
                map.controls.remove('zoomControl'); // удаляем контрол зуммирования
                map.controls.remove('rulerControl'); // удаляем контрол правил
                // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
            }

            ymaps.ready(init);
        }
    </script>
</body>

</html>