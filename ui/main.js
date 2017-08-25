//Submit username and pswd to login
var submit= document.getElementById('submit-btn');
submit.onclick=function(){
    var request= new XMLHttpRequest();
    request.onreadystatechange= function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
            alert('logged in successfully');
        } else if (request.status===403){
            alert('Username/Password is incorrect');
        }
        else if(request.status===500){
            alert('Something went wrong on server');
        }
    }
};





var username=document.getElementById('username').value;
var password=document.getElementById('password').value;
console.log(username);
console.log(password);
  request.open('POST','http://soumyacool2012.imad.hasura-app.io/login',true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify({username: username, password: password}));
};