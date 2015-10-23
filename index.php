
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/over_ajax.css">
</head>
<body>
en el index
	<div id="main">
		<form id="formu" name="formu" method="POST" action="ajax.php">
			<input type="text" placeholder="escribir" name="dato[]">
			<input type="text" placeholder="escribir" name="dato[]">
            <button type="submit">enviar</button>
		</form>
	</div>
	<div id="ingresox"></div>
<div id="bredi"></div>
<hr/>
<!--
<a href="ajax.php" id="boton_over" name="boton_over" data-options='{"nombre":"orestes","tiempo":100}'>enviar</a>

<div id="salida_boton_over"></div>

<hr/>

<div id="envio" data-url="ajax.php" data-options='"salida":400,"ingreso":23'> unico </div>
<button id="exe" type="button"  data-url="ajax.php" data-options='"salida":400,"ingreso":23' >carga</button>
<div id="salida_envio"></div>

-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script type="text/javascript" src="js/overskull_ajax.js"></script>
<script type="text/javascript" src="js/main.js"></script>	
	
</body>
</html>