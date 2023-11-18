<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<?php wp_head() ?> 
    <title>Document</title>
</head>

<body>
    <div class="wrapper lock-padding">
        <header class="header">
            <div class="container header__container">
                <div class="header__inner">
                    <div class="header__top">
                        <button class="burger-btn">
                            <img src="<?php bloginfo('template_url'); ?>/assets/img/header/menu.svg" alt="menu">
                        </button>
                        <div class="header__left">
                            <button class="header__btn btn">Консультация специалиста</button>
                            <a href="tel:<?= get_field("tel-link", 86); ?>" class="header__tel"><?= get_field("tel", 86); ?></a>
                        </div>
                        <div class="header__middle">
                            <a href="/" class="header__logo logo">
                                <span class="logo__title"><?= get_field("logo-title", 86); ?></span>
                                <span class="logo__subtitle"><?= get_field("logo-subtitle", 86); ?></span>
                            </a>
                        </div>
                        <div class="header__right">
                            <div class="header__search-inner input-inner">
                                <button class="search-btn">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19.7832 16.3911L24 20.6069L22.6069 22L18.3911 17.7832C16.8224 19.0407 14.8713 19.7246 12.8609 19.7218C7.96968 19.7218 4 15.7521 4 10.8609C4 5.96968 7.96968 2 12.8609 2C17.7521 2 21.7218 5.96968 21.7218 10.8609C21.7246 12.8713 21.0407 14.8224 19.7832 16.3911ZM17.8082 15.6605C19.0577 14.3756 19.7555 12.6532 19.7527 10.8609C19.7527 7.05366 16.6681 3.96909 12.8609 3.96909C9.05366 3.96909 5.96909 7.05366 5.96909 10.8609C5.96909 14.6681 9.05366 17.7527 12.8609 17.7527C14.6532 17.7555 16.3756 17.0577 17.6605 15.8082L17.8082 15.6605Z"
                                            fill="#1D1919" />
                                    </svg>
                                </button>
                                <input type="text" class="input input_search" placeholder="Поиск">
                            </div>
                            <a href="#" class="header__basket">
                                <img src="<?php bloginfo('template_url'); ?>/assets/img/header/bascket.svg" alt="bascket">
                                <span class="header__count">
                                    0
                                </span>
                            </a>
                        </div>
                    </div>
                    <nav class="header__nav">
                    <?php
                        wp_nav_menu( [
                        'theme_location'  => 'header-menu',
                        'container'       => null
                        ] );
                    ?>
                    </nav>
                </div>
            </div>
        </header>