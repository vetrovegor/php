<?php get_header() 

/*
Template Name: single-news
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
                        <a href="#" class="dim">Новости и акции</a>
                        <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 8.63636L1 16" stroke="#BBBABA" stroke-width="2" />
                        </svg>
                        <p>Мега распродажа! Скидка 50% на весь ассортимент</p>
                    </div>
                </div>
            </div>
            <section class="single-news">
                <div class="container">
                    <div class="single-news__inner">
                        <p class="single-news__title_hidden title">МЕГА РАСПРОДАЖА! СКИДКА 50% НА ВЕСЬ АССОРТИМЕНТ</p>
                        <div class="single-news__image ibg">
                            <img src="<?php bloginfo('template_url'); ?>/assets/img/news/01.png" alt="image">
                        </div>
                        <div class="single-news__content">
                            <h1 class="single-news__title title">МЕГА РАСПРОДАЖА! СКИДКА 50% НА ВЕСЬ АССОРТИМЕНТ</h1>
                            <p>Вы просили - Мы сделали! Только до 30 сентября скидка на любой товар в наших магазинах и онлайн со скидкой в 50%!</p>
                            <a href="#" class="single-news__btn btn">В каталог</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>

<?php get_footer() ?>