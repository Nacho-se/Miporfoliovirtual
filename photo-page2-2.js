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
    "Foto 1": "Retratos: Esta imagen representa...",
    "Foto 2": "Fotomontajes: Aquí se puede ver...",
    "Foto 3": "Estudio Fotográfico. Este proyecto ilustra..."
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



