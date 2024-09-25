<?php
require_once 'funciones.php';

// Registrar un nuevo cliente
if (isset($_POST["enviar"])) {
    $nombre_cliente = $_POST['nombre_cliente'];
    $correo = $_POST['correo'];
    $consultas = $_POST['consultas']; // Añadir campo de consulta si es necesario

    // Registrar cliente en la base de datos
    registrarCliente($nombre_cliente, $correo, $consultas);
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario Prueba</title>
    <link rel="stylesheet" href="estilos/estilo.css">
</head>
<body>
    <section id="contacto">
        <form action="" method="POST"> <!-- Cambiar de GET a POST -->
            <fieldset>
                <legend>Si te interesa mi trabajo...</legend>
                <label for="nom">Nombre: 
                    <input type="text" name="nombre_cliente" required>
                </label>
                <label for="email">E-mail: 
                    <input type="email" name="correo" required>
                </label>
                <label for="consultas">Consultas:(máx. 100 caracteres)</label>
                <textarea name="consultas" id="consultas" maxlength="100"></textarea>
            </fieldset>
            <input type="submit" name="enviar" id="enviar" value="Enviar">
        </form>
    </section>
</body>
</html>
