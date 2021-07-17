const form = document.getElementById('form')

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    let convertData =JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content')

    let carregando =`<p>Carregando...</P>`

    let pronto =`<p>pronto</P>`

    content.innerHTML = carregando

    setTimeout(() =>{
        content.innerHTML = 'E-mail cadastrado com sucesso'
    },500)
})