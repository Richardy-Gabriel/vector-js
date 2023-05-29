function example() {
    let preco = [];
    let soma = 0;

    for (let i = 0; i < 10; i++){
        preco[i] = Number(prompt(`Preço ${i + 1}`))
    }

    for (i = 0; i < 10; i++){
        soma += preco[i]
    }
    alert(`Média: ${soma / 10}`)
}

function exe1() {
    let vet = [];
    let soma = 0;

    for (let i = 0; i < 10; i++){
        vet[i] = Number(prompt(`Informe o ${i + 1}° número: `))
    }
    
    for (i = 0; i < 10; i++){
        if (vet[i] % 2 == 0){
            soma += vet[i]
        }
    }
    alert(`A soma dos elementos pares é: ${soma}`)
}

function exe2() {
    let vet = [];
    let soma = 0;

    for (let i = 0; i < 10; i++){
        vet[i] = Number(prompt(`Informe o ${i + 1}° número: `))
    }

    for (i = 0; i < 10; i++){
        if (i % 2 == 1){
            soma += vet[i]
        }
    }
    alert(`A soma dos elementos ípares é: ${soma}`)
}