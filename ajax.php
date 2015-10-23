<?php
/*

require 'PhpMailer/PhpMailer.php';
include 'PhpMailer/Mail.php';


if(isAjax() && isPost()){


    $nombre = isset($_POST['nombre'])? $_POST['nombre']:null;

    if(!filtrarInt($nombre)){
        echo  'Debe introducir su DNI';
        exit;
    }


    $mail = new Mail();

    $mail->title = 'SHALOM';
    $mail->title_correo = 'Envio desde la WEB';
    $mail->title_frase = 'CENTRAL DE ATENCI&Oacute;N <strong>715 8800</strong>';
    $mail->title_bg = '#ED1C24';

    $mail->setFrom('orestesv@overskull.pe');
    $mail->addAddress('katador1@gmail.com');
    $mail->subject('Important Email');
    $tema = $mail->dispatcher($_POST);
    $mail->body($tema);


    if(!$mail->send()){
        echo 'exito';
    }else{
        echo 'error';
    }

}else{
 header('location:index.php');
}


*/

?>
hola como estas
<!--
    <form id="formu2" name="formu2" method="POST" action="demo.php">
        <input type="text" placeholder="escribir" name="nombre">
        <input type="text" placeholder="escribir" name="apellido">
        <button type="submit">enviar</button>
    </form>

<div id="salida_formu2"></div>
<hr/>

<a href="demo.php" id="boton_over3" name="boton_over3" data-options='{"nombre":"orestes","tiempo":100}'>enviar</a>

<div id="salida_boton_over3"></div>


<div id="envio2" data-url="demo.php" data-options='"salida":400d,"ingreso":23d'> unico 2 </div>
<div id="salida_envio2"></div>-->