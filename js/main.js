function convert(){
    // pegando o valor binario digitado do usuario
    const binario = document.getElementById("binary-input").value;
    // checando se o valor binario é nulo
    if (binario == ''){
        return alert('por favor digite um valor valido');
    }
    binario.split('').map((char) =>{
        if (char != '0' && char != '1'){
            return alert("Por favor digite um valor binario");
        }
    });
    const decimal = parseInt(binario,2);
    document.getElementById('decimal-input').value = decimal;
    return true;
}