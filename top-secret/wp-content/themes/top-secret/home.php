<?php
/*
Template Name: home
*/
?>

<?php get_header(); ?>
        <main class="main">
            <div class="main-screen ibg">
                <img src="<?= get_field("main-screen__image"); ?>" alt="background">
            </div>
            <section class="about-us">
                <div class="container">
                    <div class="about-us__inner">
                        <div class="about-us__content">
                            <h1 class="about-us__title title"><?= get_field("about-us__title"); ?></h1>
                            <div class="about-us__text-block">
                                <?php
                                    if( have_rows('about-us__text-block') ):
                                        while( have_rows('about-us__text-block') ) : the_row();
                                            ?>
                                            <div class="about-us__text text"><?= get_sub_field('about-us__text', 11); ?></div>
                                            <?php
                                        endwhile;
                                    endif;
                                ?>
                            </div>
                        </div>
                        <div class="about-us__image ibg">
                            <img src="<?= get_field("about-us__image"); ?>" alt="Image">
                        </div>
                    </div>
                </div>
            </section>
            <section class="directions">
                <div class="container">
                    <div class="directions__inner">
                        <?php
                            $i = 1;
                            while( have_rows('directions__items') ) : the_row(); ?>
                                <div class="directions__item">
                                    <div class="directions__content directions__content_<?= $i ?>">
                                        <h2 class="directions__title title"><?= get_sub_field('directions__title') ?></h2>
                                        <div class="directions__text-block">
                                            <?php
                                                while( have_rows('directions__paragraphs') ) : the_row();
                                                    ?>
                                                    <div class="directions__text text"><?= get_sub_field('directions__text') ?></div>
                                                    <?php
                                                endwhile;
                                            ?>
                                        </div>
                                        <a href="#" class="directions__btn">
                                            <?= get_sub_field('directions__btn-text') ?>
                                            <img src="<?php bloginfo('template_url'); ?>/assets/img/direction/arrow.svg" alt="arrow">
                                        </a>
                                    </div>
                                    <div class="directions__image ibg" data-da="directions__content_<?= $i ?>, 767, 1">
                                        <img src="<?= get_sub_field('directions__image') ?>" alt="Image">
                                    </div>
                                </div>
                                <?php
                                $i++;
                            endwhile;
                        ?>
                    </div>
                </div>
            </section>
            <section class="reasons">
                <div class="container">
                    <div class="reasons__inner">
                        <h4 class="reasons__title title"><?= get_field("reasons__title"); ?></h4>
                        <div class="reasons__items">
                            <?php
                                while( have_rows('reasons__items') ) : the_row();
                                    ?>
                                    <div class="reasons__item">
                                        <span class="reasons__circles"></span>
                                        <h6 class="reasons__label text"><?= get_sub_field('reasons__label') ?></h6>
                                        <p class="reasons__text text"><?= get_sub_field('reasons__text') ?></p>
                                    </div>
                                    <?php
                                endwhile;
                            ?>
                        </div>
                    </div>
                </div>
            </section>
            <section class="projects">
                <div class="container">
                    <div class="projects__inner">
                        <div class="projects__content">
                            <h2 class="projects__title title deco"><?= get_field("projects__title"); ?></h2>
                            <ul class="projects__list">
                                <?php
                                    while( have_rows('projects__list') ) : the_row();
                                        ?>
                                        <li class="projects__item"><?= get_sub_field('projects__item') ?></li>
                                        <?php
                                    endwhile;
                                ?>
                            </ul>
                        </div>
                        <div class="projects__image ibg">
                            <img src="<?= get_field("projects__image"); ?>" alt="Image">
                        </div>
                    </div>
                </div>
            </section>
            <section class="additional">
                <div class="container">
                    <div class="additional__inner">
                        <div class="additional__content">
                            <h2 class="additional__title title deco"><?= get_field("additional__title"); ?></h2>
                            <ul class="additional__list">
                                <?php
                                    while( have_rows('additional__list') ) : the_row();
                                        ?>
                                        <li class="additional__item"><?= get_sub_field('additional__item') ?></li>
                                        <?php
                                    endwhile;
                                ?>
                            </ul>
                        </div>
                        <div class="additional__image ibg">
                            <img src="<?= get_field("additional__image"); ?>" alt="Image">
                        </div>
                    </div>
                </div>
            </section>
            <section class="algorithm">
                <div class="algorithm__container container">
                    <div class="algorithm__inner">
                        <h2 class="algorithm__title title"><?= get_field("algorithm__title"); ?></h2>
                        <div class="algorithm__items">
                            <?php
                                while( have_rows('algorithm__items') ) : the_row();
                                    ?>
                                        <div class="algorithm__item">
                                            <p class="algorithm__text text"><?= get_sub_field('algorithm__text') ?></p>
                                        </div>
                                    <?php
                                endwhile;
                            ?>
                        </div>
                    </div>
                </div>
            </section>
            <? include 'trust.php' ?>
            <section class="events">
                <div class="container">
                    <div class="events__inner">
                        <h2 class="events__title title deco">Новости. События из жизни агентства и школы</h2>
                        <div class="events__items">
                            <div class="events__slider-block">
                                <div class="swiper events-slider">
                                    <div class="swiper-wrapper">
                                        <?php
                                        $post_object = get_field('events__news');

                                        if( $post_object ): 
                                            $post = $post_object;
                                            setup_postdata( $post ); ?>
                                            
                                            <?php
                                            while( have_rows('news__images') ) : the_row();
                                                ?>
                                                <div class="swiper-slide events-slider__slide">
                                                    <div class="events-slider__image ibg">
                                                        <img src="<?= get_sub_field('image') ?>" alt="Image">
                                                    </div>
                                                </div>
                                                
                                                <?php
                                            endwhile;
                                            ?>

                                            <?php wp_reset_postdata();  ?>
                                        <?php endif; ?>
                                    </div>
                                </div>
                                <div class="events-slider__btns">
                                    <div class="events-slider__btn events-slider__btn-prev slider-btn slider-btn_black">
                                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <line x1="1" y1="-1" x2="5.60906" y2="-1"
                                                transform="matrix(-0.701295 0.712871 -0.701295 -0.712871 4.85693 0.11377)"
                                                stroke="black" stroke-width="2" stroke-linecap="round" />
                                            <line x1="1" y1="-1" x2="5.09226" y2="-1"
                                                transform="matrix(0.633987 0.773343 -0.763034 0.646358 0.221924 4.8252)"
                                                stroke="black" stroke-width="2" stroke-linecap="round" />
                                        </svg>
                                    </div>
                                    <div class="events-slider__btn events-slider__btn-next slider-btn slider-btn_black">
                                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <line x1="1" y1="-1" x2="5.60906" y2="-1"
                                                transform="matrix(0.701295 0.712871 0.701295 -0.712871 1.14307 0.11377)"
                                                stroke="black" stroke-width="2" stroke-linecap="round" />
                                            <line x1="1" y1="-1" x2="5.09226" y2="-1"
                                                transform="matrix(-0.633987 0.773343 0.763034 0.646358 5.77783 4.8252)"
                                                stroke="black" stroke-width="2" stroke-linecap="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="events__column">
                                <div class="content-events">
                                    <?php

                                    $post_object = get_field('events__news');

                                    if( $post_object ):
                                        $post = $post_object;
                                        setup_postdata( $post ); ?>

                                        <h4 class="content-events__label"><?php the_title(); ?></h4>
                                        <div class="content-events__date text"><?php the_content(); ?></div>
                                        <a href="<?php the_permalink(); ?>" class="content-events__link">
                                            Читать далее
                                            <svg width="30" height="8" viewBox="0 0 30 8" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M29.3536 4.35355C29.5488 4.15829 29.5488 3.84171 29.3536 3.64645L26.1716 0.464466C25.9763 0.269204 25.6597 0.269204 25.4645 0.464466C25.2692 0.659728 25.2692 0.976311 25.4645 1.17157L28.2929 4L25.4645 6.82843C25.2692 7.02369 25.2692 7.34027 25.4645 7.53553C25.6597 7.7308 25.9763 7.7308 26.1716 7.53553L29.3536 4.35355ZM0 4.5H29V3.5H0V4.5Z"
                                                    fill="#D02A2A" />
                                            </svg>
                                        </a>

                                        <?php wp_reset_postdata(); ?>
                                    <?php endif; ?>
                                </div>
                                <a href="news" class="events__link">Все новости</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="partners">
                <div class="container">
                    <div class="partners__inner">
                        <h2 class="partners__title title deco"><?= get_field("partners__title"); ?></h2>
                        <?php
                            while( have_rows('partners__sections') ) : the_row();
                            ?>
                                <div class="partners__section">
                                    <h4 class="partners__label title"><?= get_sub_field('partners__label') ?></h4>
                                    <div class="partners__items">
                                        <?php
                                            while(have_rows('partners__items')) : the_row();
                                                ?>
                                                <div class="partners__logo">
                                                    <img src="<?= get_sub_field('partners__logo') ?>" alt="logo">
                                                </div>
                                                <?php
                                            endwhile;
                                        ?>
                                    </div>
                                </div>
                            <?php
                        endwhile;
                        ?>
                    </div>
                </div>
            </section>
            <section class="contact-us">
                <div class="container">
                    <div class="contact-us__inner">
                        <div class="contact-us__content">
                            <h2 class="contact-us__title"><?= get_field("contact-us__title"); ?></h2>
                            <p class="contact-us__text text"><?= get_field("contact-us__text_1"); ?> <a href="tel:<?= get_field("clear-tel", 11); ?>"><?= get_field("tel", 11); ?></a> <?= get_field("contact-us__text_2"); ?> <b><a href="mailto:<?= get_field("email"); ?>"><?= get_field("email"); ?></a></b></p>
                        </div>
                        <div class="contact-us__image ibg">
                            <img src="<?= get_field("contact-us__image"); ?>" alt="Image">
                        </div>
                    </div>
                </div>
            </section>
        </main>

<?php get_footer(); ?>