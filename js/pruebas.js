const respuestasCorrectas = {
    1: 'a',
    2: 'a',
    3: 'b',
    4: 'b',
    5: 'b',
    6: 'd',
    7: 'c',
    8: 'a',
    9: 'a',
    10: 'a',
    11: 'a',
    12: 'c',
    13: 'c',
    14: 'a',
    15: 'c',
    16: 'b',
    17: 'b',
    18: 'b',
    19: 'c',
    20: 'd',
    21: 'd',
    22: 'c',
    23: 'a',
    24: 'a',
    25: 'b',
    26: 'a',
    27: 'a',
    28: 'b',
    29: 'a',
    30: 'a',
    31: 'd',
    32: 'd',
    33: 'b',
    34: 'd',
    35: 'd',
    36: 'c',
    37: 'c',
    38: 'a',
    39: 'b',
    40: 'd',
    41: 'b',
    42: 'd',
    43: 'd',
    44: 'b',
    45: 'b',
    46: 'b',
    47: 'a',
    48: 'd',
    49: 'c',
    50: 'b',
    51: 'a',
    52: 'c',
    53: 'd',
    54: 'a',
    55: 'b',
    56: 'a',
    57: 'b',
    58: 'a',
    59: 'd',
};

function enviarRespuestas() {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; // Limpia los resultados previos

    let aciertos = 0;

    // Iterar sobre las preguntas
    for (let pregunta in respuestasCorrectas) {
        const opciones = document.getElementsByName(pregunta);
        let respondido = false;

        // Verificar cada opción de respuesta
        for (const opcion of opciones) {
            if (opcion.checked) {
                respondido = true; // Se ha respondido la pregunta
                if (opcion.value === respuestasCorrectas[pregunta]) {
                    aciertos++;
                    resultadoDiv .innerHTML += `<p>Pregunta ${pregunta}: Correcta ✅</p>`;
                } else {
                    resultadoDiv.innerHTML += `<p>Pregunta ${pregunta}: Incorrecta ❌</p>`;
                }
                break; // Sale del bucle una vez que se encuentra la opción seleccionada
            }
        }

        // Si no se respondió la pregunta
        if (!respondido) {
            resultadoDiv.innerHTML += `<p>Pregunta ${pregunta}: Sin responder ⚠️</p>`;
        }
    }

    // Mostrar el resultado final
    resultadoDiv.innerHTML += `<h3>Resultado final: ${aciertos} aciertos.</h3>`;
}

// Agregar un evento para enviar respuestas al hacer clic en un botón
document.getElementById("enviar").addEventListener("click", enviarRespuestas);
