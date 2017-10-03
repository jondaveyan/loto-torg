<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';
$mail = new PHPMailer(true); 


$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'for4john@gmail.com';
$mail->Password = 'fuckoff013';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;
$mail->setLanguage('ru', 'vendor/phpmailer/phpmailer/language');
$mail->isHTML(true);

$email_to = "jon.daveyan@gmail.com";
$email_subject = "Loto-torg";

$name = $_POST['name']; // required
$tel = $_POST['tel']; // required

$email_message = "Клиент по имени <b>".$name."</b> запросил звонок.<br>";
$email_message .= "Вот его номер телефона: <b>".$tel."</b>.<br>";

$mail->setFrom('jon.daveyan@gmail.com');
$mail->addReplyTo('jon.daveyan@gmail.com');
$mail->addAddress($email_to);
$mail->Subject = $email_subject;
$mail->Body = $email_message;

try {
  $mail->send();
    echo json_encode(array('success' => true));
} catch (Exception $e) {
    echo json_encode(array('error' => $mail->ErrorInfo));
}
 
?>
 
