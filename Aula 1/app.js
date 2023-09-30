//alert('Boas vindas ao nosso site! '); // mostra alerta no site
let lua; //declaração de varial 
let idade = 25; // variavel recebe o valor 25
let numeroDeVendas = 50; // variavel recebe valor 50
let saldoDisponivel = 1000; // variavel recebe valor 1000
//alert('Erro preencha todos os campos. ') // Alert recebe um novo valor

//let mensagemDeErro = "Erro! Preencha todos os campos.";
//alert(mensagemDeErro);
//variavel recebe um valor e mostra no alert

let nomeUsuario = prompt('Digite o seu primeiro nome:');
let idadeUsuario = prompt ('Digite sua idade atual');

let idadeUsuarioConvertidaInteiro = idadeUsuario.match(/\d+/); // A função match converte string em inteiro e armazena na variável informada

if (idadeUsuarioConvertidaInteiro >= 18){

    alert(nomeUsuario + ' você já tem uma idade maior que 18 anos, então você já pode tirar a sua habilitação');
}

else {
    alert (nomeUsuario + ' você é menor de idade e por isso não pode tirar sua habilitação ');
}

// comando armazena duas variaveis e responde se caso o usuario for maior que 18 anos a função alert;