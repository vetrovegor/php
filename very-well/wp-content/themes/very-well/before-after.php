<?php get_header() 

/*
Template Name: before-after
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
                        <p>До и после</p>
                    </div>
                </div>
            </div>
            <section class="before-after">
                <div class="container">
                    <div class="before-after__inner">
                        <p class="before-after__title before-after__title_hidden title">До и после</p>
                        <div class="before-after__columns">
                            <div class="before-after__column before-after__column_content">
                                <h1 class="before-after__title title"><?= get_field("title"); ?></h1>
                                <div class="before-after__text-block">
                                    <?= get_field("text-1"); ?>
                                </div>
                                <a href="<?= get_field("btn-link"); ?>" class="before-after__btn btn"><?= get_field("btn-text"); ?></a>
                            </div>
                            <?php
                            while( have_rows("images") ) : the_row();
                                ?>
                                <div class="before-after__column before-after__column_card">
                                    <div class="before-after__image ibg">
                                        <img src="<?= get_sub_field("image") ?>" alt="image">
                                    </div>
                                    <p class="before-after__caption"><?= get_sub_field("text") ?></p>
                                </div>
                                <?php
                            endwhile;
                            ?>
                        </div>
                    </div>
                </div>
            </section>
            <div class="difference">
                <div class="container">
                    <div class="difference__inner">
                        <div class="difference__image ibg">
                            <img src="<?= get_field("image-before"); ?>" alt="image">
                            <img src="<?= get_field("image-after"); ?>" alt="image">
                        </div>
                        <div class="swiper difference__swiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide difference__slide ibg">
                                    <img src="<?= get_field("image-before"); ?>" alt="image">
                                    <div class="difference__label difference__label_before">До</div>
                                </div>
                                <div class="swiper-slide difference__slide ibg">
                                    <img src="<?= get_field("image-after"); ?>" alt="image">
                                    <div class="difference__label difference__label_after">После</div>
                                </div>
                            </div>
                            <div class="difference__pagination slider-pagination"></div>
                        </div>
                        <p class="difference__text"><?= get_field("text-2"); ?></p>
                        <a href="<?= get_field("btn-link"); ?>" class="difference__btn btn"><?= get_field("btn-text"); ?></a>
                    </div>
                </div>
            </div>
        </main>

<?php get_footer() ?>