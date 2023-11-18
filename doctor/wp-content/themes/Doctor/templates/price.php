<?php
/*
Template Name: Цены
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
            <li class="pagination__item pagination__item--active">
              <span class="pagination__link">Стоимость</span>
            </li>
          </ul>
        </div>
      </div>

      <section class="calculation">
        <div class="container">
          <h3 class="page-title"><?= CFS()->get('calculation_title') ?></h3>

          <div class="calculation__inner">
            <div class="calculation__content">
              <h3 class="calculation__title">
              <?= CFS()->get('calculation_form_title') ?>
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
            <div class="calculation__image calculation__image--price">
            <img src="<?= CFS()->get('calculation_background') ?>" alt="Фотография мужчины" />
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
