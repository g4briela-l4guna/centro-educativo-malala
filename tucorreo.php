
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") 
{
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $telefono = $_POST['telefono'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];
    
    $destinatario = "lagunamandujanodayanagabriela@gmail.com";
    $asuntoCorreo = "Nuevo mensaje desde el formulario";
    $cuerpoCorreo = "Nombre: $nombre\n";
    $cuerpoCorreo .= "Correo electrónico: $correo\n";
    $cuerpoCorreo .= "Teléfono: $telefono\n";
    $cuerpoCorreo .= "Asunto: $asunto\n";
    $cuerpoCorreo .= "Mensaje: $mensaje\n";

    // Enviar el correo
    if (mail($destinatario, $asuntoCorreo, $cuerpoCorreo)) {
        // Redirigir al usuario a una página de inicio
        header("Location: index.html");
        exit();
         // Asegura que se detiene la ejecución del script después de la redirección
    } 
 else {
        echo "Error al enviar el correo.";
    }
 else {
    echo "Ha ocurrido un error.";
 }

}
?>