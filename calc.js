console.log("Seja bem vindo!!!") 

Function somar(numeros){
    let resultado = 0
    for (let x = 0; x < numeros.length; x++) {
            resultado += numeros[x] 
    }
    return resultado;
}

Function subtrair(numeros){
    let resultado = numeros[0]
    for (let x = 1; x < numeros.length; x++) {
            resultado -= numeros[x] 
    }
    return resultado;
}

Function multiplicar(numeros){
    let resultado = 0
    for (let x = 0; x < numeros.length; x++) {
            resultado *= numeros[x] 
    }
    return resultado;
}

Function dividir(numeros){
    let resultado = numeros[0]
    for (let x = 1; x < numeros.length; x++) {
            resultado /= numeros[x] 
    }
    return resultado;
}

let opcao;

do{
    
    console.log("MENU INTERATIVO")
    console.log("1 - Soma")
    console.log ("2 - Subtração ")
    console.log ("3 - Multiplicação ")
    console.log ("4 - Divisao")
    console.log("5 - Sair")
    
    opcao = Number(prompt("Escolha um recurso: "))
    
    let lista;
    let numeros;
    let resultado;
    
switch(opcao){
    case 1: {
        let lista = prompt("Digite dois ou mais números para somar: ")
        numeros = lista.split(" ").map(Number);
        resultado = somar(numeros);
        console.log(`O resultado da soma dos números escolhidos é: ${resultado }`);
        break;
    }
    
    case 2: {
        let lista = prompt("Digite dois ou mais números para subtrair: ")
        numeros = lista.split(" ").map(Number);
        resultado = subtrair(numeros);
        console.log(`O resultado da subtração dos números escolhidos é: ${resultado }`);
        break;
    }
    
    case 3: {
        let lista = prompt("Digite dois ou mais números para multiplicar: ")
        numeros = lista.split(" ").map(Number);
        resultado = multiplicar(numeros);
        console.log(`O resultado da multiplicação dos números escolhidos é: ${resultado }`);
        break;
    }

    case 4: {
        let lista = prompt("Digite dois ou mais números para dividir: ")
        numeros = lista.split(" ").map(Number);
        resultado = dividir(numeros;)
        console.log(`O resultado da divisão números escolhidos é: ${resultado }`);
        break;
    }
         
    case 5:
        console.log ("Obrigado por usar nossa calculadora!")
        break;

    default:
        console.log("Operação inválida")
}
} while (opcao !== 5);