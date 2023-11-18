<?php
/*
Template Name: Главная
 */
get_header();
 ?>

<style>
.header--background{background:transparent}
</style>
<main class="main">
      <section
        class="top"
        style="background-image: url(<?= CFS()->get('top_background') ?>)">
        <div class="container">
          <div class="top__inner">
            <h1 class="top__title">
              <?= CFS()->get('top_title') ?>
            </h1>
            <p class="top__text">
            <?= CFS()->get('top_description') ?>
            </p>
            <div class="bor-dot-wrap">
            <?= CFS()->get('sale') ?>
            </div>
            <button class="top__btn default-btn custome-btn-hover">
            <?= CFS()->get('top_button') ?>
            </button>
          </div>
        </div>
      </section>

      <div class="top__popup">
        <div class="questions__remain">
          <div class="top__popup-close"></div>
          <h4 class="questions__remain-title"><?= CFS()->get('form_title') ?></h4>
          <p class="questions__remain-text">
          <?= CFS()->get('form_text') ?>
          </p>
            <?php echo do_shortcode( '[contact-form-7 id="64" title="Маленькая форма"]' ); ?>
          <p class="questions__remain-conditions">
          <?= CFS()->get('form_discleimer') ?>
            <a href="#"><?= CFS()->get('form_link') ?></a>
          </p>
        </div>
      </div>

      <section class="advantages">
        <div class="container">
          <div class="advantages__inner">
          <?php $loop = CFS()->get('advantages');
          $counter = 0;
            foreach ($loop as $row) {
               $counter++;
               if ($counter === 4) { 
               ?>
            <div class="advantages__card">
              <img
                class="advantages__img advantages__img--4"
                src="<?= $row['advantages_image'] ?>"
                alt="Фотография" />
              <div class="advantages__text">
              <?= $row['advantages_text'] ?>
              </div>
            </div>
                  <?php
            }
            
              else {
               ?>
               
               <div class="advantages__card">
              <img
                class="advantages__img"
                src="<?= $row['advantages_image'] ?>"
                alt="Фотография" />
              <div class="advantages__text">
              <?= $row['advantages_text'] ?>
              </div>
            </div>
           <?php
            }
         }
            ?>
          </div>
        </div>
      </section>

      <section class="cards">
        <div class="container">
          <h3 class="subtitle">
          <?= CFS()->get('services_title') ?>
          </h3>
          <div class="cards__inner">
          <?php $loop = CFS()->get('cards');
          $counter = 0;
            foreach ($loop as $row) {
               $counter++;
               if ($counter >= 7) { 
               ?>
               <div class="cards__item hidden" data-card="hidden">
                  <h4 class="cards__item-title"><?= $row['cards_title'] ?></h4>
                  <div class="cards__item-img">
                  <img src="<?= $row['cards_image'] ?>" alt="ОБЪЕМНЫЕ БУКВЫ" />
                  </div>
                  <p class="cards__item-text">
                  <?= $row['cards_text'] ?>
                  </p>
                  <a href="<?php echo get_permalink($row['id']); ?>" class="cards__item-btn default-btn"><?= $row['cards_button'] ?></a></div>
                  <?php
            }
            
              else {
               ?>
               
           <div class="cards__item">
             <h4 class="cards__item-title"><?= $row['cards_title'] ?></h4>
             <div class="cards__item-img">
               <img src="<?= $row['cards_image'] ?>" alt="ОБЪЕМНЫЕ БУКВЫ" />
             </div>
             <p class="cards__item-text">
             <?= $row['cards_text'] ?>
             </p>
             <a href="<?php echo get_permalink($row['id']); ?>" class="cards__item-btn default-btn"><?= $row['cards_button'] ?></a>
           </div>
           <?php
            }
            
            ?>

<?php
            }
            ?>

          </div>
          <div class="more__btn-wrapper">
            <a href="#" class="more__button"><?= CFS()->get('services_button') ?></a>
          </div>
        </div>
      </section>

      <section class="calculation">
        <div class="container">
           <div 
           class="calculation__inner">
            <img class="bg-image-calculation" src="<?= CFS()->get('calculation_triangles') ?>" alt="">
            <div class="calculation__content">
              <h3 class="calculation__title">
              <?= CFS()->get('calculation_title') ?>
              </h3>
              <p class="calculation__text">
              <?= CFS()->get('calculation_text') ?>
              </p>
              <div class="calculation__result">
                <div class="calculation__result-wrapper">
                  <img
                    class="calculation__result-img"
                    src="<?= CFS()->get('checkbox') ?>"
                    alt="Галочка" />
                  <p class="calculation__result-text">
                  <?= CFS()->get('calculation_plus1') ?>
                  </p>
                </div>
                <div class="calculation__result-wrapper">
                  <img
                    class="calculation__result-img"
                    src="<?= CFS()->get('checkbox') ?>"
                    alt="Галочка" />
                  <p class="calculation__result-text">
                  <?= CFS()->get('calculation_plus2') ?>
                  </p>
                </div>
              </div>
              <?php echo do_shortcode( '[contact-form-7 id="82" title="Форма расчета"]' ); ?>
            </div>
            <div class="calculation__image">
              <img src="<?= CFS()->get('calculation_background') ?>" alt="Фотография мужчины" />
            </div>
          </div>
        </div>
      </section>

      <section class="stage">
        <div class="container">
          <h3 class="subtitle stage__title"><?= CFS()->get('stage_title') ?></h3>
          <div class="stage__inner">
          <?php $loop = CFS()->get('stages');
            foreach ($loop as $row) {
               ?>
               <div class="stage__item">
               <h5 class="stage__item-num"><?= $row['stages_number'] ?></h5>
               <p class="stage__item-text">
               <?= $row['stages_text'] ?>
               </p>
             </div>
             <?php
            }
            ?>

          </div>
        </div>
      </section>

      <section class="companies">
        <div class="container">
          <h3 class="subtitle companies__title">
          <?= CFS()->get('companies_title') ?>
          </h3>
          <div class="companies-slider">
          <?php $loop = CFS()->get('partners');
            foreach ($loop as $row) {
               ?>
            <div class="companies-slider__item">
              <img src="<?= $row['partner'] ?>" alt="Логотип билайн" />
            </div>
            <?php
            }
            ?>
          </div>
        </div>
      </section>

      <section class="gallery">
        <div class="container">
          <h3 class="subtitle gallery__title"><?= CFS()->get('gallery_title') ?></h3>
          <div class="gallery__wrapper">
            <div class="gallery__inner">
            <?php $loop = CFS()->get('works');
          $counter = 0;
            foreach ($loop as $row) {
               $counter++;
               if ($counter >= 7) { 
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
              <button class="more__button"><?= CFS()->get('gallery_button') ?></button>
            </div>
          </div>
        </div>
      </section>

      <section
      style="background-image: url(<?= CFS()->get('questions_background') ?>)"
       class="questions">
        <div class="container">
          <div class="questions__inner">
            <!-- accordion -->
            <div class="accordion">
            <?php $loop = CFS()->get('accordions');
            foreach ($loop as $row) {
               ?>
              <div class="accordion__item">
                <div class="accordion__item-title">
                  <?= $row['accordions_title'] ?>
                </div>
                <div class="accordion__item-body">
                  <div class="accordion__item-content">
                  <?= $row['accordions_text'] ?>
                  </div>
                </div>
              </div>
              <?php
            }
            ?>
            </div>
            <div class="questions__remain">
              <h4 class="questions__remain-title"><?= CFS()->get('form_title') ?></h4>
              <p class="questions__remain-text">
              <?= CFS()->get('form_text') ?>
              </p>
              <?php echo do_shortcode( '[contact-form-7 id="64" title="Маленькая форма"]' ); ?>
              <p class="questions__remain-conditions">
              <?= CFS()->get('form_discleimer') ?>
                     <a href="#"><?= CFS()->get('form_link') ?></a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

<?php get_footer(); ?>