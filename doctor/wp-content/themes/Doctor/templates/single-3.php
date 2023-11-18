<?php
/*
Template Name: услуги
 */
get_header();
 ?>
 
<?php get_header(); ?>

    <main class="main">
      <div class="pagination">
        <div class="container">
          <ul class="pagination__list">
            <li class="pagination__item">
              <a href="#" class="pagination__link">Главная</a>
            </li>
            -
            <li class="pagination__item">
              <a href="услуги" class="pagination__link">Услуги</a>
            </li>
            -
            <li class="pagination__item pagination__item--active">
              <span class="pagination__link"><?php the_title(); ?></span>
            </li>
          </ul>
        </div>
      </div>

      <div class="info">
        <div class="container">
          <h3 class="page-title"><?php the_title(); ?></h3>
          <div class="info__inner">
            <p class="info__text">
                <?= get_field("service-text-1"); ?>
            </p>
            <p class="info__text">
              <?= get_field("service-text-2"); ?>
            </p>
          </div>
        </div>
      </div>

      <section class="gallery">
        <div class="container">
          <div class="gallery__wrapper">
            <h3 class="subtitle gallery__title"><?= CFS()->get('gallery_title', 100) ?></h3>
            <div class="gallery__inner">
            <?php
              while( have_rows('service-works') ) : the_row();
                ?>
                <div class="service__item">
                <?= get_sub_field('') ?>
                <a
                data-caption="<?= get_sub_field('text') ?>"
                  data-fancybox="gallery"
                  data-src="<?= get_sub_field('image') ?>">
                  <img src="<?= get_sub_field('image') ?>" alt="Фотография работы" />
                </a>
                </div>
                <?php
              endwhile;
            ?>
            </div>
          </div>
        </div>
      </section>

      <section class="cards">
        <div class="container">
          <h3 class="subtitle">
          <?= CFS()->get('services_title', 100) ?>
          </h3>
          <div class="cards__inner">
            <?php if ( have_posts() ) : query_posts(array('posts_per_page' => -1, 'cat' => 3));
            $currentLink = get_permalink();
            $max = 6; 
            $counter = 1; ?>
            <?php while (have_posts()) : the_post(); 
              if($currentLink != get_permalink()) { ?>
               <div <?php if ($counter <= $max) { echo "class=\"cards__item\""; } else { echo "class=\"cards__item hidden\" data-card=\"hidden\""; } ?>>
                  <h4 class="cards__item-title">
                     <?php the_title(); ?>
                  </h4>
                  <div class="cards__item-img">
                     <img src="<?= get_field("service-image"); ?>" alt="Картинка">
                  </div>
                  <p class="cards__item-text">
                     <?php the_content(); ?>
                  </p>
                  <a href="<?php the_permalink(); ?>" class="cards__item-btn default-btn">
                     Подробнее
                  </a>
               </div>
               <?php } $counter++;
            endwhile; ?>
         <?php endif; wp_reset_query(); ?>
          </div>
          <div class="more__btn-wrapper">
            <a href="#" class="more__button"><?= CFS()->get('services_button', 19) ?></a>
          </div>
        </div>
      </section>

      <div class="questions--horizontal">
            <div class="container">
               <div class="questions__remain">
                  <h4 class="questions__remain-title"><?= CFS()->get('form_title', 19) ?></h4>
                  <p class="questions__remain-text">
                  <?= CFS()->get('form_text') ?>
                  </p>
                     <?php echo do_shortcode( '[contact-form-7 id="65" title="Большая форма"]' ); ?>
                  <p class="questions__remain-conditions questions__remain-conditions--horizontal">
                  <?= CFS()->get('form_discleimer', 19) ?>
                     <a href="#"><?= CFS()->get('form_link', 19) ?></a>
                  </p>
               </div>
            </div>
         </div>
    </main>

    <?php get_footer(); ?>