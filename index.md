<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Qual é o animal?</title>

    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Potta+One&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./animal.css" />
  </head>
  <body class="paginatoda">
    <div class="titulocont"><h1 class="titulo">Qual é o animal?</h1></div>
    <div class="contpontuacao">
      <div class="pontcard">
        <h2 id="pontosnome">Pontos</h2>
        <h1 id="pontosnumero">0</h1>
      </div>
    </div>
    <div class="containerdecards">
      <div class="cardacertos">
        <p class="titulinho">Acertos</p>
        <ul class="listaacertos"></ul>
      </div>
      <div class="cardcentral">
        <div class="divdaimage"></div>
        <div class="nomeanimal"><h3>Gatinho</h3></div>
      </div>
      <div class="carderros">
        <p class="titulinho">Erros</p>
        <ul class="listaerros"></ul>
      </div>
    </div>

    <div class="footer">
      <button class="acertou btn">Acertou</button>
      <button class="errou btn">Errou</button>
    </div>
    <div class="containertimer">
      <h1 class="timer">100</h1>
    </div>

    <script src="./animal.js" charset="utf-8"></script>
  </body>
</html>
