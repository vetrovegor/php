<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'doctor1_bd' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ivt-g]0|3g?x-8W>VngJtx)F*Tqv>9WyTVh,kst6xaW]7r$-7)R^Ko37r)P`uL0C' );
define( 'SECURE_AUTH_KEY',  'I^F5#P{o! }CGHjo|9SfEZ*+ZB>4~D>FTBgDGa~yijA.}scO@#B7A?qRBehC0_);' );
define( 'LOGGED_IN_KEY',    '?p&=Y{?k>%62tGdrj5l0m60?F;aB2E6e5em Mb`VZ{H@ }h!=Ke_wN|.~3ZU2Q)f' );
define( 'NONCE_KEY',        'bHODm@Qf}hL6B4x}R^E[&m1JG47~v fN)DJiNsytywoTvu_U89 )5K2(=`Mz1yFL' );
define( 'AUTH_SALT',        '&Xm4`%Qw& 2P$[=-D6Koa]E9`U%>}>Nu?X_3zF]zSrl2eiHWiL9%}a )VZ5k<4Y>' );
define( 'SECURE_AUTH_SALT', '/}>F/:5ZuES:nXs)8o:|usch4|]T_MZ4a9+W{.j;5qeM:G~$]$O^^9$Ge*Q:<Q3x' );
define( 'LOGGED_IN_SALT',   '1G_N3;jc@NtK~X,M.vbA2vrgcQ?h}NKfP#DRfI,X`^WheE2lI?PlwIX5~&q|V]Qd' );
define( 'NONCE_SALT',       '5:-8;aaHj.xBm/cO#T)Y,k3tGlTwkL=2RGe!4&Gb~$cI$b+LSAWVLF0k-dA4-m!*' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
