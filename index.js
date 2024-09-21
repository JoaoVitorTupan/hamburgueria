document.getElementById('cardapio').addEventListener('click', function (event) {
    event.preventDefault();

    window.location.href = 'https://joaovitortupan.github.io/Cardapio/';


});

document.getElementById('contactForm').addEventListener('submit', function() {
    event.preventDefault();     

    var nome = document.getElementById('nome').value;
    var endereco = document.getElementById('endereco').value;
    var mensagem = document.getElementById('mensagem').value;
    var mensagemCompleta = `Olá, meu nome é ${nome}, moro no esndereço: ${endereco}. E gostaria de fazer um pedido: ${mensagem}.`;
    var numeroWhatsApp = '554391165171'; 
    var linkWhatsApp = `https://wa.me/${554391165171}?text=${encodeURIComponent(mensagemCompleta)}`;
    
    window.location.href = linkWhatsApp;
});


