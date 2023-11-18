<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title();?></title>

	<?php wp_head(); ?>
</head>

<body>
    <div class="wrapper">
        <header class="header lock-padding">
            <div class="container">
                <div class="header__inner">
                    <div class="header__logo">
                        <?php the_custom_logo();?>
                    </div>
                    <nav class="header__nav" data-da="menu-popup,767,first">
                        <ul>
                            <?php
                                $menuItems = CFS()->get('header__menu');
                                foreach($menuItems as $el) {
                                ?>
                                <li><a data-goto="<?= $el['menu-item__anchor'] ?>" href="<?= $el['menu-item__link'] ?>"><?= $el['menu-item__text'] ?></a></li>
                                <?php
                                }
                            ?>
                        </ul>
                    </nav>
                    <div class="header__btn" data-da="menu-popup,767,last">
                        <a href="<?= CFS()->get('header__btn-link'); ?>"><?= CFS()->get('header__btn-text'); ?></a>
                    </div>
                    <a href="#" class="burger-btn"><span></span></a>
                </div>
            </div>
        </header>