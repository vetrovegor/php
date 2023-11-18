<?php
/*
Template Name: contacts
*/
?>

<?php get_header(); ?>

<main class="main">
            <div class="page-header">
                <div class="container">
                    <div class="page-header__inner">
                        <h4 class="page-header__title">Контакты</h4>
                    </div>
                </div>
            </div>
            <div class="white-separator"></div>
            <section class="location">
                <div class="location__bg ibg">
                    <img src="<?= get_field("location__image"); ?>" alt="Background">
                </div>
                <div class="container location__container">
                    <div class="location__inner">
                        <div class="location__headline deco">
                            <h2 class="location__title"><?= get_field("location__title"); ?></h2>
                            <h4 class="location__subtitle"><?= get_field("location__subtitle"); ?></h4>
                        </div>
                        <ul class="location__content">
                        <?php
                        while( have_rows('location__content') ) : the_row();
                            ?>
                            <li class="location__text text"><?= get_sub_field('location__text') ?></li>
                            <?php
                        endwhile;
                        ?>
                        </ul>
                        <div class="location__contacts">
                            <a href="tel:<?= get_field("clear-tel", 11); ?>" class="location__contact"><?= get_field("tel", 11); ?></a>
                            <a href="mailto:<?= get_field("email", 11); ?>" class="location__contact"><?= get_field("email", 11); ?></a>
                        </div>
                    </div>
                </div>
            </section>
            <div class="location-map">
                <div class="container location__container">
                    <div class="location-map__inner ibg"><?= get_field("location__map"); ?></div>
                </div>
            </div>
        </main>

<?php get_footer(); ?>