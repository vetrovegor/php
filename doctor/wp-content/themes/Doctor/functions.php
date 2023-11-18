<?php
add_action('wp_enqueue_scripts' , 'add_scripts_and_styles' );
add_action('after_setup_theme' , 'add_features' );
add_action('after_setup_theme' , 'add_menu' );


function add_scripts_and_styles() {
   wp_enqueue_script('main', get_template_directory_uri() . '/assets/js/main.js', false, null, true);
   wp_enqueue_style('style', get_stylesheet_uri(), false, null);
}

function add_features() {
   add_theme_support( 'custom-logo', [
      'height'      => 44,
      'width'       => 185,
      'flex-width'  => false,
      'flex-height' => false,
      'header-text' => '',
      'unlink-homepage-logo' => false,
   ] );
}

function add_menu() {
   register_nav_menu( 'top', 'Главное меню' );
}

/* Разрешить SVG файлы */
function extra_mime_types( $mimes ) {
   $mimes['svg'] = 'image/svg+xml';
   return $mimes;
 }
 add_filter( 'upload_mimes', 'extra_mime_types' );

 add_filter( 'nav_menu_css_class', 'add_my_class_to_nav_menu', 10, 2 );
 function add_my_class_to_nav_menu( $classes, $item ){
    /* $classes содержит
    Array(
       [1] => menu-item
       [2] => menu-item-type-post_type
       [3] => menu-item-object-page
       [4] => menu-item-284
    )
    */
    $classes[] = 'header__list-item';
 
    return $classes;
 }

?>