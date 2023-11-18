<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?php the_title() ?></title>
    <?php wp_head(); ?>
  </head>
  <body>
    <header class="header header--background">
      <div class="container">
        <div class="header__inner">
          <div class="logo">
            <a class="logo__link" href="<?php echo home_url(); ?>">
              <?php the_custom_logo(); ?>
            </a>
          </div>

          
<?php wp_nav_menu( [
   'theme_location' => 'top',
   'container' => '',
   'menu_class' => 'header__list',
   'menu_id' => ''
] ) ?>

          <div class="header__phone">
            <a class="header__phone-link" href="tel:+71234567890"
              ><?= CFS()->get('phone', 102) ?></a
            >
            <span class="header__phone-info"><?= CFS()->get('contacts_text4', 102) ?></span>
          </div>
        </div>
        <div class="header__mobile">
          <div class="logo">
            <a class="logo__link" href="<?php echo home_url(); ?>">
            <?php the_custom_logo(); ?>
            </a>
          </div>
          <input type="checkbox" id="hi" />
          <label class="menu" for="hi">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </label>
          <div class="header__mobile-box header__mobile-box--hidden">
          <?php wp_nav_menu( [
   'theme_location' => 'top',
   'container' => '',
   'menu_class' => 'header__list',
   'menu_id' => ''
] ) ?>

            <div class="header__phone">
              <a class="header__phone-link" href="tel:+71234567890"
                ><?= CFS()->get('phone') ?></a
              >
              <span class="header__phone-info"><?= CFS()->get('contacts_text4') ?></span>
            </div>
          </div>
        </div>
      </div>
    </header>