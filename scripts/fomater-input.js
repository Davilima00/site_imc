document.getElementById('altura').addEventListener('input', function(e) {
    this.value = formatAltura(this.value);
});

document.getElementById('peso').addEventListener('input', function(e) {
    this.value = formatPeso(this.value);
});

function formatAltura(value) {
    value = value.replace(/\D/g, ''); 
    if (value.length > 3) {
        value = value.slice(0, 3);
    }
    if (value.length > 1) {
        value = value.slice(0, 1) + '.' + value.slice(1);
    }
    return value;
}

function formatPeso(value) {
    value = value.replace(/\D/g, '');
    if (value.length > 3) {
        value = value.slice(0, 3);
    }
    if (value.length > 2) {
        value = value.slice(0, value.length - 1) + '.' + value.slice(value.length - 1);
    }
    return value;
}


let limparBotao = document.getElementById('limpar');
limparBotao.addEventListener('click', function() {
    document.getElementById('altura').value = "";
    document.getElementById('peso').value = "";
});
