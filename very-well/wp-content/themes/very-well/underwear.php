<?php get_header() 

/*
Template Name: underwear
*/

?>

        <main class="main">
            <div class="breadcrumbs">
                <div class="container">
                    <div class="breadcrumbs__inner">
                        <a href="/" class="dim">Главная</a>
                        <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 8.63636L1 16" stroke="#BBBABA" stroke-width="2" />
                        </svg>
                        <p>Белье оптом</p>
                    </div>
                </div>
            </div>
            <section class="banner">
                <div class="banner__image ibg main-screen">
                    <img src="<?= get_field("banner-bg"); ?>" alt="image">
                    <div class="container banner__container">
                        <div class="banner__inner">
                            <h1 class="banner__title"><?= get_field("banner-title"); ?></h1>
                            <p class="banner__subtitle"><?= get_field("banner-subtitle"); ?></p>
                            <a href="<?= get_field("banner-btn-link"); ?>" class="banner__btn transparent btn"><?= get_field("banner-btn-text"); ?></a>
                        </div>
                    </div>
                </div>
            </section>
            <?php
            while( have_rows("blocks") ) : the_row();
                ?>
                <div class="default-section<?php if(get_sub_field("bg") == 1) { echo " default-section_grey"; } ?>">
                    <div class="container">
                        <div class="default-section__inner">
                            <div class="advantages__item advantages__item_separator<?php if(get_sub_field("bg") == 0) { echo " advantages__item_even"; } else if(get_sub_field("bg") == 1) { echo " advantages__item_odd"; } ?>">
                                <div class="advantages__image ibg">
                                    <img src="<?= get_sub_field("image") ?>" alt="image">
                                </div>
                                <div class="advantages__content">
                                    <p class="advantages__title advantages__title_underwear title"><?= get_sub_field("title") ?></p>
                                    <div class="advantages__text-block">
                                        <p><?= get_sub_field("text") ?></p>
                                    </div>
                                    <?php if(get_sub_field("items")) { ?>
                                        <div class="advantages__items">
                                    <?php } ?>
                                    <?php
                                    while( have_rows("items") ) : the_row();
                                        ?>
                                        
                                        <div class="item-advantages">
                                            <p class="item-advantages__title advantages__title_underwear"><?= get_sub_field("title") ?></p>
                                            <b class="item-advantages__text"><?= get_sub_field("text") ?></b>
                                        </div>
                                        <?php
                                    endwhile;
                                    ?>
                                    <?php if(get_sub_field("items")) { ?>
                                        </div>
                                    <?php } ?>
                                    <?php if(get_sub_field("btn-text")) { ?>
                                        <a href="<?= get_sub_field("btn-link") ?>" class="advantages__btn advantages__btn_big btn"><?= get_sub_field("btn-text") ?></a>
                                    <?php } ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <?php
            endwhile;
            ?>
            <section class="story">
                <div class="container">
                    <div class="story__inner">
                        <h2 class="story__title title"><?= get_field("story-title"); ?></h2>
                        <div class="story__video video">
                            <?= get_field("story-video"); ?>
                        </div>
                    </div>
                </div>
            </section>
            <div class="benefit">
                <div class="container">
                    <div class="benefit__inner">
                        <div class="benefit__items">
                            <?php
                            while( have_rows("advantages") ) : the_row();
                                ?>
                                <div class="benefit__item">
                                    <p class="benefit__caption"><?= get_sub_field("title") ?></p>
                                    <p><?= get_sub_field("text") ?></p>
                                </div>
                                <?php
                            endwhile;
                            ?>
                        </div>
                        <a href="<?= get_field("advantages-btn-link"); ?>" class="benefit__link btn"><?= get_field("advantages-btn-text"); ?></a>
                    </div>
                </div>
            </div>
            <section class="tariff">
                <div class="container">
                    <div class="tariff__inner">
                        <h2 class="tariff__title title"><?= get_field("tariff-title"); ?></h2>
                        <div class="tariff__items">
                            <?php
                            while( have_rows("tariffs") ) : the_row();
                            ?>
                            <div class="tariff__item item">
                                <p class="tariff__caption title"><?= get_sub_field("title") ?><?php if(get_sub_field("check")) { ?><span class="main-color">*</span><?php } ?></p>
                                <b><?= get_sub_field("subtitle") ?> <span class="main-color"><?= get_sub_field("subtitle-select") ?></span></b>
                                <ul class="tariff__list">
                                    <?php
                                    while( have_rows("list") ) : the_row();
                                    ?>
                                        <li><?= get_sub_field("text") ?></li>
                                    <?php
                                    endwhile;
                                    ?>
                                </ul>
                            </div>
                            <?php
                            endwhile;
                            ?>
                        </div>
                        <p class="tariff__text"><?= get_field("tariff-text"); ?></p>
                    </div>
                </div>
            </section>
            <section class="and-also">
                <div class="container">
                    <div class="and-also__inner">
                        <h2 class="and-also__title title"><?= get_field("and-also-title"); ?></h2>
                        <ul class="and-also__list and-also__list_two">
                            <?php
                            while( have_rows("and-also-list") ) : the_row();
                                ?>
                                <li class="and-also__item and-also__item_two">
                                    <b class="and-also__caption"><?= get_sub_field("title") ?></b>
                                    <p class="and-also__text"><?= get_sub_field("text") ?></p>
                                </li>
                                <?php
                            endwhile;
                            ?>
                        </ul>
                    </div>
                </div>
            </section>
            <section class="partners">
                <div class="container">
                    <div class="partners__inner">
                        <?= get_field("partners-title"); ?>
                        <p><?= get_field("partners-text"); ?></p>
                        <a href="<?= get_field("partners-btn-link"); ?>" class="partners__btn btn"><?= get_field("partners-btn-text"); ?></a>
                    </div>
                </div>
            </section>
        </main>

<?php get_footer() ?>