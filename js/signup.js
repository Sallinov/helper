function reg() {
  var error = new Array();
  if(document.getElementById('login').value == ""){
    error[error.length] ='логин';
  }
  if(document.getElementById('email').value == ""){
    error[error.length] =' почта';
  }
  if(document.getElementById('password').value == ""){
    error[error.length] =' пароль';
  }
  if(error.length>0){
    var div = document.createElement('div');
    div.className = "feedback red";
    div.innerHTML = "Заполните поле : "+error;
    document.body.appendChild(div);
  }else{
    var div = document.createElement('div');
    div.className = "feedback green";
    div.innerHTML = "Вы зарегистрированы";
    document.body.appendChild(div);
    var login = document.getElementById('login').value,
        email = document.getElementById('email').value,
        password = document.getElementById('password').value;

    fetch('https://agile-wave-66058.herokuapp.com/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        login:login,
        mail:email,
        password:password
      })
    });
  }
}
