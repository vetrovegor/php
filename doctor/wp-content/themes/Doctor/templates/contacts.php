<?php
/*
Template Name: Контакты
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
              <span class="pagination__link">Портфолио</span>
            </li>
          </ul>
        </div>
      </div>

      <section class="contacts">
        <div class="container">
          <h3 class="page-title"><?= CFS()->get('contacts_title') ?></h3>
          <div class="contacts__inner">
            <div class="contacts__box contacts__box--01">
              <h4 class="contacts__title"><?= CFS()->get('address_title') ?></h4>
              <p class="contacts__text">
              <?= CFS()->get('address_text') ?>
              </p>
            </div>
            <div class="contacts__box">
              <h4 class="contacts__title"><?= CFS()->get('phones_title') ?></h4>
              <div class="contacts__phone">
                <a class="contacts__phone-link" href="tel:+73833350011"
                  ><?= CFS()->get('phone1') ?>
                </a>
              </div>
              <div class="contacts__phone">
                <a class="contacts__phone-link" href="tel:+73833350011"
                  ><?= CFS()->get('phone2') ?>
                  <img src="<?= CFS()->get('logo_whatsup') ?>" alt="" />
                </a>
              </div>
              <div class="contacts__mail-box">
                <h6 class="contacts__mail-title"><?= CFS()->get('mail_title') ?></h6>
                <a href="mailto:<?= CFS()->get('mail') ?>" class="contacts__mail-text"
                  ><?= CFS()->get('mail') ?></a
                >
              </div>
            </div>
            <div class="contacts__box">
              <h4 class="contacts__title"><?= CFS()->get('schedule') ?>:</h4>
              <p class="contacts__text"><?= CFS()->get('contacts_text3') ?></p>
              <p class="contacts__text"><?= CFS()->get('contacts_text4') ?></p>
            </div>
          </div>
        </div>
      </section>

      <div class="map">
        <div class="container">
          <div class="map__inner">
            <div style="position: relative; overflow: hidden">
              <a
                href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                style="
                  color: #eee;
                  font-size: 12px;
                  position: absolute;
                  top: 30px;
                "
                >Москва</a
              ><a
                href="https://yandex.ru/maps/213/moscow/?from=tabbar&ll=37.595337%2C55.732218&source=serp_navig&utm_medium=mapframe&utm_source=maps&z=16.69"
                style="
                  color: #eee;
                  font-size: 30px;
                  position: absolute;
                  top: 14px;
                "
                >Москва — Яндекс Карты</a
              ><iframe
                src="https://yandex.ru/map-widget/v1/?from=tabbar&ll=37.595337%2C55.732218&source=serp_navig&z=16.69"
                frameborder="1"
                allowfullscreen="true"
                style="position: relative"></iframe>
            </div>
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