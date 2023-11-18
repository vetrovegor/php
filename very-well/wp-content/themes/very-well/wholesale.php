<?php get_header() 

/*
Template Name: wholesale
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
                        <p>О Оптовый раздел</p>
                    </div>
                </div>
            </div>
            <section class="wholesale">
                <div class="container">
                    <div class="wholesale__inner">
                        <h1 class="wholesale__title title">Оптовый раздел</h1>
                        <p class="wholesale__text">У нашей команды семилетний опыт продажи нижнего белья. За это время
                            мы отточили все бизнес процессы, что позволило создать нам за последний год быстро растущюю
                            сеть прибыльных магазинов. Мы предлагаем оптовую продажу нашей продукции розничным
                            магазинам. В зависимости от формата сотрудничества мы предоставляем надежную поддержку,
                            начиная от полного пакета рекламной продукции и обучения персонала до проработки каналов
                            привлечения клиентов с гарантией результата.</p>
                        <form action="#" class="wholesale__form">
                            <div class="wholesale__inputs">
                                <div class="input-inner" data-error>
                                    <input type="text" class="input" placeholder="E-mail">
                                </div>
                                <div class="input-inner" data-error>
                                    <input type="password" class="input" placeholder="Пароль">
                                </div>
                            </div>
                            <button class="wholesale__btn btn">Вход</button>
                        </form>
                        <div class="wholesale__links">
                            <p>Забыли пароль? <button class="wholesale__link wholesale__remind">Напомнить</button></p>
                            <p>Нет аккаунта? <button class="wholesale__link wholesale__register">Регистрация</button>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>

<?php get_footer() ?>