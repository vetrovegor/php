<?php
/*
Template Name: услуги
 */
get_header();
 ?>

<main class="main">
   <div class="pagination">
      <div class="container">
      <ul class="pagination__list">
            <li class="pagination__item">
              <a href="#" class="pagination__link">Главная</a>
            </li>
            -
            <li class="pagination__item">
               <span class="pagination__link">Услуги</span>
            </li>
          </ul>
      </div>
   </div>

   <section class="cards">
      <div class="container">
         <h3 class="page-title">
            <?= CFS()->get('services_title') ?>
         </h3>
         <div class="cards__inner">
         <?php if ( have_posts() ) : query_posts(array('posts_per_page' => -1, 'cat' => 3));
            $max = 6; 
            $counter = 1; ?>
            <?php while (have_posts()) : the_post(); ?>
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
               <?php $counter++;
            endwhile; ?>
         <?php endif; wp_reset_query(); ?>
         </div>
         <div class="more__btn-wrapper">
            <a href="#" class="more__button">
               <?= CFS()->get('services_button') ?>
            </a>
         </div>
      </div>
   </section>

   <div class="info">
      <div class="container">
         <div class="info__inner">
            <p class="info__text">
               <?= CFS()->get('text') ?>
            </p>
            <p class="info__text">
               <?= CFS()->get('text') ?>
            </p>
         </div>
      </div>
   </div>

   <div class="questions--horizontal">
      <div class="container">
         <div class="questions__remain">
            <h4 class="questions__remain-title">
               <?= CFS()->get('form_title') ?>
            </h4>
            <p class="questions__remain-text">
               <?= CFS()->get('form_text') ?>
            </p>
            <?php echo do_shortcode( '[contact-form-7 id="65" title="Большая форма"]' ); ?>
            <p class="questions__remain-conditions questions__remain-conditions--horizontal">
               <?= CFS()->get('form_discleimer') ?>
               <a href="#">
                  <?= CFS()->get('form_link') ?>
               </a>
            </p>
         </div>
      </div>
   </div>
</main>
<?php get_footer(); ?>