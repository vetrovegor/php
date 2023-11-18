<?php get_header(); ?>

 <main class="main">
            <div class="light-gallery">
                <?php
                while( have_rows('teacher__images')) : the_row();
                    ?>
                    <img src="<?= get_sub_field('image'); ?>" alt="Image" class="light-gallery__item">
                    <?php
                endwhile;
                ?>
            </div>
            <div class="page-header">
                <div class="container">
                    <div class="page-header__inner">
                        <h4 class="page-header__title">Преподаватели</h4>
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
            <div class="teacher">
                <div class="container">
                    <div class="teacher__inner">
                        <div class="teacher__info">
                            <div class="teacher__image ibg" data-da="teacher__content, 767, 1">
                            <?php
                            $i = 0;
                            while( have_rows('teacher__images') && $i < 1) : the_row();
                                ?>
                                <img src="<?= get_sub_field('image') ?>" alt="Image">
                                <?php
                                $i++;
                            endwhile;
                            ?>
                            </div>
                            <div class="teacher__content">
                                <div class="teacher__header">
                                    <h4 class="teacher__name title"><?php the_title(); ?></h4>
                                    <p class="teacher__profession text"><?php the_content(); ?></p>
                                </div>
                                <div class="teacher__text-block">
									<?= get_field("teacher__text"); ?>
                                </div>
                        </div>
                        </div>
                        <a href="#" class="teacher__link light-gallery__btn">Смотреть  фото</a>
                    </div>
                </div>
            </div>
            <div class="teachers-page">
                <div class="container">
                    <div class="teachers-page__inner">
                        <?php 
                        $currentLink = get_permalink();
                        if ( have_posts() ) : query_posts(array('posts_per_page' => -1, 'cat' => 4)); ?>
                            <?php while (have_posts()) : the_post(); 
                                if(get_permalink() !=  $currentLink) { ?>
                                <div class="teachers-page__item">
                                    <a href="<?php the_permalink(); ?>" class="teachers-page__image ibg">
                                    <?php
                                    $i = 0;
                                    while( have_rows('teacher__images') && $i < 1) : the_row();
                                        ?>
                                        <img src="<?= get_sub_field('image') ?>" alt="Image">
                                        <?php
                                        $i++;
                                    endwhile;
                                    ?>
                                    </a>
                                    <div class="teachers-page__content">
                                        <a href="<?php the_permalink(); ?>" class="teachers-page__name title"><?php the_title(); ?></a>
                                        <p class="teachers-page__profession text"><?php the_content(); ?></p>
                                    </div>
                                </div>
                                <?php } ?>
                            <?php endwhile; ?>
                        <?php endif; wp_reset_query(); ?>
                    </div>
                </div>
            </div>
        </main>

<?php get_footer(); ?>
