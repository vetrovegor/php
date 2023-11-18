<?php get_header() 

/*
Template Name: order
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
                        <p>Оформление заказа</p>
                    </div>
                </div>
            </div>
            <div class="order">
                <div class="container">
                    <div class="order__inner">
                        <h1 class="order__title title">Оформление заказа</h1>
                        <form action="#" class="order__form">
                            <div class="order__columns">
                                <div class="order__column order__column_1">
                                    <div class="order__block">
                                        <p class="order__caption">1. Данные покупателя</p>
                                        <div class="order__content">
                                            <div class="order__input-inner input-inner">
                                                <input type="text" class="order__input input" placeholder="Имя">
                                            </div>
                                            <div class="order__input-inner input-inner">
                                                <input type="text" class="order__input input" placeholder="Телефон">
                                            </div>
                                            <div class="order__input-inner input-inner">
                                                <input type="text" class="order__input input" placeholder="Фамилия">
                                            </div>
                                            <div class="order__input-inner input-inner">
                                                <input type="text" class="order__input input" placeholder="E-mail">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="order__block">
                                        <p class="order__caption">2. Доставка</p>
                                        <div class="order__content">
                                            <div class="order__input-inner input-inner">
                                                <div class="input-inner__arrow-btn order__arrow-btn">
                                                    <svg width="17" height="9" viewBox="0 0 17 9" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16 1L8.36364 7L1 0.999999" stroke="#1D1919"
                                                            stroke-width="2" />
                                                    </svg>
                                                </div>
                                                <input type="text" class="order__input input" placeholder="Город">
                                            </div>
                                            <b>Варианты доставки</b>
                                            <div class="order__checkbox-inner">
                                                <input type="radio" name="delivery" class="radiobox order__pickup-checkbox" id="radiobox1"> 
                                                <label for="radiobox1" class="order__label label label_checkbox">
                                                    Самовывоз
                                                </label>
                                            </div>
                                            <div class="order__input-inner order__input-inner_shop input-inner">
                                                <div class="input-inner__arrow-btn order__arrow-btn">
                                                    <svg width="17" height="9" viewBox="0 0 17 9" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16 1L8.36364 7L1 0.999999" stroke="#1D1919"
                                                            stroke-width="2" />
                                                    </svg>
                                                </div>
                                                <input type="text" class="order__input input"
                                                    placeholder="Выбрать магазин для самовывоза">
                                            </div>
                                            <div class="order__checkbox-inner">
                                                <input type="radio" name="delivery" class="radiobox order__delivery-checkbox" id="radiobox2">
                                                <label for="radiobox2" class="order__label label label_checkbox">
                                                    Платная доставка
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="order__block">
                                        <p class="order__caption">3. Способы оплаты</p>
                                        <div class="order__content">
                                            <div class="order__checkbox-inner">
                                                <input type="radio" name="pay" class="radiobox" id="radiobox3">
                                                <label for="radiobox3" class="order__label label label_checkbox">
                                                    Оплата онлайн
                                                </label>
                                            </div>
                                            <div class="order__checkbox-inner">
                                                <input type="radio" name="pay" class="radiobox" id="radiobox4">
                                                <label for="radiobox4" class="order__label label label_checkbox">
                                                    Оплатить по частям с помощью сервиса “Долями”
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="order__column order__column_2">
                                    <div class="order__block">
                                        <p class="order__caption order__caption_small">Информация о заказе</p>
                                        <div class="order__info">
                                            <div class="order__row">
                                                <p>Всего товаров:</p>
                                                <p>8700 <b>₽</b></p>
                                            </div>
                                            <div class="order__row">
                                                <p>Стоимость доставки:</p>
                                                <p>Бесплатно</p>
                                            </div>
                                            <div class="order__row">
                                                <p>Итого:</p>
                                                <p>8700 <b>₽</b></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="order__block">
                                        <div class="order__promo">
                                            <div class="order__input-inner input-inner">
                                                <input type="text" class="order__input order__promo-input input" placeholder="Ввести промокод">
                                            </div>
                                            <div class="order__promo-btn">применить</div>
                                        </div>
                                        <div class="order__products-inner">
                                            <div class="filter__btn filter__btn_no-animate order__products-btn">
                                                Ваши товары
                                                <svg width="17" height="9" viewBox="0 0 17 9" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16 1L8.36364 7L1 0.999999" stroke="#1D1919"
                                                        stroke-width="2" />
                                                </svg>
                                            </div>
                                            <div class="order__products">
                                                <div class="product-order">
                                                    <div class="product-order__image ibg">
                                                        <img src="<?php bloginfo('template_url'); ?>/assets/img/examples/01.png" alt="image">
                                                    </div>
                                                    <div class="product-order__content">
                                                        <p class="product-order__articul">Артикул: YK19610</p>
                                                        <b>Бюстгальтер моделирующий Push UP</b>
                                                        <div class="product-order__bottom">
                                                            <p>1× руб 4.499,00</p>
                                                            <p>Цвет: светло-розовый </p>
                                                            <p>Размер: S</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-order">
                                                    <div class="product-order__image ibg">
                                                        <img src="<?php bloginfo('template_url'); ?>/assets/img/examples/02.png" alt="image">
                                                    </div>
                                                    <div class="product-order__content">
                                                        <p class="product-order__articul">Артикул: YK19610</p>
                                                        <b>Трусики</b>
                                                        <div class="product-order__bottom">
                                                            <p>1× руб 4.499,00</p>
                                                            <p>Цвет: светло-розовый </p>
                                                            <p>Размер: S</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="order__bottom">
                                <div class="order__total">
                                    <div class="order__info">
                                        <div class="order__row">
                                            <p>Всего товаров:</p>
                                            <p>8700 <b>₽</b></p>
                                        </div>
                                        <div class="order__row">
                                            <p>Стоимость доставки:</p>
                                            <p>Бесплатно</p>
                                        </div>
                                        <div class="order__row order__row_total">
                                            <b>Итого:</b>
                                            <b>8700 ₽</b>
                                        </div>
                                    </div>
                                    <button class="order__btn btn">Заказать</button>
                                </div>
                                <div class="order__checkbox-inner">
                                    <input type="checkbox" name="delivery" class="checkbox" id="agree">
                                    <label for="agree" class="order__label label label_checkbox">
                                        <b>Согласен с <a href="<?= get_page_link(34); ?>" class="order__agree">политикой обработки персональных данных</a></b>
                                    </label>
                                </div>
                            </div>
                        </form>
                        <p class="order__text">Вы можете позвонить по бесплатному номеру 8 (800) 350-09-19, чтобы мы вручную записали данные о Вашем заказе</p>
                    </div>
                </div>
            </div>
        </main>

<?php get_footer() ?>