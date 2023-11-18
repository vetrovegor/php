<?php get_header() 

/*
Template Name: price
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
                        <p>Оптовый прайс</p>
                    </div>
                </div>
            </div>
            <section class="price">
                <div class="container">
                    <div class="price__inner">
                        <h1 class="price__title title"><?= get_field("title"); ?></h1>
                        <div class="price__columns">
                            <form action="#" class="price__column price__column_1">
                                <div class="price__inputs">
                                    <div class="price__input-inner input-inner" data-error>
                                        <input type="text" class="input" placeholder="ФИО">
                                    </div>
                                    <div class="price__input-inner input-inner" data-error>
                                        <input type="text" class="input" placeholder="Телефон">
                                    </div>
                                    <div class="price__input-inner input-inner" data-error>
                                        <input type="text" class="input" placeholder="E-mail">
                                    </div>
                                </div>
                                <div class="price__checkbox-inner checkbox-inner" data-error>
                                    <input type="checkbox" class="checkbox" id="agree">
                                    <label for="agree" class="price__label label label_checkbox">
                                        <span>Я согласен с <a href="<?= get_page_link(34); ?>" class="order__agree">политикой обработки персональных данных</a></span>
                                    </label>
                                </div>
                                <button class="price__btn btn">Отправить заявку</button>
                            </form>
                            <div class="price__column price__column_2">
                                <p>Если у Вас возникнут вопросы при заполнении формы, Вы можете связаться с нашим менеджером по телефонам: <b><a href="tel:<?= get_field("tel-link", 86); ?>"><?= get_field("tel", 86); ?></a></b> или по электронной почте: <b><a href="mailto:<?= get_field("mail", 86); ?>"><?= get_field("mail", 86); ?></a></b></p>
                            </div>
                        </div>
                        <div class="price__text-block">
                            <?= get_field("text"); ?>
                        </div>
                    </div>
                </div>
            </section>
        </main>

<?php get_footer() ?>