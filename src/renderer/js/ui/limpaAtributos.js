export function limpaAtributos() {
    document.querySelector('#button_limpar').addEventListener('click', () => {
        document.querySelector('#form').reset();
        document.querySelector('#input_url').value = ''
        document.querySelector('#select_navegador').value = 'chrome'
    });
}