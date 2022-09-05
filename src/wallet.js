function getHistorial(monto, titulo, categoria, detalles){
    let trans = []
    let dict = {amount: monto, title: titulo, category: categoria, details: detalles};
    trans.push(dict);
    return trans;
}

function sumBalance(monto, total)
{
    total += monto;
    return total;
}

export  {getHistorial,sumBalance};