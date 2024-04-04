let titulo= document.querySelector('h1');
titulo.innerHTML = 'Primeiro desafio do inova';

let subTitulo = document.querySelector('p');
subTtulo.innerHTML= 'desafio feito por karolline silva almeida';

function verificar01(){
    console.log('O botão 01 foi clicado');
    alert ('Este programa faz o cálculo da média e imprima o resultado final da média.');
    let nota01 = parseInt(prompt('escreva a primeira nota de Aline'));
    let nota02 = parseInt(prompt('escreva a segunda nota de Aline'));
    let nota03 = parseInt(prompt('escreva a terceira nota de Aline'));
    let mediaNotas = ((nota01+nota02+nota03)/3);
    console.log(`Primeira: ${nota01},Segunda: ${nota02},Terceira: ${nota03},Média: ${mediaNotas}`);
        if (mediaNotas >= 7){
            alert (`Aline foi aprovada, com média ${mediaNotas}`)
        }
        else{
            alert (`Aline foi reprovada, com média ${mediaNotas}`)
        }
}


function verificar02(){
    console.log('O botão 02 foi clicado');
    alert ('Os números sorteados foram: 15, 8, 90, 75, 102, 6 e 2.');
    let numerosSorteio = [15, 8, 90, 75, 102, 6, 2];
    console.log(`Os números são ${numerosSorteio}`);
    numerosSorteio.sort(function(a, b){return a - b;});
    alert(`Tais comece a anotar!\nOs números em ordem são:${numerosSorteio}`); 
}



function verificar03(){
    console.log('o botão 3 foi clicado');
    alert ('Os números dos frascos são: 12,5,23,17,8,14,3,19');
    let frascos= [12,5,23,17,8,14,3,19];
    console.log(`Os números são ${frascos}`);
    frascos.sort(function(a, b){return a - b;});
    console.log(`A sequencia secreta é ${frascos}`)
    let respostaQuimica = prompt ('Organize os frascos: 12, 5, 23, 17, 8, 14, 3, 19 para revelar o segredo alquímico.');
    if (respostaQuimica == frascos){
        alert ('MUito bem!\nO segredo Alquímico foi revelado.')
    }
    else{
        alert('Esta não é a sequencia correta.');
    }   
}



function verificar04(){
    console.log('O botão 04 foi clicado');
    let numeroFazendeiro = [23, 16, 11, 8, 19, 14, 5, 21]
    alert('O fazendeiro quer dividir seus lotes em números primos.\nSão esses: 23, 16, 11, 8, 19, 14, 5, 21');
    function verificarPrimo(numero) {
        if (numero <= 1) {
          return false;
        }
        for (let i = 2; i < numero; i++) {
          if (numero % i === 0) {
            return false;
          }
        }
        return true;
      }
  
let numeroPrimo = [];
for(let i = 0; i <numeroFazendeiro.length; i++){
   if (verificarPrimo(numeroFazendeiro[i])) {
    numeroPrimo.push(numeroFazendeiro[i]);
   }
}
console.log('números primos da lista' + numeroPrimo);
alert (`o fazendeiro descobriu que os lotes ${numeroPrimo} são primos`);
}


function verificar05(){
    console.log('o botão 05 foi cliacado');
    alert('olá, eu sou o conte palavras');
    let texto = prompt('Digite um pequeno texto e eu contarei quantas palavras tem.')
    let palavras = texto.split(' ');
    let numeroDePalavras = palavras.length;
    console.log(texto);
    console.log(numeroDePalavras + 'palavras');
    alert(`sou o conte palavras, seu texto possui ${numeroDePalavras} palavras `);
}


function verificar06() {
    console.log('o botão 06 foi clicado');
alert('oie, eu irei calcular o fatorial do número pra você');
    let numeroEscolhido = parseInt(prompt("\nDigite um número e eu irei calcular o fatorial dele."));
let fatorial = calcularFatorial(numeroEscolhido);
function calcularFatorial(numeroEscolhido) {
    if (numeroEscolhido === 0 || numeroEscolhido === 1) {
      return 1;
    }
    for (let i = numeroEscolhido - 1; i >= 1; i--) {
      numeroEscolhido *= i;
    }
    return numeroEscolhido;
  }
  console.log("O fatorial de " + numeroEscolhido + " é: " + fatorial);
    alert(`O fatorial do número ${numeroEscolhido} é ${fatorial}`);
}


function verificar07() {
    console.log('o botão 07 fou clicado');
    alert('comprou várias coisas e não sabe quanto gastou? relaxa, eu te ajudo!');
    let itensComprados = prompt('Escolha os itens que foram comprados: 1 - R$ 2,50, 2 - R$ 3,75, 3 - R$ 1,99.\nDeixe as respostas separadas por espaço.');
    let totalComprado = 0;
    let opcoes = itensComprados.split(' ');
    for (let i = 0; i < opcoes.length; i++) {
      switch (opcoes[i]) {
        case "1":
          totalComprado += 2.50;
          break;
        case "2":
          totalComprado += 3.75;
          break;
        case "3":
          totalComprado += 1.99;
          break;
        default:
          console.log("Opção inválida");
      }
    }
    console.log(`O valor total da compra é: R$ ${totalComprado.toFixed(2)}`);
    alert(`O valor total da compra é: R$ ${totalComprado.toFixed(2)}.\nagora você sabe quanto gastou`);
}


function verificar08() {
    console.log('o botão 08 foi clicado');
    alert('Na nossa biblioteca o preço da multa é de R$ 0,50 por dia de atraso para cada livro.\n vamos ver quanto você deve.');
    let livrosTotal = parseInt(prompt('quantos livros estão em atraso?'));
    let multaDias = parseInt(prompt('quantos dia estão em atraso'));
    console.log(`Você tem ${livrosTotal} livros emprestados e ${multaDias} dias em atraso.`);
    alert(`Você tem ${livrosTotal} livro${livrosTotal !== 1 ? 's' : ''} alugado${livrosTotal !== 1 ? 's' : ''} em ${multaDias} dia${multaDias !== 1 ? 's' : ''} em atraso.`);
    let debitoBiblio = (livrosTotal * (multaDias*0.5));
    alert(`portanto, você nos deve um total de R$ ${debitoBiblio}.`)
    console.log(`Você deve R$ ${debitoBiblio}`)
}

function verificar09() {
    console.log('o botão 09 foi clicado');
    alert('tome cuidado,você pode ser atacado');

        let vida = 100
        function atacarHero() {
            vida -= 30;
            console.log(`Vida do personagem após o ataque: " + ${vida}`);
            if (vida <= 0) {
             console.log('é melhor você correr.\neles vão te pegar');
             alert('é melhor você correr.\neles vão te pegar')
            }
        }
    setTimeout(atacarHero, 2000);
    setTimeout(atacarHero, 4000);
    setTimeout(atacarHero, 6000);
    setTimeout(atacarHero, 8000);
    }


    function verificar10() {
        console.log('o botão 10 foi clicado');
        function contarLetras(string) {
            let maiusculas = 0;
            for (let i = 0; i < string.length; i++) {
                if (string[i] >= 'A' && string[i] <= 'Z') {
                    maiusculas++;
                }
             }
            return maiusculas;
        }
        alert('posso te ajudar a contar as letras maiúsculas de uma frase?')
        let tamanho = prompt('Use uma string para que eu conte', 'LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY');
        console.log("Número de letras maiúsculas na string: " + contarLetras(tamanho));
    }
    

    function verificar11() {
        console.log('o botão 11 foi ativado');
        function clIdade(dataDeNascimento) {
            let dataAtual = new Date();
            let anoAtual = dataAtual.getFullYear();
            let anoDeNascimento = new Date(dataDeNascimento).getFullYear();
            let idade = anoAtual - anoDeNascimento;
            return idade;
        }
        let dataDeNascimento = prompt('use: ano-mês-dia', 'YYYY-MM-DD');
        let idade = clIdade(dataDeNascimento);
        console.log("A idade é: " + idade);
        alert(`Você tem ${idade} anos`)
    }
    