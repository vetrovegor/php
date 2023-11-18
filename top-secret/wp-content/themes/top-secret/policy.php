<?php
/*
Template Name: policy
*/
?>

<?php get_header(); ?>

<main class="main">
            <div class="page-header">
                <div class="container">
                    <div class="page-header__inner">
                        <h4 class="page-header__title">Политика конфиденциальности</h4>
                    </div>
                </div>
            </div>
            <div class="policy">
                <div class="container">
                    <div class="policy__inner">
                        <ul class="policy__list">
                        <?php
                        while( have_rows('policy__list') ) : the_row();
                            ?>
                            <li class="policy__item">
                                <?= get_sub_field('policy__item') ?>                                
                                <ul class="policy__sublist">
                                    <?php
                                    while( have_rows('policy__sublist') ) : the_row();
                                        ?>
                                        <li class="policy__subitem"><?= get_sub_field('policy__subitem') ?></li>
                                        <?php
                                    endwhile;
                                    ?>
                                </ul>
                            </li>
                            <?php
                        endwhile;
                        ?>
                        </ul>
                    </div>
                </div>
            </div>
        </main>

<?php get_footer(); ?>