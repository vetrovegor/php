<?php
/*
Template Name: page-news
*/
?>

<?php get_header(); ?>

<main class="main">
            <div class="page-header">
                <div class="container">
                    <div class="page-header__inner">
                        <h4 class="page-header__title">Новости</h4>
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
            <div class="news-page">
                <div class="container">
                    <div class="news-page__inner">
                        <?php if ( have_posts() ) : query_posts(array('posts_per_page' => -1, 'cat' => 3)); ?>
                            <?php while (have_posts()) : the_post(); ?>
                                <div class="news-page__item">
                                    <a href="<?php the_permalink(); ?>" class="news-page__image ibg">
                                        <?php
                                        $i = 0;
                                        while( have_rows('news__images') && $i < 1) : the_row();
                                            ?>
                                            <img src="<?= get_sub_field('image') ?>" alt="Image">
                                            <?php
                                            $i++;
                                        endwhile;
                                        ?>
                                    </a>
                                    <a href="<?php the_permalink(); ?>" class="news-page__title"><?php the_title(); ?></a>
                                    <p class="news-page__date"><?php the_content(); ?></p>
                                </div>
                            <?php endwhile; ?>
                        <?php endif; wp_reset_query(); ?>
                    </div>
                </div>
            </div>
        </main>

<?php get_footer(); ?>