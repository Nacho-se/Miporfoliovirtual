<?php
require_once 'conexion.php';

// Función para realizar la consulta
function realizarConsulta($sql, $mensajeSiExitoConsulta) {
    global $conexion;

    if (mysqli_query($conexion, $sql)) {
        echo $mensajeSiExitoConsulta;
    } else {
        echo "Error: " . mysqli_error($conexion);
    }
}

// Función para registrar clientes en la base de datos
function registrarCliente($nombre_cliente, $correo, $consultas) {
    // Limpiar entradas para evitar inyección SQL
    global $conexion;
    $nombre_cliente = mysqli_real_escape_string($conexion, $nombre_cliente);
    $email_cliente = mysqli_real_escape_string($conexion, $correo);
    $consultas = mysqli_real_escape_string($conexion, $consultas);

    // Consulta SQL para insertar datos en la tabla 'datos_clientes'
    $sql = "INSERT INTO datos_clientes (nombre_cliente, correo, consultas) 
            VALUES ('$nombre_cliente', '$correo', '$consultas')";

    realizarConsulta($sql, "Cliente $nombre_cliente registrado correctamente.");
}

// Función para ejecutar consultas
function ejecutarConsulta($sql) {
    global $conexion;
    $resultado = mysqli_query($conexion, $sql);

    if (!$resultado) {
        die('Error en la consulta: ' . mysqli_error($conexion));
    }

    return $resultado;
}
?>




