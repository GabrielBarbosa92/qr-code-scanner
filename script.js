
    const qrInput = document.getElementById('qr__input');
    const qrButton = document.getElementById('qr__button');
    let qrImage = document.getElementById('qr__image');
    let inputValue = '';

    function gerador() {
        console.log('entrou', inputValue);
        let qrInside = " https://api.qrserver.com/v1/create-qr-code/?size=180x180&data="; // API from: https://goqr.me/api/
        qrImage.setAttribute('src', qrInside + inputValue);
        qrButton.innerHTML = 'gerar qr code';
    };

    qrButton.addEventListener('click', function() {
        if(qrInput.value.length > 0) {
            inputValue = qrInput.value;
            console.log(typeof inputValue, inputValue);
            qrButton.innerHTML = 'gerando qr code...'
            setTimeout(gerador, 1000);
        } else {
            alert('Não foi encontrado um link válido! Por favor verifique o link digitado!')
        };
    });