let trans = []

function getHistorial(monto, titulo, categoria, detalles){
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

function generateTransactionList(arg)
{
let transactions = "";
for(let arrIndex = 0; arrIndex <arg.length; arrIndex++){
    for (let index = 0; index < Object.keys(arg[arrIndex]).length; index++) {
        console.log(Object.keys(arg)[index])
        transactions += `${Object.values(arg[arrIndex])[index]}`;  
    }
    
}
return transactions;

}

export  {getHistorial,sumBalance, checkRadioButton, subBalance,generateTransactionList};