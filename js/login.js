function log() {
  var error = new Array();
  if(document.getElementById('login').value == ""){
    error[error.length] ='логин';
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
    //var div = document.createElement('div');
    //div.className = "feedback green";
    //div.innerHTML = "Вы авторизированны";
    //document.body.appendChild(div);
    var login = document.getElementById('login').value,
        password = document.getElementById('password').value;
        data = JSON.stringify({
          login:login,
          password:password
    })
    fetch('https://agile-wave-66058.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: data
    }).then(function(response){
      return response.json().then(function(data){
          document.getElementById('log').innerHTML = data.login;
      })
    });
  }
}
