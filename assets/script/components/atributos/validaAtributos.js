export function validaAtributos() {
    const inputs = document.querySelectorAll('input');

    inputs.forEach((input) => {

        input.addEventListener('input', (event) => {

            const el = event.target;

            if (el.type === 'number') {

                const valor = parseInt(el.value);
                const max = parseInt(el.max);
                const min = parseInt(el.min);

                if (!isNaN(max) && valor > max) {
                    el.value = max;
                }

                if (!isNaN(min) && valor < min) {
                    el.value = min; 
                }
            }

        });

    });

}