# hamburgueria
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
    <header>
        <div><img src="./logo.jpeg" class="logo-pequena"></div>
        
    </header>

    <section class="ok">
        <h1 class="titulo">Lanches prensados e saborosos, você encontra somente aqui!</h1>
    </section>

    <h2 class=contato>Faça seu pedido pelo WhatsApp</h2>

    <form id="contactForm" class="form">
        <button type="button" id="cardapio" class="cardapio">Cardápio</button>

        <p>Informe seu Nome:</p>
        <label for="nome"></label>
        <input type="text" id="nome" name="nome"><br><br>
        <p>Informe o seu endereço por favor:</p>
        <label for="endereco"></label>
        <input type="text" id="endereco" name="endereco"><br><br>
        <p>Informe o seu pedido:</p>
        <label for="mensagem"></label>
        <textarea id="mensagem" name="mensagem"></textarea><br><br>

        <button type="submit" class="botao">Enviar pelo WhatsApp</button>
    </form>
    

    <script src="index.js"></script>
</body>

</html>