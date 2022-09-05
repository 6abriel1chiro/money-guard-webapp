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

function subBalance(monto, total)
{
    total -= monto;
    return total;
}

function checkRadioButton(value, monto, total)
{
    if (value == "ingreso")
    {
        total = sumBalance(monto, total)
    }
    else
    {
        total = subBalance(monto, total)
    }
    return total;
}

export  {getHistorial,sumBalance, checkRadioButton, subBalance};