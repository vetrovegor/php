<?php
/*
Template Name: trust
*/
?>

<section class="trust">
                <div class="container">
                    <div class="trust__inner">
                        <h2 class="trust__title title"><?= get_field("trust__title", 190); ?></h2>
                        <div class="trust__slider-block">
                            <div class="trust-slider__btn trust-slider__btn-prev slider-btn slider-btn">
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
                            <div class="swiper trust-slider">
                                <div class="swiper-wrapper">
                                <?php
                                    while( have_rows('trust-slider__slides', 190) ) : the_row();
                                        ?>
                                        <div class="swiper-slide trust-slider__slide">
                                            <div class="trust-slider__person">
                                                <div class="trust-slider__photo ibg">
                                                    <img src="<?= get_sub_field('trust-slider__photo') ?>" alt="Photo">
                                                </div>
                                                <div class="trust-slider__content">
                                                    <p class="trust-slider__name"><?= get_sub_field('trust-slider__name', 190) ?></p>
                                                    <p class="trust-slider__profession"><?= get_sub_field('trust-slider__profession', 190) ?></p>
                                                </div>
                                            </div>
                                            <p class="trust-slider__text text"><?= get_sub_field('trust-slider__text', 190) ?></p>
                                        </div>
                                        <?php
                                    endwhile;
                                    ?>
                                </div>
                            </div>
                            <div class="trust-slider__btn trust-slider__btn-next slider-btn slider-btn">
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
                        <div class="trust-slider__dots"></div>
                    </div>
                </div>
            </section>