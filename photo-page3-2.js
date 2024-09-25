// document.querySelectorAll('.overlay').forEach(overlay => {
//     overlay.addEventListener('click', (e) => {
//         const photoItem = e.target.closest('.photo-item');
//         const largePhoto = document.getElementById('large-photo');
//         const description = document.getElementById('photo-description');
//         const thumbnail = photoItem.querySelector('.thumbnail');

//         largePhoto.src = thumbnail.src;
//         description.textContent = `Descripción de ${thumbnail.alt}`;
//     });
// });
// Agregar descripciones específicas para cada imagen
const descriptions = {
    "Video 1": "Edición. Esta imagen representa...",
    "Video 2": "Grabación. Aquí se puede ver...",
    "Video 3": "Con Móvil. Este proyecto ilustra..."
};

document.querySelectorAll('.overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        const photoItem = e.target.closest('.photo-item');
        const largePhoto = document.getElementById('large-photo');
        const description = document.getElementById('photo-description');
        const thumbnail = photoItem.querySelector('.thumbnail');
        const altText = thumbnail.alt; // Obtener el alt de la imagen

        // Actualizar la imagen grande
        largePhoto.src = thumbnail.src;

        // Actualizar el texto de descripción en función de la imagen seleccionada
        description.textContent = descriptions[altText] || "Descripción no disponible.";
    });
});



