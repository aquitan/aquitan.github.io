<?php 

$name= $_POST['username'];
$phone= $_POST['userphone'];
$email = $_POST['email'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'aquitan@mail.ru';                 // SMTP username
$mail->Password = '19421616Qq';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
$message = "
	Имя пользователя: ".htmlspecialchars($name)."<br />
	Телефон: <a href='tel:$phone'>".htmlspecialchars($phone)."</a></br>".htmlspecialchars($email);;
$mail->setFrom('aquitan@mail.ru', 'Vbetone48.ru');
$mail->addAddress('aquitan@mail.ru', 'Joe User');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Перезвоните мне!';
$mail->Body    =  $message;
$mail->AltBody = 'Перезвоните';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
   header('location: index.html');
}

?>