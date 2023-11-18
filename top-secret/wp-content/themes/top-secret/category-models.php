<?php
/*
Template Name: page-models
*/
?>

<?php get_header(); ?>

<main class="main">
            <div class="page-header">
                <div class="container">
                    <div class="page-header__inner">
                        <h4 class="page-header__title">Модели</h4>
                        <h6 class="page-header__subtitle">TOP SECRET</h6>
                    </div>
                </div>
            </div>
            <section class="models">
                <div class="container">
                    <div class="models__inner">
                        <aside class="sidebar-models">
                            <a href="#" class="sidebar-models__label sidebar-models__label_main sidebar-models-open-btn">
                            <?= get_field("sidebar-models__title", 38); ?>
                                <img src="<?php bloginfo('template_url'); ?>/assets/img/models/arrow.svg" alt="arrow">
                            </a>
                            <div class="sidebar-models__inner">
                                <div class="sidebar-models__model-types">
                                    <?php
                                    while( have_rows('sidebar-models__category', 38) ) : the_row();
                                        ?>
                                        <a href="#" class="sidebar-models__model-type"><?= get_sub_field('category') ?></a>
                                        <?php
                                    endwhile;
                                    ?>
                                </div>
                                <p class="sidebar-models__label"><?= get_field("sidebar-models__label", 38); ?></p>
                                <div class="sidebar-models__filters">
                                    <?php
                                    while( have_rows('sidebar-models__filters', 38) ) : the_row();
                                        ?>
                                            <a href="#" class="sidebar-models__filter sidebar-models-open-btn">
                                                <?= get_sub_field('filter-name') ?>                                                
                                                <img src="<?php bloginfo('template_url'); ?>/assets/img/models/triangle.svg" alt="arrow">
                                            </a>
                                            <div class="sidebar-models__filter-items">
                                                <?php
                                                while( have_rows('sidebar-models__filter-items') ) : the_row();
                                                    ?>
                                                    <a href="#" class="sidebar-models__filter-item"><?= get_sub_field('sidebar-models__filter-item') ?></a>
                                                    <?php
                                                endwhile;
                                                ?>
                                            </div>
                                        <?php
                                    endwhile;
                                    ?>
                                </div>
                            </div>
                        </aside>
                        <div class="models__items">
                            <?php if ( have_posts() ) : query_posts(array('posts_per_page' => -1, 'cat' => 5)); ?>
                                <?php while (have_posts()) : the_post(); ?>
                                    <div class="models__item">
                                        <a href="<?php the_permalink(); ?>" class="models__image ibg">
                                            <img src="<?= get_field("model__image"); ?>" alt="Image">
                                        </a>
                                        <div class="models__name">
                                            <a href="<?php the_permalink(); ?>" class="models__link"><?php the_title(); ?></a>
                                        </div>
                                    </div>
                                <?php endwhile; ?>
                            <?php endif; wp_reset_query(); ?>
                        </div>
                    </div>
                </div>
            </section>
        </main>

<?php get_footer(); ?>