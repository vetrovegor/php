<?php
add_action( 'wp_enqueue_scripts', function() {
	wp_enqueue_style( 'swiper', 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css');
	wp_enqueue_style( 'twentytwenty', get_template_directory_uri() . '/assets/css/twentytwenty.css');
	wp_enqueue_style( 'style', get_template_directory_uri() . '/assets/css/style.css');

    wp_deregister_script( 'jquery');
	wp_register_script( 'jquery', 'https://code.jquery.com/jquery-3.6.1.min.js', null, null, true);
	
	wp_enqueue_script( 'jquery');
	wp_enqueue_script( 'swiper', 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js', array('jquery'), 'null', true );
	wp_enqueue_script( 'script', get_template_directory_uri() . '/assets/js/script.js', array('jquery'), 'null', true );
	wp_enqueue_script( 'ymaps', 'https://api-maps.yandex.ru/2.1/?apikey=123&lang=ru_RU' );
	wp_enqueue_script( 'event-move', get_template_directory_uri() . '/assets/js/jquery.event.move.js', array('jquery'), 'null', true );
	wp_enqueue_script( 'twentytwenty', get_template_directory_uri() . '/assets/js/jquery.twentytwenty.js', array('jquery'), 'null', true );
} );

add_theme_support('post-thumbnails');
add_theme_support('title-tag');
add_theme_support('custom-logo');

add_action( 'after_setup_theme', function() {
	register_nav_menu( 'header-menu', 'Меню в шапке' );
} );

add_action( 'after_setup_theme', function() {
	register_nav_menu( 'footer-menu', 'Меню в подвале' );
} );

add_action('init', 'reviews_post_type');

function reviews_post_type()
{
  register_post_type('blog', array(
    'label'  => null,
    'labels' => array(
      'name'               => 'Отзывы', // основное название для типа записи
      'singular_name'      => 'Отзыв', // название для одной записи этого типа
      'add_new'            => 'Добавить', // для добавления новой записи
      'add_new_item'       => 'Добавление', // заголовка у вновь создаваемой записи в админ-панели.
      'edit_item'          => 'Редактирование ', // для редактирования типа записи
      'new_item'           => 'Новая запись', // текст новой записи
      'view_item'          => 'Смотреть', // для просмотра записи этого типа.
      'search_items'       => 'Искать', // для поиска по этим типам записи
      'parent_item_colon'  => '', // для родителей (у древовидных типов)
      'menu_name'          => 'Отзывы', // название меню
    ),
    'description'         => '',
    'public'              => true,
    'publicly_queryable'  => null, // зависит от public
    'exclude_from_search' => false, // зависит от public
    'show_ui'             => null, // зависит от public
    'show_in_menu'        => null, // показывать ли в меню адмнки
    'show_in_admin_bar'   => null, // по умолчанию значение show_in_menu
    'show_in_nav_menus'   => null, // зависит от public
    'show_in_rest'        => null, // добавить в REST API. C WP 4.7
    'rest_base'           => null, // $post_type. C WP 4.7
    'menu_position'       => 4,
    'menu_icon'           => 'dashicons-category',
    'hierarchical'        => false,
    // 'supports'            => array('title', 'editor', 'thumbnail'), // 'title','editor','author','thumbnail',
    // 'taxonomies'          => false,
    'has_archive'         => true,
    'rewrite'             => array('slug' => 'reviews'),
    'query_var'           => true,
  ));
}