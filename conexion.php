<?php
$servidor = "localhost";
$usuario = "root";
$pass = ""; 
$basedatos = "miformulario"; // Nombre de la base de datos

// Conexión a la base de datos
$conexion = mysqli_connect($servidor, $usuario, $pass, $basedatos);

// Verificar conexión
if (!$conexion) {
    die("Error de conexión: " . mysqli_connect_error());
}
?>
