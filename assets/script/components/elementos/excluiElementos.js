export function excluiElementos(botao, container) {
    botao.addEventListener('click', function () {
        container.remove();
    });
}