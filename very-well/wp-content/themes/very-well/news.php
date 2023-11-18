<?php get_header() 

/*
Template Name: news
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
                        <p>Новости и акции</p>
                    </div>
                </div>
            </div>
            <section class="news">
                <div class="container">
                    <div class="news__inner">
                        <h1 class="news__title title">новости и акции</h1>
                        <div class="cards cards_news">
                            <div class="card">
                                <a href="#" class="card__image card__image_news ibg">
                                    <img src="<?php bloginfo('template_url'); ?>/assets/img/news/01.png" alt="image">
                                </a>
                                <div class="news__content">
                                    <p class="news__item-title">Мега распродажа! Скидка 50% на весь ассортимент</p>
                                    <p>Вы просили — Мы сделали! Только до 30 сентября скидка на любой товар в наших
                                        магазинах и онлайн</p>
                                    <div class="news__bottom">
                                        <a href="#" class="news__more-link more-link">
                                            Читать дальше
                                            <svg width="9" height="17" viewBox="0 0 9 17" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1L7 8.63636L1 16" stroke="#1D1919" stroke-width="2" />
                                            </svg>
                                        </a>
                                        <p class="news__date">04.07.2022</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <a href="#" class="card__image card__image_news ibg">
                                    <img src="<?php bloginfo('template_url'); ?>/assets/img/news/02.png" alt="image">
                                </a>
                                <div class="news__content">
                                    <p class="news__item-title">Жаркая акция! 20% скидка на все купальники!</p>
                                    <p>Собрались в отпуск? Самое время заглянуть к нам в салон нижнего белья Very Well!
                                    </p>
                                    <div class="news__bottom">
                                        <a href="#" class="news__more-link more-link">
                                            Читать дальше
                                            <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1L7 8.63636L1 16" stroke="#1D1919" stroke-width="2" />
                                            </svg>
                                        </a>
                                        <p class="news__date">04.07.2022</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <a href="#" class="card__image card__image_news ibg">
                                    <img src="<?php bloginfo('template_url'); ?>/assets/img/news/03.png" alt="image">
                                </a>
                                <div class="news__content">
                                    <p class="news__item-title">Новый магазин в МЦ "Космос"</p>
                                    <p>У нас прекрасная новость для жителей Ставрополя! Мы открылись в МЦ Космос и ждем
                                        вас</p>
                                    <div class="news__bottom">
                                        <a href="#" class="news__more-link more-link">
                                            Читать дальше
                                            <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1L7 8.63636L1 16" stroke="#1D1919" stroke-width="2" />
                                            </svg>
                                        </a>
                                        <p class="news__date">04.07.2022</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <a href="#" class="card__image card__image_news ibg">
                                    <img src="<?php bloginfo('template_url'); ?>/assets/img/news/02.png" alt="image">
                                </a>
                                <div class="news__content">
                                    <p class="news__item-title">Жаркая акция! 20% скидка на все купальники!</p>
                                    <p>Собрались в отпуск? Самое время заглянуть к нам в салон нижнего белья Very Well!
                                    </p>
                                    <div class="news__bottom">
                                        <a href="#" class="news__more-link more-link">
                                            Читать дальше
                                            <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1L7 8.63636L1 16" stroke="#1D1919" stroke-width="2" />
                                            </svg>
                                        </a>
                                        <p class="news__date">04.07.2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="news__pagination pagination">
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