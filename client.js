const axios = require("axios");

async function get_token(){
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }

    return axios
        .post("https://tecweb-js.insper-comp.com.br/token", { username: "vitorpv2" }, config)
        .then((response) => response.data.accessToken);
}


async function get_exercises(token){
    const config2 = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    return axios
        .get("https://tecweb-js.insper-comp.com.br/exercicio", config2)
        .then((response) => response.data)
}




async function main(){
    let token = await get_token();
    let exercises = await get_exercises(token);
    console.log(exercises["caca-ao-tesouro"]);
    const config2 = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    
    //Exercício Soma
    let a = exercises.soma.entrada.a;
    let b = exercises.soma.entrada.b; 
    let result = soma(a, b);
    console.log(result);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/soma", {'resposta': result}, config2)
    .then((response) => console.log(response.data));

    //Exercício Tamanho String
    let palavra = exercises['tamanho-string'].entrada.string;
    let qntd_caracter = tamanhoString(palavra);
    console.log(qntd_caracter);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/tamanho-string", {'resposta': qntd_caracter}, config2)
    .then((response) => console.log(response.data));

    //Exercício Nome do Usuário
    let pessoa = exercises['nome-do-usuario'].entrada.email;
    let nome = nomeUsuario(pessoa);
    console.log(nome);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/nome-do-usuario", {'resposta': nome}, config2)
    .then((response) => console.log(response.data));

    // Exercício Jaca Wars
    let velo = exercises['jaca-wars'].entrada.v;
    let theta = exercises['jaca-wars'].entrada.theta;
    let resultado = jacaWars(velo, theta);
    console.log(resultado);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/jaca-wars", {'resposta': resultado}, config2)
    .then((response) => console.log(response.data));
    

    //Exercício Ano Bissexto
    let year = exercises['ano-bissexto'].entrada.ano;
    let bissexto = anoBissexto(year);
    console.log(bissexto);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/ano-bissexto", {'resposta': bissexto}, config2)
    .then((response) => console.log(response.data));

    //Exercício Volume da Pizza
    let raio = exercises['volume-da-pizza'].entrada.z;
    let altura = exercises['volume-da-pizza'].entrada.a;
    let volume = volumePizza(raio, altura);
    console.log(volume);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/volume-da-pizza", {'resposta': volume}, config2)
    .then((response) => console.log(response.data));

    //Exercício MRU
    let s0 = exercises.mru.entrada.s0;
    let v = exercises.mru.entrada.v;
    let t = exercises.mru.entrada.t;
    let s = mru(s0, v, t);
    console.log(s);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/mru", {'resposta': s}, config2)
    .then((response) => console.log(response.data));

    //Exercício Inverte String
    let string_normal = exercises['inverte-string'].entrada.string;
    let string_invertida = inverteString(string_normal);
    console.log(string_invertida);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/inverte-string", {'resposta': string_invertida}, config2)
    .then((response) => console.log(response.data));

    //Exercício Soma Valores
    let objeto1 = exercises['soma-valores'].entrada.objeto;
    let contagem = somaValores(objeto1);
    console.log(contagem);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/soma-valores", {'resposta': contagem,}, config2)
    .then((response) => console.log(response.data));

    //Exercício N-ésimo Primo
    let n = exercises['n-esimo-primo'].entrada.n;
    let primo = nEsimoPrimo(n);
    console.log(primo);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/n-esimo-primo", {'resposta': primo}, config2)
    .then((response) => console.log(response.data));

    //Exercício Maior Prefixo Comum
    let lista_strings = exercises['maior-prefixo-comum'].entrada.strings;
    let maiorPrefixo = await maiorPrefixoComum(lista_strings);
    console.log(maiorPrefixo);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/maior-prefixo-comum", {'resposta': maiorPrefixo}, config2)
    .then((response) => console.log(response.data));


    //Exercício Soma Segundo Maior e Menor Números
    let lista = exercises['soma-segundo-maior-e-menor-numeros'].entrada.numeros;
    let somaSec = somaSegundoMaiorEMenorNumeros(lista);
    console.log(somaSec);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/soma-segundo-maior-e-menor-numeros", {'resposta': somaSec}, config2)
    .then((response) => console.log(response.data));

    //Exercício Conta Palíndromos
    let lista_palavras = exercises['conta-palindromos'].entrada.palavras;
    let contagem_palindromos = contaPalindromos(lista_palavras);
    console.log(contagem_palindromos);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/conta-palindromos", {'resposta': contagem_palindromos}, config2)
    .then((response) => console.log(response.data));

    //Exercício Soma de Strings de Ints
    let listaints = exercises['soma-de-strings-de-ints'].entrada.strings;
    let somaInts = somaDeStringsDeInts(listaints);
    console.log(somaInts);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/soma-de-strings-de-ints", {'resposta': somaInts}, config2)
    .then((response) => console.log(response.data));

    //Exercício Soma com Requisições
    let lista_endpoints = exercises['soma-com-requisicoes'].entrada.endpoints;
    let somaReq = await somaComRequisicoes(lista_endpoints, token);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/soma-com-requisicoes", {'resposta': somaReq}, config2)
    .then((response) => console.log(response.data));

    // Exercício Caça ao Tesouro
    let url = exercises['caca-ao-tesouro'].entrada.inicio;
    let tesouro = await cacaAoTesouro(url, token);
    console.log("Tesouro:", tesouro);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/caca-ao-tesouro", {'resposta': tesouro}, config2)
    .then((response) => console.log(response.data));


}

main();

const soma = function(a, b){
    return a + b;
}

const tamanhoString = function(string){
    return string.length;
}

const nomeUsuario = function(email){
    let nome = email.split('@')[0];
    return nome;
}

const jacaWars = function(v, theta){
    let g = 9.8;
        theta = theta * Math.PI / 180;
    let d = (v**2) * Math.sin(2*theta) / g;
    if (d>=98 && d <= 102){
        return 0;
    }
    else if (d > 102){
        return 1;
    }
    else {
        return -1;
    }
}

const anoBissexto = function(ano){
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

const volumePizza = function(raio, altura){
    volume = Math.PI * (raio**2) * altura;
    return Math.round(volume); 
}

const mru = function(s0, v, t){
    s = s0 + v*t
    return s;
}

const inverteString = function(string){
    return string.split('').reverse().join('');
}

const somaValores = function(objeto){
    let somaTotal = 0;
    for (let chave in objeto) {
        somaTotal += objeto[chave];
        }
    return somaTotal;
}

const isPrime = function(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const nEsimoPrimo = function(n) {
    if (n === 1) return 2;
    
    let count = 1;
    let num = 3;
    
    while (count < n) {
        if (isPrime(num)) {
            count++;
            if (count === n) {
                return num;
            }
        }
        num += 2;
    }
    
    return null;
}



const maiorPrefixoComum = async function(strings){
    let maior = "";
    for (let i = 0; i < strings.length - 1; i++){
        for (let j = i + 1; j < strings.length; j++){
            let prefixo = "";
            let k = 0;
            while (k < strings[i].length && k < strings[j].length && strings[i][k] === strings[j][k]){
                prefixo += strings[i][k];
                k++;
            }
            if (prefixo.length > maior.length){
                maior = prefixo;
            }
        }
    }
    return maior;
}

const somaSegundoMaiorEMenorNumeros = function(lista){
    lista.sort(function(a, b){return a - b});
    return lista[1] + lista[lista.length - 2];
}

const contaPalindromos = function(lista_palavras){
    let contagem = 0;
    for (let palavra of lista_palavras){
        if (palavra === inverteString(palavra)){
            contagem += 1;
        }
    }
    return contagem;
}

const somaDeStringsDeInts = function(lista){
    return lista.map(Number).reduce((a, b) => a + b);
}

const somaComRequisicoes = async function(lista_endpoints, token){
    const config2 = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    let soma = 0;
    for (let endpoint of lista_endpoints){
        let requisicao = await axios
        .get(endpoint, config2)
        .then ((response) => {
            return response.data;
        });
        soma += requisicao;
    }
    console.log(soma);
    return soma;
}

const cacaAoTesouro = async function (url, token){
    const config2 = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    requisicao = await axios
    .get(url, config2)
    .then((response) => {
        return response.data;
    })
    while (typeof requisicao !== 'number'){
        requisicao = await axios
        .get(requisicao, config2)
        .then((response) => {
            return response.data;
        })
    }
    return requisicao;
}