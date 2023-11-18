<?php
/*
Template Name: home
*/
?>

<?php get_header(); ?>

		<main class="main lock-padding">
            <section class="main-block">
                <div class="container">
                    <div class="main-block__inner">
                        <div class="main-block__content">
                            <p class="main-block__label label"><?= CFS()->get('main-block__label'); ?></p>
                            <h1 class="main-block__title title"><?= CFS()->get('main-block__title'); ?></h1>
                        </div>
                        <div class="main-block__image-block">
                            <div class="main-block__image ibg">
                                <img src="<?= CFS()->get('main-block__image'); ?>" alt="Image">
                            </div>
                            <p class="main-block__text"><?= CFS()->get('main-block__text'); ?></p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="about-us">
                <div class="container">
                    <div class="about-us__inner left-offset">
                        <h2 class="about-us__title title">
                        <?= CFS()->get('about-us__title'); ?>
                            <span class="about-us__label"><?= CFS()->get('about-us__title-label'); ?></span>
                        </h2>
                        <div class="about-us__content">
                            <div class="about-us__column">
                                <?php
                                    $paragraphs = CFS()->get('about-us__first');
                                    foreach($paragraphs as $p) {
                                        ?>
                                        <p class="about-us__text text">
                                        <?php if($p['about-us__main-suggestion'] != null) { ?>
                                            <b>
                                            <?= $p['about-us__main-suggestion']; ?>
                                            </b>
                                        <?php
                                         } ?>
                                        <?= $p['about-us__text'] ?>
                                        </p>
                                        <?php
                                    }
                                ?>
                                <div class="about-us__image-block">
                                    <div class="about-us__image ibg">
                                        <img src="<?= CFS()->get('about-us__image'); ?>" alt="Image">
                                    </div>
                                    <span class="about-us__label"><?= CFS()->get('about-us__image-label'); ?></span>
                                </div>
                            </div>
                            <div class="about-us__column about-us__column_big">
                                <?php
                                    $paragraphs = CFS()->get('about-us__second');
                                    foreach($paragraphs as $p) {
                                        ?>
                                        <p class="about-us__text text">
                                        <?php if($p['about-us__main-suggestion'] != null) { ?>
                                            <b>
                                            <?= $p['about-us__main-suggestion']; ?>
                                            </b>
                                        <?php
                                         } ?>
                                        <?= $p['about-us__text'] ?>
                                        </p>
                                        <?php
                                    }
                                ?>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="separator separator_1"></div>
            <section class="team border">
                <div class="container">
                    <div class="team__inner left-offset">
                        <h2 class="team__title title">
                        <?= CFS()->get('team__title'); ?>
                            <span class="team__label"><?= CFS()->get('team__label'); ?></span>
                        </h2>
                        <div class="team__content">
                            <p class="team__text text"><?= CFS()->get('team__text'); ?></p>
                            <div class="team__image ibg">
                                <img src="<?= CFS()->get('team__image'); ?>" alt="Image">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="slider-block">
                <div class="slider-block__image ibg">
                    <img src="<?= CFS()->get('slider-block__image'); ?>" alt="Image">
                </div>
                <div class="slider-block__container container">
                    <div class="slider-block__inner">
                        <div class="swiper slider-slider-block">
                            <div class="swiper-wrapper slider-slider-block__wrapper">
                            <?php
                                    $slides = CFS()->get('slider-block__slides');
                                    foreach($slides as $s) {
                                        ?>
                                        <div class="swiper-slide slider-slider-block__slide">
                                            <h4 class="slider-slider-block__title"><?= $s['slider-slider-block__title'] ?></h4>
                                            <h6 class="slider-slider-block__subtitle"><?= $s['slider-slider-block__subtitle'] ?></h6>
                                            <p class="slider-slider-block__text"><?= $s['slider-slider-block__text'] ?></p>
                                        </div>
                                        <?php
                                    }
                            ?>
                            </div>
                            <div class="slider-slider-block__controls">
                                <div class="slider-slider-block__pagination"></div>
                                <div class="slider-slider-block__btn slider-slider-block__btn_prev">
                                    <img src="<?php echo get_template_directory_uri() ?>/assets/img/slider-block/arrow-prev.svg" alt="arrow">
                                </div>
                                <div class="slider-slider-block__btn slider-slider-block__btn_next">
                                    <img src="<?php echo get_template_directory_uri() ?>/assets/img/slider-block/arrow-next.svg" alt="arrow">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="separator separator_2"></div>
            <section class="marketplace border">
                <div class="container">
                    <div class="marketplace__inner left-offset">
                        <h2 class="marketplace__title title"><?= CFS()->get('marketplace__title'); ?></h2>
                        <div class="marketplace__content">
                            <div class="marketplace__text-block">
                                <?php
                                    $paragraphs = CFS()->get('marketplace__paragraphs');
                                    foreach($paragraphs as $p) {
                                        ?>
                                        <div class="marketplace__text-column disabled">
                                            <article class="marketplace__article">
                                                <h4 class="marketplace__label text"><?= $p['marketplace__label'] ?></h4>
                                                <p class="marketplace__text text"><?= $p['marketplace__text'] ?></p>
                                            </article>
                                        </div>
                                        <?php
                                    }
                                ?>
                                <a href="<?= CFS()->get('marketplace__btn-link'); ?>" class="marketplace__link"><?= CFS()->get('marketplace__btn'); ?></a>
                            </div>
                            <div class="marketplace__image ibg" data-da="marketplace__text-column,992,last">
                                <img src="<?= CFS()->get('marketplace__image'); ?>" alt="Image">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="contact">
                <div class="container">
                    <div class="contact__inner">
                        <div class="contact__form">
                            <h2 class="contact__title"><?= CFS()->get('contact__title'); ?></h2>
                            <form action="#" class="form-contact" method="POST">
                                <div class="form-contact__items">
                                    <div class="form-contact__item">
                                        <label for="nameInput" class="form-contact__label"><?= CFS()->get('contact__name-label'); ?></label>
                                        <input id="nameInput" type="text" class="form-contact__input" name="name" placeholder="<?= CFS()->get('contact__name-placeholder'); ?>" required>
                                    </div>
                                    <div class="form-contact__item">
                                        <label for="emailInput" class="form-contact__label"><?= CFS()->get('contact__email-label'); ?></label>
                                        <input id="emailInput" type="email" class="form-contact__input" name="email" placeholder="<?= CFS()->get('contact__email-placeholder'); ?>" required>
                                    </div>
                                    <div class="form-contact__item">
                                        <label for="msgInput" class="form-contact__label"><?= CFS()->get('contact__msg-label'); ?></label>
                                        <textarea name="msg" id="msgInput" class="form-contact__textarea" name="msg"
                                            placeholder="<?= CFS()->get('contact__msg-placeholder'); ?>"></textarea>
                                    </div>
                                </div>
                                <button type="submit" class="form-contact__btn"><?= CFS()->get('contact__btn'); ?></button>
                            </form>
                        </div>
                        <div class="info-contact">
                            <div class="info-contact__item">
                                <p class="info-contact__label"><?= CFS()->get('contact__address-label'); ?></p>
                                <p class="info-contact__text"><?= CFS()->get('contact__address'); ?></p>
                            </div>
                            <div class="info-contact__item">
                                <p class="info-contact__label"><?= CFS()->get('contact__hours-label'); ?></p>
                                <p class="info-contact__text"><?= CFS()->get('contact__hours'); ?></p>
                            </div>
                            <div class="info-contact__item">
                                <p class="info-contact__label small"><?= CFS()->get('contact__tel-label'); ?><a href="tel:<?= CFS()->get('contact__tel-numbers'); ?>"
                                        class="info-contact__text info-contact__tel"><?= CFS()->get('contact__tel'); ?></a></p>
                            </div>
                            <div class="info-contact__item">
                                <p class="info-contact__label small"><?= CFS()->get('contact__mail-label'); ?><a href="mailto:<?= CFS()->get('contact__email'); ?>"
                                        class="info-contact__text"><?= CFS()->get('contact__email'); ?></a></p>
                            </div>
                            <div class="info-contact__map">
                                <?= CFS()->get('contact__map'); ?>
                                <!-- <div id="map" class="map" data-latitude="<?= CFS()->get('contact__latitude'); ?>" data-longitude="<?= CFS()->get('contact__longitude'); ?>" data-zoom="<?= CFS()->get('zoom'); ?>"></div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="separator separator_3"></div>
            <section class="partners border">
                <h2 class="partners__title title"><?= CFS()->get('partners__title'); ?></h2>
                <div class="partners__marquee">
                    <?php
                    for($i = 0; $i < 2; $i++) { ?>
                        <div class="partners__items">
                            <?php
                            $items = CFS()->get('partners__items');
                            foreach($items as $el) { ?>
                                <div class="partners__item"><img src="<?= $el['partners__item'] ?>" alt="Logo"></div>
                                <?php
                            } ?>
                        </div>
                        <?php
                    } ?>
                </div>
            </section>
        </main>
        
<?php get_footer(); ?>