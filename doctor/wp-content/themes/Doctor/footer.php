<footer class="footer">
         <div class="container">
            <div class="footer__inner">
               <div class="footer__top">
                  <div class="footer__info">
                     <img class="footer__info-logo" src="<?= CFS()->get('footer_logo', 102) ?>" alt="Логотип" />
                     <div class="footer__info-text">
                        <?= CFS()->get('footer_text', 102) ?>
                     </div>
                  </div>
                  <div class="footer__services">
                     <h5 class="footer__title"><?= CFS()->get('footer_title', 102) ?></h5>
                     <div class="footer__services-wrapper">
                        <ul class="footer__services-list">
                           <li class="footer__services-item">
                              <a href="#" class="footer__services-link"><?= CFS()->get('service1', 102) ?></a>
                           </li>
                                                      <li class="footer__services-item">
                              <a href="#" class="footer__services-link"><?= CFS()->get('service2', 102) ?></a>
                           </li>
                                                      <li class="footer__services-item">
                              <a href="#" class="footer__services-link"><?= CFS()->get('service3', 102) ?></a>
                           </li>
                                                      <li class="footer__services-item">
                              <a href="#" class="footer__services-link"><?= CFS()->get('service4', 102) ?></a>
                           </li>
                        </ul>
                        <ul class="footer__services-list">
                           <li class="footer__services-item">
                              <a href="#" class="footer__services-link"><?= CFS()->get('service5', 102) ?></a>
                           </li>
                                                      <li class="footer__services-item">
                              <a href="#" class="footer__services-link"><?= CFS()->get('service6', 102) ?></a>
                           </li>
                                                      <li class="footer__services-item">
                              <a href="#" class="footer__services-link"><?= CFS()->get('service7', 102) ?></a>
                           </li>
                                                      <li class="footer__services-item">
                              <a href="#" class="footer__services-link"><?= CFS()->get('service8', 102) ?></a>
                           </li>
                        </ul>
                     </div>
                  </div>

                  <div class="footer__contacts">
                     <h5 class="footer__title"><?= CFS()->get('contacts_title', 102) ?></h5>
                     <ul class="footer__contacts-list">
                        <li class="footer__contacts-itemtitle"><?= CFS()->get('contacts_text1', 102) ?></li>
                        <li class="footer__contacts-item"><?= CFS()->get('contacts_text2', 102) ?></li>
                        <li class="footer__contacts-itemtitle"><?= CFS()->get('contacts_text3', 102) ?></li>
                        <li class="footer__contacts-item"><?= CFS()->get('contacts_text4', 102) ?></li>
                        <li class="footer__contacts-itemtitle"><?= CFS()->get('contacts_text5', 102) ?></li>
                        <li class="footer__contacts-item">
                           <a class="footer__contacts-link" href="tel:+73833350011"
                              ><?= CFS()->get('contacts_text6') ?>
                              <img src="<?= CFS()->get('logo_whatsup', 102) ?>" alt="" />
                           </a>
                        </li>
                        <li class="footer__contacts-item"><?= CFS()->get('contacts_text7', 102) ?></li>
                        <li class="footer__contacts-social">
                           <a href="#">
                              <img src="<?= CFS()->get('logo_vk', 102) ?>" alt="Логотип Вконтакте" />
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
               <div class="footer__copy">
                  <p class="footer__copy-text">
                  <?= CFS()->get('copyright', 102) ?>
                  </p>
               </div>
            </div>
         </div>
      </footer>

      <?php wp_footer(); ?>
   </body>
</html>