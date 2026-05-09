export function validaAtributos() {
    const inputs = document.querySelectorAll('input');

    inputs.forEach((input) => {
        input.addEventListener('input', (event) => {
            const elemento = event.target;

            if (elemento.type === 'number') {
                const valor = parseInt(elemento.value);
                const max = parseInt(elemento.max);

                if (!isNaN(max) && valor > max) {
                    elemento.value = max;
                }
            }
        });

        input.addEventListener('blur', (event) => {
            const elemento = event.target;

            if (elemento.type === 'number') {
                const valor = parseInt(elemento.value);
                const min = parseInt(elemento.min);

                if (!isNaN(min) && valor < min) {
                    elemento.value = min;
                }
            }
        });
    });
}