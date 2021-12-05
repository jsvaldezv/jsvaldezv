<?php
if(isset($_POST['acepto']))
{
    if(!empty($_POST['name']) && !empty($_POST['mail']) && !empty($_POST['message']))
    {
        $name = $_POST['name'];
        $correo = $_POST['mail'];

        $header = 'From: ' . "earcandytech.com" . "\r\n";
        $header .= "X-Mailer: PHP/" . phpversion() . "\r\n";
        $header .= "Mime-Version: 1.0 \r\n";
        $header .= "Content-Type: text/plain";

        $message = "Nombre: " . $name . "\r\n";
        $message .= "Correo: " . $correo . "\r\n";
        $message .= "Mensaje: " . $_POST['message'] . "\r\n";
        $message .= "Enviado el: " . date('d/m/Y', time());

        $para = 'jsvaldezv@gmail.com';
        $asunto = 'Contacto Portafolio';

        $mail = mail($para, utf8_decode($asunto), utf8_decode($message), $header);

        header("Location:index.html#form");
    }
}
?>