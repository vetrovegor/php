<footer class="footer lock-padding">
            <div class="container">
                <div class="footer__inner">
                    <div class="footer__item">
                        <p class="footer__text"><?= CFS()->get('footer__text'); ?></p>
                    </div>
                    <?php
                        if(CFS()->get('footer__btn') != null) { ?>
                            <div class="footer__item">
                                <a href="<?= CFS()->get('footer__btn-link'); ?>" class="footer__text footer__link privacy-policy-btn"><?= CFS()->get('footer__btn'); ?></a>
                            </div>
                            <?php 
                        } ?>
                </div>
            </div>
        </footer>
        <div class="menu-popup">
            <a href="#" class="close-btn">
                <img src="<?php echo get_template_directory_uri() ?>/assets/img/header/close-btn.svg" alt="close">
            </a>
        </div>
        <div class="form-popup">
            <a href="#" data-da="form-popup__inner, 660, 0" class="form-popup__close-btn">
                <img src="<?php echo get_template_directory_uri() ?>/assets/img/contact/close.svg" alt="close">
            </a>
            <div class="form-popup__inner">
            </div>
        </div>
        <div class="policy-popup">
            <div class="policy-popup__container container">
                <div class="policy-popup__inner">
                    <a href="#" class="policy-popup__close-btn">
                        <img src="<?php echo get_template_directory_uri() ?>/assets/img/header/close-btn.svg" alt="close">
                    </a>
                    <h2 class="policy-popup__title title"><?= CFS()->get('policy-popup__title'); ?></h2>
                    <div class="policy-popup__articles">
                        <?php
                            $loop = CFS()->get('policy-popup__articles');
                            foreach($loop as $el) {
                                ?>
                                <div class="policy-popup__article">
                                    <h4 class="policy-popup__label text"><?= $el['policy-popup__label'] ?></h4>
                                    <p class="policy-popup__text text"><?= $el['policy-popup__text'] ?></p>
                                </div>
                                <?php
                            }
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU"></script>

    <script type="text/javascript">
        // отправка формы на почту

        async function SendForm(e) {
            e.preventDefault();
            contactForm = e.target.closest('.form-contact');

            let formData = new FormData(contactForm);

            let response = await fetch('<?php echo get_template_directory_uri() ?>/assets/php/send.php', {
                method: 'POST',
                body: formData,
            });
            if(response.ok) {
                alert('Письмо отправлено');
                contactForm.reset();
            } else {
                alert('Ошибка');            
            }
        }
    </script>

	<?php wp_footer(); ?>
</body>

</html>