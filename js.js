function contar(){
    var msg = document.getElementById('contador')
    var ini = Number(document.getElementById('ini').value)
    var fim = Number(document.getElementById('fim').value)
    var pass = Number(document.getElementById('pas').value)
    var cont = 0
    msg.innerText = ''

    if(pass <= 0){
        window.alert('[Erro!] passo menor ou igual a 0 mudado pra 1')
        pass = 1
    }

    if(ini > fim){
        window.alert('[Erro!] digite um número inícial maior que o final')
    }else {
        for(cont = ini;cont <= fim;cont+=pass){
            if(cont == fim){
                msg.innerText = msg.innerText + ' ' + cont
            } else{
                msg.innerText = msg.innerText + ' ' +cont + ' -> '
            }
        }

    }
    

}




