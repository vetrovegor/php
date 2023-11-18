<?php

function clear_data($data) {
    $data = htmlspecialchars($data);
    $data = urldecode($data);
    $data = trim($data);
    return $data;
}

$name = clear_data($_POST['name']);
$email = clear_data($_POST['email']);
$msg = clear_data($_POST['msg']);
$token = "6190025239:AAEcnSsgnoS9UnvzltoCSpklUEWNjdf1hSA";
$chat_id = "-1001680507519";

// $to = "xcrownless@mail.ru";
// $subject = "Письмо с сайта";

$message = "Имя: " . $name . "%0A";
$message .= "Почта: " . $email . "%0A";
$message .= "Сообщение: " . $msg . "%0A";

$ch = curl_init("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&text={$message}&parse_mode=html");
curl_exec($ch);
curl_close($ch);

// mail($to, $subject, $message);