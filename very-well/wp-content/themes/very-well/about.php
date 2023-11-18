<?php get_header() 

/*
Template Name: about
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
                        <p>О компании</p>
                    </div>
                </div>
            </div>
            <section class="about">
                <div class="container">
                    <div class="about__inner">
                        <h1 class="about__title title"><?= get_field("title-1"); ?></h1>
                        <div class="advantages__inner">
                            <?php
                            while( have_rows("blocks") ) : the_row();
                                ?>
                                <div class="advantages__item<?php if(get_sub_field("bg") == 1) { echo " advantages__item_even"; } else if(get_sub_field("bg") == 0) { echo " advantages__item_odd"; } ?>">
                                    <div class="advantages__image ibg">
                                        <img src="<?= get_sub_field("image") ?>" alt="image">
                                    </div>
                                    <div class="advantages__content">
                                        <p class="advantages__title advantages__title_about title"><?= get_sub_field("title") ?></p>
                                        <div class="advantages__text-block">
                                            <?= get_sub_field("text") ?>
                                        </div>
                                    </div>
                                </div>
                                <?php
                            endwhile;
                            ?>
                        </div>
                    </div>
                </div>
            </section>
            <section class="docs">
                <div class="container">
                    <div class="docs__inner">
                        <h2 class="docs__title title"><?= get_field("title-2"); ?></h2>
                        <div class="docs__images">
                            <img src="<?= get_field("image-1"); ?>" alt="doc" class="docs__image">
                            <img src="<?= get_field("image-2"); ?>" alt="doc" class="docs__image">
                        </div>
                    </div>
                </div>
            </section>
        </main>

<?php get_footer() ?>