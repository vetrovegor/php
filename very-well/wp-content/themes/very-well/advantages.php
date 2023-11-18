<?php get_header() 

/*
Template Name: advantages
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
                        <p>Преимущества</p>
                    </div>
                </div>
            </div>
            <section class="dignities">
                <div class="container">
                    <div class="dignities__inner">
                        <h1 class="dignities__title title"><?= get_field("dignities-title"); ?></h1>
                        <div class="dignities__items">
                            <?php
                            while( have_rows("dignities") ) : the_row();
                                ?>
                                
                                <div class="dignities__item item">
                                    <div class="dignities__content">
                                        <img src="<?= get_sub_field("icon") ?>" alt="icon" class="dignities__icon">
                                        <p class="dignities__caption"><?= get_sub_field("title") ?></p>
                                    </div>
                                    <p class="dignities__text dignities__text_hidden"><?= get_sub_field("text") ?></p>
                                    <button class="dignities__link"><?= get_field("dignities-btn"); ?></button>
                                </div>
                                <?php
                            endwhile;
                            ?>
                        </div>
                    </div>
                </div>
            </section>
            <div class="and-also">
                <div class="container">
                    <div class="and-also__inner">
                        <h2 class="and-also__title title"><?= get_field("and-also-title"); ?></h2>
                        <ul class="and-also__list">
                            <?php
                            while( have_rows("and-also-list") ) : the_row();
                                ?>
                                <li class="and-also__item">
                                    <b class="and-also__caption"><?= get_sub_field("title") ?></b>
                                    <p class="and-also__text"><?= get_sub_field("text") ?></p>
                                </li>
                                <?php
                            endwhile;
                            ?>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="separator"></div>
            <?php
            while( have_rows("blocks") ) : the_row();
            ?>
                <div class="default-section<?php if(get_sub_field("bg") == 1) { echo " default-section_grey"; } ?>">
                    <div class="container">
                        <div class="default-section__inner">
                            <div class="advantages__item advantages__item_separator<?php if(get_sub_field("bg") == 1) { echo " advantages__item_even"; } else if(get_sub_field("bg") == 0) { echo " advantages__item_odd"; } ?>">
                                <div class="advantages__image advantages__image_big ibg">
                                    <img src="<?= get_sub_field("image") ?>" alt="image">
                                </div>
                                <div class="advantages__content advantages__content_big">
                                        <?php if(get_sub_field("title")) { ?>
                                            <p class="advantages__title advantages__title_about title"><?= get_sub_field("title") ?></p>
                                        <?php } ?>
                                        <?php
                                        while( have_rows("text-blocks") ) : the_row();
                                            ?>
                                            <div class="advantages__text-block">
                                                <?= get_sub_field("text") ?>
                                            </div>
                                            <?php
                                        endwhile;
                                        ?>
                                    <?php if(get_sub_field("btn")) { ?>
                                        <button class="advantages__btn advantages__sign-btn btn"><?= get_sub_field("btn") ?></button>
                                    <?php } ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <?php
            endwhile;
            ?>
            <div class="separator separator_desktop"></div>
        </main>

        
<?php get_footer() ?>