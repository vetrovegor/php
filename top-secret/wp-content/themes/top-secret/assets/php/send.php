<?php

function clear_data($data) {
    $data = htmlspecialchars($data);
    $data = urldecode($data);
    $data = trim($data);
    return $data;
}

$tel = clear_data($_POST['tel']);
$to = clear_data($_POST['to']);

$subject = "Письмо с сайта";
$message = "Телефон: +" . $tel;

mail($to, $subject, $message);