<script>
    document.addEventListener("DOMContentLoaded", function() {
        let fotos = document.querySelectorAll('.misfotos img');
        
        // Añadir animación para cada imagen con un retardo
        fotos.forEach((foto, index) => {
            setTimeout(function() {
                foto.classList.add('show'); // Añadir la clase 'show' para activar la animación
            }, index * 1000); // Retraso de 1 segundo por cada imagen
        });
    });
</script>