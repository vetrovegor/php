<?php
/*
Template Name: Вопрос-Ответ
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
              <span class="pagination__link"><?php the_title() ?></span>
            </li>
          </ul>
        </div>
      </div>

      <section class="questions">
        <div class="container">
          <h3 class="page-title"><?php the_title() ?></h3>
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

      <div class="info">
        <div class="container">
          <div class="info__inner">
          <p class="info__text">
                  <?= CFS()->get('text') ?>
                  </p>
                  <p class="info__text">
                  <?= CFS()->get('text') ?>
                  </p>
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
