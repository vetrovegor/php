<?php get_header() 

/*
Template Name: reviews
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
                        <p>Отзывы</p>
                    </div>
                </div>
            </div>
            <section class="reviews">
                <div class="container">
                    <div class="reviews__inner">
                        <h1 class="reviews__title title"><?= get_field("reviews-title"); ?></h1>
                        <p class="reviews__text"><?= get_field("reviews-text"); ?></p>
                        <div class="reviews__items">
                            <?php
                            $btn = get_field("reviews-btn");
                            
                            while( have_rows("reviews") ) : the_row();
                                $post_object = get_sub_field("reviews");

                                if( $post_object ): 
                                    $post = $post_object;
                                    setup_postdata( $post ); ?>

                                    <div class="reviews__item item">
                                        <div class="reviews__image ibg">
                                            <img src="<?= get_field("photo"); ?>" alt="image">
                                        </div>
                                        <div class="reviews__content">
                                            <p class="reviews__name"><?php the_title(); ?></p>
                                            <p class="reviews__city dim">г. Ставрополь</p>
                                            <div class="reviews__review reviews__review_cut"><?php the_content(); ?></div>
                                            <button class="reviews__more-link more-link">
                                                <?= $btn ?>
                                                <svg width="9" height="17" viewBox="0 0 9 17" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1L7 8.63636L1 16" stroke="#1D1919" stroke-width="2" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <?php wp_reset_postdata();  ?>
                                <?php endif; ?>
                                <?php
                            endwhile;
                            ?>
                        </div>
                        <div class="reviews__video video">
                            <?= get_field("reviews-video"); ?>
                        </div>
                    </div>
                </div>
            </section>
            <section class="write">
                <div class="container">
                    <div class="write__inner">
                        <h2 class="write__title title"><?= get_field("write-title"); ?></h2>
                        <form action="#" class="write__form">
                            <div class="write__inputs">
                                <div class="write__input-inner input-inner">
                                    <input type="text" class="input" placeholder="Ваше имя">
                                </div>
                                <div class="write__input-inner input-inner">
                                    <input type="text" class="input" placeholder="Телефон или e-mail">
                                </div>
                                <div class="write__input-inner input-inner">
                                    <input type="text" class="input" placeholder="Город">
                                </div>
                            </div>
                            <div class="write__block write__block_textarea">
                                <p class="write__caption">Ваш отзыв:</p>
                                <textarea class="write__textarea textarea"></textarea>
                            </div>
                            <div class="write__block write__block_file">
                                <p class="write__caption">Прикрепить фото:</p>
                                <div class="write__file-inner">
                                    <label class="write__file-btn btn" for="file-input">Выберите файл</label>
                                    <input type="file" accept="image/*" id="file-input" class="write__file-input">
                                    <p class="write__fine-name dim">Файл не найден</p>
                                </div>
                            </div>
                            <div class="write__checkbox-inner">
                                <input type="checkbox" class="checkbox" id="agree">
                                <label for="agree" class="write__label label label_checkbox">
                                    <span>Я согласен с <a href="<?= get_page_link(34); ?>" class="order__agree">политикой обработки персональных данных</a></span>
                                </label>
                            </div>
                            <button class="write__btn btn">Добавить отзыв</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>

<?php get_footer() ?>