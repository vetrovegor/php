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
define( 'DB_NAME', 'orionperfumery_bd' );

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
define( 'AUTH_KEY',         'kQ]jOBFRA98NO#ph4=I:0]CEKAOU6=Cd]?{g3lvyDOm m/?p`Mk&<h0l>X;Ujnb<' );
define( 'SECURE_AUTH_KEY',  'al0w5R<$>#+$q)wpOp%#{ASm9NW}E2<8bV9NQ&U^`+VS%l1`pV)aMkoR&^FE)&b}' );
define( 'LOGGED_IN_KEY',    'MpDtfF-FGxTDyQDRY@ylRi4s*W|q^{dVB>t~m~^n^FS*v:,VJyU&[phFQ=q1k#W]' );
define( 'NONCE_KEY',        'Wf$IdEuudN/S15N=Am0c zgJAN}S(N5Z6J$HI5Fo27#Rr.HDgt7Vc5b>:-lVrH/g' );
define( 'AUTH_SALT',        'et8keO KT(i.AJ!z;K_~].&cWBP!*Q]nI/UZ;LB1s-9Md:Ve;UGDM|rvdY;+fh5i' );
define( 'SECURE_AUTH_SALT', 'wBC[-h,rSqCVR__m_%4HtT%ILZX/%t?,pU&U(7XFJv<vlm4$O -[+[Do`&LeRu@E' );
define( 'LOGGED_IN_SALT',   '#c+-P3>eqoF^IB#EgfA9&;k:_W#=&VTA?#%Y|&}Z[1O/U}MmQFJkzR-Q$QJ~t :-' );
define( 'NONCE_SALT',       'gm%@`~m;~Ur1cOwMxnQGNlg+5h`)mI?-hnd?{A~lPck}hw7;H%3~$E2i5{*}f)7Y' );

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
