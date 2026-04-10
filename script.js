const goWhats = document.getElementById('btn_gowhats');
const modal = document.getElementById('modal');
const bnt = document.getElementById('bntzap');

bnt.onclick = () => {
    modal.style.display = "flex";
};

modal.onclick = () => {
    modal.style.display = "none";
}

goWhats.addEventListener("click", () => {
    const mensagem = encodeURIComponent("Olá! Gostaria de saber um pouco mais sobre o seu trabalho.");
    window.open(`https://wa.me/5551989622580?text=${mensagem}`, "_blank");
});