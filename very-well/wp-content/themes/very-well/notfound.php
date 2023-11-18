<?php get_header() 

/*
Template Name: notfound
*/

?>

        <main class="main">
            <section class="notfound">
                <div class="container notfound__container">
                    <div class="notfound__inner">
                        <h1 class="notfound__title"><?= get_field("title"); ?></h1>
                        <h4 class="notfound__subtitle title small"><?= get_field("subtitle"); ?></h4>
                        <p class="notfound__text"><?= get_field("text"); ?></p>
                        <a href="/" class="notfound__btn btn"><?= get_field("btn"); ?></a>
                    </div>
                </div>
            </section>
        </main>

<?php get_footer() ?>