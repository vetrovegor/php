<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= get_bloginfo(); ?></title>

	<?php wp_head(); ?> 
</head>

<body>
    <div class="wrapper">
        <header class="header">
            <div class="header__container container">
                <div class="header__inner">
                    <a href="<?= get_site_url(); ?>" class="header__logo logo">
                        <img src="<?= get_field("site-logo", 11); ?>" alt="logo">
                    </a>
                    <div class="header__content" data-da="menu-popup,1240,last">
                        <nav class="header__menu">
                        <?php
                                wp_nav_menu( [
                                    'theme_location'  => 'header-menu',
                                    'container'       => null,
                                    'menu_class'      => '',
                                ] );
                            ?>
                        </nav>
                        <a href="#" class="header__btn request-popup-btn"><?= get_field("header__btn", 11); ?></a>
                        <div class="header__social">
                        <?php
                            while( have_rows('socials', 11) ) : the_row();
                                ?>
                                <a href="<?= get_sub_field('social-link') ?>" target="_blank">
                                    <?= get_sub_field('social-icon') ?>
                                </a>
                                <?php
                            endwhile;
                        ?>
                        </div>
                        <div class="header__info">
                            <a href="tel:<?= get_field("clear-tel", 11); ?>" class="header__tel"><?= get_field("tel", 11); ?></a>
                            <p class="header__schedule"><?= get_field("hours", 11); ?></p>
                        </div>
                    </div>
                    <a href="#" class="burger-btn"><span></span></a>
                </div>
            </div>
        </header>