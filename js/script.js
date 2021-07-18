function hideIcon(self) {
  self.style.backgroundImage = 'none';
}
function showIcon(self) {
  if(self.value=="")
    self.removeAttribute("style");
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;

  let mensagem = document.getElementById('mensagem');

  if((nome === '' || nome.match(/^ *$/) !== null) && email == ''){
    mensagem.innerHTML = `<p>Por favor preencha os campos <b>Nome</b> e <b>Email</b>.</p>`;
    return false;
  }
  else if(nome === '' || nome.match(/^ *$/) !== null){
    mensagem.innerHTML = `<p>Por favor preencha o campo <b>Nome</b>.</p>`;
    return false;
  }
  else if(email === ''){
    mensagem.innerHTML = `<p>Por favor preencha o campo <b>Email</b>.</p>`;
    return false;
  }
  else if (!validateEmail(email)) {
    mensagem.innerHTML = `<p>"<b>${email}</b>" não é um email válido.</p>`;
    return false;
  }
  


  let data = {
    nome,
    email,
  }
  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData)

  let content = document.getElementById('content')

  let carregando = `<p>carregando...</p>`

  let pronto = `<p>pronto</p>`

  content.innerHTML = carregando


  setTimeout(() => {
    content.innerHTML = pronto
  }, 1000)

});


var countDownDate = new Date("Nov 26, 2021 00:00:01").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
      
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "A Black Friday da NerdStore já começou!";
  }
}, 1000);
