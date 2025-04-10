const btMenu = document.getElementById('bt_menu');
const menu = document.getElementById('menu');

btMenu.addEventListener('click', () => {
  menu.classList.toggle('ativo');
});

window.addEventListener("scroll", () => {
    if (menu.classList.contains('ativo')) {
        menu.classList.remove("ativo");
    }       
});

document.querySelectorAll('.carrossel_container').forEach(container => {
    const carrossel = container.querySelector('.carrossel_imagens');
    const btnProximo = container.querySelector('.btn_carrossel.proximo');
    const btnAnterior = container.querySelector('.btn_carrossel.anterior');

    const larguraItem = carrossel.querySelector('.imagens_projeto').offsetWidth + 16;

    btnProximo.addEventListener('click', () => {
        carrossel.scrollBy({ left: larguraItem, behavior: 'smooth' });
    });

    btnAnterior.addEventListener('click', () => {
        carrossel.scrollBy({ left: -larguraItem, behavior: 'smooth' });
    });
});

function baixar_arquivo () {
    const link = document.createElement('a')
    link.href = "Currículo Atualizado.pdf";
    link.download = "Curriculo-Douglas.pdf";
    link.click()
}