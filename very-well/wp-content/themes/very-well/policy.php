<?php get_header() 

/*
Template Name: policy
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
                        <p>Политика обработки персональных данных</p>
                    </div>
                </div>
            </div>
            <section class="policy">
                <div class="container">
                    <div class="policy__inner">
                        <h1 class="policy__title title"><?= get_field("title"); ?></h1>
                        <ul class="policy__points">
                            <?php
                            while( have_rows("points") ) : the_row();
                            ?>
                                <li><?= get_sub_field("text") ?>
                                <?php if (get_sub_field("list")) { ?>
                                <ul class="policy__list">
                                    <?php
                                    while( have_rows("list") ) : the_row();
                                        ?>
                                        <li><?= get_sub_field("text") ?>
                                        <?php if (get_sub_field("sub-list")) { ?>
                                            <ul class="policy__sub-list">
                                                <?php
                                                while( have_rows("sub-list") ) : the_row();
                                                    ?>
                                                    <li><?= get_sub_field("text") ?></li>
                                                    <?php
                                                endwhile;
                                                ?>
                                            </ul>
                                        <?php } ?>
                                        </li>
                                        <?php
                                    endwhile;
                                    ?>
                                </ul>
                                </li>
                                <?php } ?>
                            <?php
                            endwhile;
                            ?>
                        </ul>
                    </div>
                </div>
            </section>
        </main>

<?php get_footer() ?>