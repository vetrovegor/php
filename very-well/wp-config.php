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
define( 'DB_NAME', 'very-well' );

/** Имя пользователя базы данных */
define( 'DB_USER', 'root' );

/** Пароль к базе данных */
define( 'DB_PASSWORD', '' );

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
define( 'AUTH_KEY',         'WERLZAD^1qus%iPT/OmPJhwlS5i5.x~tm2~tJ2m3?G^P|]!!L9TR1.W%!+}-)grc' );
define( 'SECURE_AUTH_KEY',  '_R_zjQVzie[$<KZwnQjHzmE%Qs}YmBBvC6r7~tYex CUIRUt$pW3mND&+`1^qnrM' );
define( 'LOGGED_IN_KEY',    '/u5$n=xV{D)*[` kkjYaM$%8B91s.-V/Blt}{2?{w_E/.9r.GYp_Hif)98|4>i;)' );
define( 'NONCE_KEY',        'R>;DJUXVBZGHx11d)A(BAiMVwbsi1V<*l^Y9-6XaY}dM_qNJAh];-D@xfhA5]I?7' );
define( 'AUTH_SALT',        '6c]9TaoLss[x@|.qW knsAKaQ*@(SN}NHhBa:v95Twg~D[@89G2tjx;^eB1)(D<:' );
define( 'SECURE_AUTH_SALT', 'EAYNzQ?y:C:&c9o^&hG7c]4&}@3WW!0ntH)Vpf/&67},u`?j9&[-V#Ds%Ij9 9gT' );
define( 'LOGGED_IN_SALT',   'U`-YbH.xUly[GD[RO9v0]?!kN:s;PWbvISGI.e??dHzj4&vqV 50zh)1Dh05-yBB' );
define( 'NONCE_SALT',       '-a^<qFhdLa3s_.fsIV}LUb@MHTEP>+20-5QG4[^NU&K#O1;@2?R~3_)LU$&=ldDQ' );

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
