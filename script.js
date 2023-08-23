    
    var numero1 = prompt("digita um numero de 1 a 5");
    while (numero1 > 5){
        alert('nada disso, tem que ser de 1 a 5');
        numero1 = prompt("digite um numero de 1 a 5");
    }

    var numero2 = prompt("digita um numero de 1 a 5");
    while (numero2 > 5){
        alert('nada disso, tem que ser de 1 a 5');
        numero2 = prompt("digite um numero de 1 a 5");
    }
    var diferenca = numero1 - numero2;

    if (diferenca != 0){
        alert("A diferença foi de " + diferenca + " no valor do seu número... só isso kkkkkk" );
    } else {
        alert("zerado amigo... o valor é igual a 0")
    }

