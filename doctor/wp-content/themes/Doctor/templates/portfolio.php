<?php
/*
Template Name: Портфолио
 */
get_header();
 ?>


<main class="main">

      <main class="main">
        <div class="pagination">
          <div class="container">
            <ul class="pagination__list">
              <li class="pagination__item">
                <a href="#" class="pagination__link">Главная</a>
              </li>
              -
              <li class="pagination__item pagination__item--active">
                <span class="pagination__link">Портфолио</span>
              </li>
            </ul>
          </div>
        </div>

      <section class="gallery">
        <div class="container">
          <h3 class="page-title"><?= CFS()->get('gallery_title') ?></h3>
          <div class="gallery__wrapper">
            <div class="gallery__inner">
            <?php $loop = CFS()->get('works');
          $counter = 0;
            foreach ($loop as $row) {
               $counter++;
               if ($counter >= 13) { 
               ?>
              <div class="gallery__item hidden" data-card="hidden">
                <a data-fancybox="gallery" data-caption="<?= $row['work_description'] ?>" data-src="<?= $row['work'] ?>">
                  <img src="<?= $row['work'] ?>" alt="Фотография работы" />
                </a>
              </div>
              <?php
            }
            
              else {
               ?>
              <div class="gallery__item">
                <!-- Сюда помещать большие изображения -->
                <a
                data-caption="<?= $row['work_description'] ?>"
                  data-fancybox="gallery"
                  data-src="<?= $row['work'] ?>">
                  <img src="<?= $row['work'] ?>" alt="Фотография работы" />
                </a>
              </div>
              <?php
            }           
            ?>
<?php
            }
            ?>
            </div>
            <div class="more__btn-wrapper gallery__btn-wrapper">
              <a href="#" class="more__button"><?= CFS()->get('gallery_button') ?></a>
            </div>
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
                  <h4 class="questions__remain-title"><?= CFS()->get('form_title') ?></h4>
                  <p class="questions__remain-text">
                  <?= CFS()->get('form_text') ?>
                  </p>
                     <?php echo do_shortcode( '[contact-form-7 id="65" title="Большая форма"]' ); ?>
                  <p class="questions__remain-conditions questions__remain-conditions--horizontal">
                  <?= CFS()->get('form_discleimer') ?>
                     <a href="#"><?= CFS()->get('form_link') ?></a>
                  </p>
               </div>
            </div>
         </div>
    </main>

    <?php get_footer(); ?>
