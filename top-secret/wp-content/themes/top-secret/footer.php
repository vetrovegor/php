<footer class="footer">
            <div class="up-btn">
                <div class="up-btn__circle">
                    <img src="<?php bloginfo('template_url'); ?>/assets/img/footer/arrow.svg" alt="arrow">
                </div>
                <p class="up-btn__text"><?= get_field("up-btn__text", 11); ?></p>
            </div>
            <div class="footer__container container">
                <div class="footer__inner">
                    <a href="<?= get_site_url(); ?>" class="footer__logo logo">
                        <img src="<?php bloginfo('template_url', 11); ?>/assets/img/footer/logo.svg" alt="logo">
                    </a>
                    <div class="footer__row footer__row_1">
                        <div class="footer__text-block" data-da="footer__row_2,767,0">
                            <p class="footer__text"><?= get_field("footer__text_1", 11); ?></p>
                            <p class="footer__text"><?= get_field("footer__text_2", 11); ?></p>
                        </div>
                        <nav class="footer__menu">
                            <?php
                                wp_nav_menu( [
                                    'theme_location'  => 'header-menu',
                                    'container'       => null,
                                    'menu_class'      => '',
                                ] );
                            ?>
                        </nav>
                        <div class="footer__info">
                            <div class="footer__social">
                            <?php
                                while( have_rows('socials', 11) ) : the_row();
                                    ?>
                                    <a href="<?= get_sub_field('social-link') ?>" target="_blank">
                                        <?= get_sub_field('social-icon') ?>
                                    </a>
                                    <?php
                                endwhile;
                            ?>
                            </div>
                            <p class="footer__text"><?= get_field("hours-text", 11); ?></p>
                            <p class="footer__text"><?= get_field("hours", 11); ?></p>
                        </div>
                    </div>
                    <div class="footer__row footer__row_2">
                        <a href="privacy-policy" class="footer__text footer__policy-btn"><?= get_field("footer__policy-btn", 11); ?></a>
                        <a href="tel:<?= get_field("clear-tel", 11); ?>" class="footer__tel" data-da="footer__row_1,767,last"><?= get_field("tel", 11); ?></a>
                    </div>
                </div>
            </div>
        </footer>
        <div class="menu-popup"></div>
        <div class="request-popup">
            <div class="request-popup__container">
                <div class="request-popup__inner">
                    <a href="#" class="request-popup__close-btn">
                        <img src="<?php bloginfo('template_url'); ?>/assets/img/request/close-btn.svg" alt="close">
                    </a>
                    <div class="request-popup__image ibg">
                        <img src="<?= get_field("request-popup__image", 56); ?>" alt="Image">
                    </div>
                    <div class="request-popup__content">
                        <h2 class="request__title"><?= get_field("request__title"); ?></h2>
                        <p class="request__text text"><?= get_field("request-popup__text", 56); ?></p>
                        <p class="request__text text"><?= get_field("request-popup__date", 56); ?></p>
                        <form action="#" class="request__form">
                            <input type="tel" class="request__input" name="tel" placeholder="<?= get_field("request__placeholder", 56); ?>" required>
                            <button type="submit" class="request__btn"><?= get_field("request__btn", 56); ?></button>
                            <div class="request__checkbox">
                                <input type="checkbox" id="requestPopupCheckbox">
                                <label for="requestPopupCheckbox" class="request__label text"><?= get_field("request__label", 56); ?></label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script type="text/javascript">
        // отправка формы
        async function formSend(e) {
            e.preventDefault();
            requestForm = e.target.closest('.request__form');

            if(validateCheckbox(requestForm)) {
                let formData = new FormData(requestForm);
                formData.append("to", "<?= get_field("email-to", 11); ?>");
                
                let response = await fetch('<?= get_template_directory_uri(); ?>/assets/php/send.php', {
                    method: 'POST',
                    body: formData,
                });
                if(response.ok) {
                    alert('Письмо отправлено');
                    requestForm.reset();
                } else {
                    alert('Ошибка');            
                }
            } else {
                alert('Поставьте галочку');
            }
        }
    </script>

	<?php wp_footer(); ?> 

    <script type="text/javascript">
        // light-gallery
        let gallery = lightGallery(document.querySelector('.light-gallery'), {
            selector: '.light-gallery__item',
            download: false,
            mobileSettings: { 
                controls: true, 
                showCloseIcon: true, 
                download: false, 
            },
        });
        
        let modelGalleryImages = document.querySelectorAll('.model-light-gallery');

        modelGalleryImages.forEach(g => {
            let gallery = lightGallery(g, {
            selector: '.light-gallery__item',
            download: false,
            mobileSettings: { 
                controls: true, 
                showCloseIcon: true, 
                download: false, 
            },
            });
        });
    </script>
</body>

</html>