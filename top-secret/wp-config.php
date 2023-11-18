<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки базы данных
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры базы данных: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'top-secret_bd' );

/** Имя пользователя базы данных */
define( 'DB_USER', 'root' );

/** Пароль к базе данных */
define( 'DB_PASSWORD', 'root' );

/** Имя сервера базы данных */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '%tuyU}Al%Le[_L-DHH1){<Xm$Kaik#Y>6=~wm0ex-Q)gxNTTW:-%pw%qI+URFX8/' );
define( 'SECURE_AUTH_KEY',  'U=a1l>x_[/lCXpGl4CkT/R6<UK7oxLexvX|NvPj)e<GA5+^yWzY,MxDZsa8YSKl$' );
define( 'LOGGED_IN_KEY',    'I]8anOE%zwuYI!;k!NK5X9WN@o4%u:YcHVz{yW^g^HGT50OtsxDqn-_RR^E*`TNJ' );
define( 'NONCE_KEY',        'NQjy>X0]+sj`%M[pV|7l}n(%b,nbu;>yz}80RT@cTfZ*u5H%NI1*t[KFj)EYes0k' );
define( 'AUTH_SALT',        'yrnC4:6gH%FZ:lVBZW 6t#NJ1/i{H^su|.!>I<ggXn6nm9LS<lWXzP#x$HGQZSk2' );
define( 'SECURE_AUTH_SALT', 'ypDOiEdjm_+wuWIu^xVZ /|z7}!,2kG1*^{{%hqV^@%:af}{S^szuB1C9R(e(.][' );
define( 'LOGGED_IN_SALT',   'GiOFl ;DjD@#+@aV}5m:nmGT{0SmAKH=_=ZG}},*ig72x/CEOIk-j<Q=|7^*;&PJ' );
define( 'NONCE_SALT',       'Ov,bHsTHZo(^J3{<:wPpWL:pxKkPQ_n+>UGQjj5,9S0Q1X5Ko_<Ix]QS0kxY)T@F' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */



/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
