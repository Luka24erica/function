function positivos(entrada1, entrada2, saida) {
    document.getElementById(saida).innerHTML = 
        "O resultado é " + ler_entrada(entrada1, entrada2);
}

function ler_entrada(entrada1,entrada2) {
    var x = Number(document.getElementById(entrada1).value);
    var y = Number(document.getElementById(entrada2).value);

    return maior(x, y);
}

function escrever_saida(entrada1,entrada2,saida) {
    var m = ler_entrada(entrada1,entrada2);
    document.getElementById(saida).innerHTML = m;
}

function maior(x, y) {
    return (x > 0 && y > 0);
}