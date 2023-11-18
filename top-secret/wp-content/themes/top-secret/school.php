<?php
/*
Template Name: school
*/
?>

<?php get_header(); ?>

<main class="main lock-padding">
            <section class="school ibg">
                <div class="container">
                    <div class="school__inner">
                        <h1 class="school__title title"><?= get_field("school__title"); ?></h1>
                        <h4 class="school__subtitle"><?= get_field("school__subtitle"); ?></h4>
                        <p class="school__text"><?= get_field("school__text"); ?></p>
                        <div class="school__text-block deco">
                            <p class="school__anounce"><?= get_field("school__anounce"); ?></p>
                            <p class="school__dates"><?= get_field("school__dates"); ?></p>
                        </div>
                        <a href="<?= get_field("school__btn-link"); ?>" class="school__btn request-popup-btn"><?= get_field("school__btn"); ?></a>
                    </div>
                </div>
                <div class="school__image ibg">
                    <img src="<?= get_field("school__image"); ?>" alt="Background">
                </div>
            </section>
            <div class="history">
                <div class="container">
                    <div class="history__inner">
                    <?php
                        while( have_rows('history__items') ) : the_row();
                            ?>
                            <div class="history__text"><?= get_sub_field('history__item'); ?></div>
                            <?php
                        endwhile;
                        ?>
                    </div>
                </div>
            </div>
            <section class="study">
                <div class="container">
                    <div class="study__inner">
                        <div class="study__imgae ibg">
                            <img src="<?= get_field("study__image"); ?>" alt="Image">
                        </div>
                        <div class="study__content">
                            <h2 class="study__title title"><?= get_field("study__title"); ?></h2>
                            <ul class="study__list">
                                <?php
                                while( have_rows('study__items') ) : the_row();
                                    ?>
                                        <li class="study__item">
                                            <p class="study__label"><?= get_sub_field('study__label') ?></p>
                                            <p class="study__text text"><?= get_sub_field('study__text') ?></p>
                                        </li>
                                    <?php
                                endwhile;
                                ?>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section class="why-we">
                <div class="why-we__container container">
                    <div class="why-we__inner">
                        <h2 class="why-we__title title"><?= get_field("why-we__title"); ?></h2>
                        <p class="why-we__advantage text"><?= get_field("why-we__advantage"); ?></p>
                        <div class="why-we__advantages">
                        <?php
                            while( have_rows('why-we__list') ) : the_row();
                                ?>
                                <p class="why-we__advantage text"><?= get_sub_field('why-we__item') ?></p>
                                <?php
                            endwhile;
                        ?>
                        </div>
                        <div class="why-we__text-block deco">
                            <p class="why-we__label"><?= get_field("why-we__label"); ?></p>
                            <p class="why-we__text text"><?= get_field("why-we__sublabel"); ?></p>
                        </div>
                        <div class="why-we__items">
                            <?php
                                while( have_rows('why-we__items') ) : the_row();
                                    ?>
                                    <div class="item-why-we">
                                        <span class="item-why-we__circles"></span>
                                        <p class="item-why-we__label text"><?= get_sub_field('why-we__item-label') ?></p>
                                        <p class="item-why-we__text text"><?= get_sub_field('why-we__item-text') ?></p>
                                    </div>
                                    <?php
                                endwhile;
                            ?>
                        </div>
                        <a href="#" class="why-we__btn red-btn request-popup-btn"><?= get_field("why-we__btn"); ?></a>
                    </div>
                </div>
            </section>
            <section class="skills">
                <div class="container">
                    <div class="skills__inner">
                        <h2 class="skills__title title"><?= get_field("skills__title"); ?></h2>
                        <div class="skills__items">
                        <?php
                        while( have_rows('skills__items') ) : the_row();
                            ?>
                            <div class="skills__item text"><?= get_sub_field('skills__item') ?></div>
                            <?php
                        endwhile;
                        ?>
                        </div>
                    </div>
                </div>
            </section>
            <section class="faq">
                <div class="container">
                    <div class="faq__inner">
                        <h2 class="faq__title title deco"><?= get_field("faq__title"); ?></h2>
                        <div class="faq__content">
                            <?php
                            while( have_rows('faq__items') ) : the_row();
                                ?>
                                <a href="#" class="faq__question text">
                                    <?= get_sub_field('faq__question') ?>
                                    <svg width="33" height="17" viewBox="0 0 33 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M32.113 16.4085L16.5566 0.999947L1.00029 16.4085" stroke="black"/>
                                    </svg>
                                </a>
                                <p class="faq__answer text"><?= get_sub_field('faq__answer') ?></p>
                                <?php
                            endwhile;
                            ?>
                        </div>
                    </div>
                </div>
            </section>
            <section class="price">
                <div class="container">
                    <div class="price__inner">
                        <h2 class="price__title title deco"><?= get_field("price__title"); ?></h2>
                        <div class="price__items">
                        <?php
                        while( have_rows('price__items') ) : the_row();
                            ?>
                            <div class="item-price">
                                <div class="item-price__header">
                                    <div class="item-price__fare title">
                                        <p class="item-price__fare-name"><?= get_sub_field('item-price__fare-name') ?></p>
                                        <p class="item-price__fare-price"><?= get_sub_field('item-price__fare-price') ?></p>
                                    </div>
                                </div>
                                <div class="item-price__content">
                                    <ul class="item-price__list">
                                        <?php
                                        while( have_rows('item-price__main-list') ) : the_row();
                                            ?>
                                            <li class="item-price__item"><?= get_sub_field('item-price__item') ?></li>
                                            <?php
                                        endwhile;
                                        ?>
                                    </ul>
                                    <ul class="item-price__list">
                                        <?php
                                        while( have_rows('item-price__opt-list') ) : the_row();
                                            ?>
                                            <li class="item-price__item"><?= get_sub_field('item-price__item') ?></li>
                                            <?php
                                        endwhile;
                                        ?>
                                    </ul>
                                </div>
                            </div>
                            <?php
                        endwhile;
                        ?>
                        </div>
                        <a href="#" class="price__btn red-btn request-popup-btn"><?= get_field("price__btn"); ?></a>
                    </div>
                </div>
            </section>
            <section class="defile-school">
                <div class="container">
                    <div class="defile-school__inner">
                        <h2 class="defile-school__title title"><?= get_field("defile-school__title"); ?></h2>
                        <h5 class="defile-school__subtitle title"><?= get_field("defile-school__subtitle"); ?></h5>
                        <div class="defile-school__image ibg">
                            <img src="<?= get_field("defile-school__image"); ?>" alt="Image">
                            <div class="defile-school__label"><?= get_field("defile-school__label"); ?></div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="about-course">
                <div class="container">
                    <div class="about-course__inner">
                        <div class="about-course__columns">
                            <div class="about-course__column">
                            <?php
                            while( have_rows('about-course__left') ) : the_row();
                                ?>
                                <div class="about-course__text-block">
                                    <?php
                                    if(get_sub_field('about-course__label') != null) { ?>
                                        <h4 class="about-course__label title deco"><?= get_sub_field('about-course__label') ?></h4>
                                    <?php } ?>
                                    <ul class="about-course__list">
                                        <?php
                                        while( have_rows('about-course__list') ) : the_row();
                                            ?>
                                            <li class="about-course__item"><?= get_sub_field('about-course__item') ?></li>
                                            <?php
                                        endwhile;
                                        ?>
                                    </ul>
                                </div>
                                <?php
                            endwhile;
                            ?>
                            </div>
                            <div class="about-course__column about-course__column_big">
                                <div class="about-course__image ibg">
                                    <img src="<?= get_field("about-course__image"); ?>" alt="Image">
                                </div>
                                <?php
                            while( have_rows('about-course__right') ) : the_row();
                                ?>
                                <div class="about-course__text-block">
                                    <?php
                                    if(get_sub_field('about-course__label') != null) { ?>
                                        <h4 class="about-course__label title deco"><?= get_sub_field('about-course__label') ?></h4>
                                    <?php } ?>
                                    <ul class="about-course__list">
                                        <?php
                                        while( have_rows('about-course__list') ) : the_row();
                                            ?>
                                            <li class="about-course__item"><?= get_sub_field('about-course__item') ?></li>
                                            <?php
                                        endwhile;
                                        ?>
                                    </ul>
                                </div>
                                <?php
                            endwhile;
                            ?>
                            </div>
                        </div>
                        <a href="#" class="about-course__btn red-btn request-popup-btn"><?= get_field("about-course__btn"); ?></a>
                    </div>
                </div>
            </section>
            <div class="creator">
                <div class="creator__container container">
                    <div class="creator__inner">
                        <div class="creator__image ibg">
                            <img src="<?= get_field("creator__image"); ?>" alt="Image">
                        </div>
                        <div class="creator__content">
                            <div class="creator__header">
                                <h4 class="creator__name title"><?= get_field("creator__name"); ?></h4>
                                <p class="creator__info text"><?= get_field("creator__info"); ?></p>
                            </div>
                            <div class="creator__text-block">
                                <ul class="creator__list">
                                    <?php
                                    while( have_rows('creator__list') ) : the_row();
                                        ?>
                                        <li class="creator__item text"><?= get_sub_field('creator__item') ?></li>
                                        <?php
                                    endwhile;
                                    ?>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <? include 'trust.php' ?>
            <section class="price defile-price">
                <div class="container">
                    <div class="price__inner">
                        <h2 class="price__title title deco"><?= get_field("defile-price__title"); ?></h2>
                        <div class="price__items">
                        <?php
                        while( have_rows('defile-price__items') ) : the_row();
                            ?>
                            <div class="item-price">
                                <div class="item-price__header">
                                    <div class="item-price__fare title">
                                        <p class="item-price__fare-name"><?= get_sub_field('item-price__fare-name') ?></p>
                                        <p class="item-price__fare-price"><?= get_sub_field('item-price__fare-price') ?></p>
                                    </div>
                                </div>
                                <div class="item-price__content">
                                    <ul class="item-price__list">
                                        <?php
                                        while( have_rows('item-price__main-list') ) : the_row();
                                            ?>
                                            <li class="item-price__item"><?= get_sub_field('item-price__item') ?></li>
                                            <?php
                                        endwhile;
                                        ?>
                                    </ul>
                                    <ul class="item-price__list">
                                        <?php
                                        while( have_rows('item-price__opt-list') ) : the_row();
                                            ?>
                                            <li class="item-price__item"><?= get_sub_field('item-price__item') ?></li>
                                            <?php
                                        endwhile;
                                        ?>
                                    </ul>
                                </div>
                            </div>
                            <?php
                        endwhile;
                        ?>
                        </div>
                        <a href="#" class="price__btn red-btn request-popup-btn"><?= get_field("defile-price__btn"); ?></a>
                    </div>
                </div>
            </section>
            <section class="request">
                <div class="container">
                    <div class="request__inner">
                        <div class="request__image-block">
                            <div class="request__image ibg">
                                <img src="<?= get_field("request__image"); ?>" alt="Image">
                            </div>
                            <a href="<?= get_site_url(); ?>" class="request__logo logo">
                                <img src="<?= get_field("site-logo", 11); ?>" alt="logo">
                            </a>
                        </div>
                        <div class="request__content">
                            <h2 class="request__title"><?= get_field("request__title"); ?></h2>
                            <p class="request__text text"><?= get_field("request__text"); ?></p>
                            <form action="#" class="request__form">
                                <input type="tel" class="request__input" name="tel" placeholder="<?= get_field("request__placeholder"); ?>" required>
                                <button type="submit" class="request__btn"><?= get_field("request__btn"); ?></button>
                                <div class="request__checkbox">
                                    <input type="checkbox" id="requestCheckbox">
                                    <label for="requestCheckbox" class="request__label text"><?= get_field("request__label"); ?></label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>

<?php get_footer(); ?>