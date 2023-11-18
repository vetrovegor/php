<?php get_header(); ?>

        <main class="main">
            <div class="page-header">
                <div class="container">
                    <div class="page-header__inner">
                        <h4 class="page-header__title"><?php the_title(); ?></h4>
                        <h5 class="page-header__subtitle">топ-модель TOP SECRET</h5>
                    </div>
                </div>
            </div>
            <div class="white-separator"></div>
            <div class="bread-crumbs">
                <div class="container">
                    <div class="bread-crumbs__inner">
                        <?php
                        if ( function_exists( 'yoast_breadcrumb' ) ) :
                            yoast_breadcrumb( '<div id="breadcrumbs">', '</div>' );
                        endif;
                        ?>
                    </div>
                </div>
            </div>
            <div class="model">
                <div class="container">
                    <div class="model__inner">
                        <div class="model__image ibg">
                            <img src="<?= get_field("model__image"); ?>" alt="Image">
                        </div>
                        <div class="model__content">
                            <ul class="model__info">
                                <li class="model__item"><b>Возраст: </b><?= get_field("model-age"); ?></li>
                                <li class="model__item"><b>Рост: </b><?= get_field("model-height"); ?></li>
                                <li class="model__item"><b>Волосы: </b><?= get_field("model-hair"); ?></li>
                            </ul>
                            <ul class="model__career">
                                <?php
                                while( have_rows('model__career') ) : the_row();
                                    ?>
                                    <li class="model__item">
                                        <?= get_sub_field("model__item"); ?>
                                        <?php if(get_sub_field("model__career-link") != null) { ?>
                                            <a href="<?php echo get_sub_field("model__career-link"); ?>" class="model__link" target="_blank">
                                                Читать далее
                                                <img src="<?php bloginfo('template_url'); ?>/assets/img/models/red-arrow.svg" alt="arrow">
                                            </a>
                                        <?php } ?>
                                    </li>
                                    <?= get_sub_field('') ?>
                                    <?php
                                endwhile;
                                ?>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="model-photos">
                <div class="container">
                    <div class="model-photos__inner">
                        <div class="model-photos__tabs">
                            <?php
                            $i = 1;
                            while( have_rows('model__photos') ) : the_row();
                                ?>
                                <a href="#" class="model-photos__tab" data-tab="<?php echo $i; ?>"><?= get_sub_field('model__category') ?></a>
                                <?php $i++ ?>
                                <?php
                            endwhile;
                            ?>
                        </div>
                        <?php
                        $i = 1;
                        while( have_rows('model__photos') ) : the_row();
                            ?>
                            <div class="model-photos__items model-light-gallery" data-images="<?php echo $i; ?>">
                                <?php
                                while( have_rows('model__category-images') ) : the_row();
                                    ?>
                                    <div class="model-photos__item">
                                        <a href="<?= get_sub_field('model__category-image') ?>" class="model-photos__image ibg light-gallery__item">
                                            <img src="<?= get_sub_field('model__category-image') ?>" alt="">
                                        </a>
                                    </div>
                                    <?php
                                endwhile;
                                ?>
                            </div>
                            <?php $i++; ?>
                            <?php
                        endwhile;
                        ?>
                    </div>
                </div>
            </div>
        </main>

<?php get_footer(); ?>