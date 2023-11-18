<?php

add_action( 'wp_enqueue_scripts', function() {
	wp_enqueue_style( 'swiper', 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css');
	wp_enqueue_style( 'lightGallery', get_template_directory_uri() . '/assets/css/lightgallery-bundle.css');
	wp_enqueue_style( 'style', get_template_directory_uri() . '/assets/css/style.css');

    wp_deregister_script( 'jquery');
	wp_register_script( 'jquery', 'https://code.jquery.com/jquery-3.6.1.min.js', null, null, true);
	
	wp_enqueue_script( 'jquery');
	wp_enqueue_script( 'lightGallery', get_template_directory_uri() . '/assets/js/lightgallery.min.js', array('jquery'), 'null', true );
	wp_enqueue_script( 'swiper', 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js', array('jquery'), 'null', true );
	wp_enqueue_script( 'inputMask', get_template_directory_uri() . '/assets/js/inputmask.min.js', array('jquery'), 'null', true );
	wp_enqueue_script( 'script', get_template_directory_uri() . '/assets/js/script.js', array('jquery'), 'null', true );
	wp_enqueue_script( 'dynamicAdaptive', get_template_directory_uri() . '/assets/js/dynamicAdaptive.js', array('jquery'), 'null', true );
	// <script src="js/lightgallery.min.js"></script>
	// <link rel="stylesheet" href="css/lightgallery-bundle.css">
} );

add_theme_support('post-thumbnails');
add_theme_support('title-tag');
add_theme_support('custom-logo');

add_action( 'after_setup_theme', function() {
	register_nav_menu( 'header-menu', 'Меню в шапке' );
} );

add_filter( 'upload_mimes', 'svg_upload_allow' );

function svg_upload_allow( $mimes ) {
	$mimes['svg']  = 'image/svg+xml';
	return $mimes;
}

function filter_wpseo_breadcrumb_separator($this_options_breadcrumbs_sep) {
    return 
	'<svg width="29" height="6" viewBox="0 0 29 6" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M28.2828 3.28285C28.4391 3.12664 28.4391 2.87337 28.2828 2.71716L25.7373 0.171575C25.581 0.0153655 25.3278 0.0153654 25.1716 0.171575C25.0154 0.327785 25.0154 0.581051 25.1716 0.73726L27.4343 3L25.1716 5.26274C25.0154 5.41895 25.0154 5.67222 25.1716 5.82843C25.3278 5.98464 25.581 5.98464 25.7373 5.82843L28.2828 3.28285ZM-3.49691e-08 3.4L28 3.4L28 2.6L3.49691e-08 2.6L-3.49691e-08 3.4Z"
			fill="black" />
	</svg>';
};

add_filter('wpseo_breadcrumb_separator', 'filter_wpseo_breadcrumb_separator', 10, 1);
?>