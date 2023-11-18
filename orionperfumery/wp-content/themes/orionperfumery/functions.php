<?php

add_action( 'wp_enqueue_scripts', function() {
	wp_enqueue_style( 'swiper', get_template_directory_uri() . '/assets/css/swiper-bundle.min.css');
	wp_enqueue_style( 'style', get_template_directory_uri() . '/assets/css/style.css');

    wp_deregister_script( 'jquery');
	wp_register_script( 'jquery', 'https://code.jquery.com/jquery-3.6.1.min.js', null, null, true);
	
	wp_enqueue_script( 'jquery');
	wp_enqueue_script( 'swiper', get_template_directory_uri() . '/assets/js/swiper-bundle.min.js', array('jquery'), 'null', true );
	wp_enqueue_script( 'script', get_template_directory_uri() . '/assets/js/script.js', array('jquery'), 'null', true );
	wp_enqueue_script( 'dynamicAdaptive', get_template_directory_uri() . '/assets/js/dynamicAdaptive.js', array('jquery'), 'null', true );
} );

add_theme_support('title-tag');
add_theme_support('custom-logo');

add_filter( 'upload_mimes', 'svg_upload_allow' );

function svg_upload_allow( $mimes ) {
	$mimes['svg']  = 'image/svg+xml';
	return $mimes;
}

?>