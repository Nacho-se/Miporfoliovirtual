function animacion() {
    let textoAnimacion = [
        ["N", "A", "C", "H", "O"],
        ["C", "R", "E", "A", "T", "I", "V", "O"]
    ];
    let letraContador = -1;
    let nivelArray = 0;

    const contenedorAnimacion = document.querySelector(".contenedor_texto_animacion"); // Arreglé el espacio adicional

    function pintarTexto() {
        letraContador++;
        contenedorAnimacion.textContent += textoAnimacion[nivelArray][letraContador]; // nivelArray en vez de nivelarray

        if (letraContador === textoAnimacion[nivelArray].length - 1) {
            clearInterval(intervalo);

            setTimeout(() => {
                let intervaloBorrar = setInterval(() => {
                    contenedorAnimacion.textContent = ""; // Limpiamos el texto antes de comenzar la eliminación
                    letraContador--;

                    // Eliminar el texto actual de derecha a izquierda
                    for (let i = 0; i <= letraContador; i++) {
                        contenedorAnimacion.textContent += textoAnimacion[nivelArray][i];
                    }

                    if (letraContador < 0) {
                        clearInterval(intervaloBorrar);
                        nivelArray++;

                        // Reiniciar el nivelArray si se llega al final
                        if (nivelArray === textoAnimacion.length) {
                            nivelArray = 0;
                        }

                        intervalo = setInterval(pintarTexto, 150);
                    }
                }, 150);
            }, 1000);
        }
    }

    let intervalo = setInterval(pintarTexto, 150);
}

window.addEventListener("load", animacion);
