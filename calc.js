console.log("Seja bem vindo!!!") 

let n1 = Number(prompt("Escolha um numero: "));
let n2 = Number(prompt("Escolha outro numero: "));
let opcao = Number(prompt("Escolha um recurso: "));


switch(opcao){
    case 1:
        console.log(`O resultado é ${n1+n2}`);
        break;

    case 2:
        console.log(`O resultado é ${n1-n2}`)
        break;

    case 3:
        console.log(`O resultado é ${n1*n2}`)
        break;

    case 4:
         console.log(`O resultado é ${n1/n2}`)
         break;

    default:
        console.log("Operação inválida")
}




