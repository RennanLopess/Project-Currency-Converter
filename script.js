document.getElementById('currency-form').addEventListener('submit', function(event){
    event.preventDefault();
    const valor     = document.getElementById('amount').value;
    const daMoeda   = document.getElementById('daMoeda').value;
    const paraMoeda = document.getElementById('paraMoeda').value;

    // definir taxas de cambio
    const exchangeRates = {
        BRL:{USD:0.17, EUR:0.15},
        USD:{BRL:5.73, EUR:0.88},
        EUR:{USD:1.13, BRL:6.50}
    };

    let valorConvertido;
    if(daMoeda === paraMoeda){
        valorConvertido = parseFloat(valor);
    }else{
        valorConvertido = parseFloat(valor) * exchangeRates[daMoeda][paraMoeda];
    }

    const conversao = document.getElementById('conversao');
    conversao.textContent = `Resultado: ${valorConvertido.toFixed(2)} ${paraMoeda}`;
});
