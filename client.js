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
    console.log(exercises);
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

    //Exercício Jaca Wars

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
    console.log(soma);
    axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/soma-valores", {'resposta': contagem,}, config2)
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

// const jacaWars = function(jaca1, jaca2){ ------------------------------------------------------

// }

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