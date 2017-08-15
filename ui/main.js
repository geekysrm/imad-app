//Counter code

var button=document.getElementById('counter');

button.onclick=function(){
  //Create req obj
  var request=new XMLHttpRequest();
  
  //capture respons e and store it in a variable
  reuest.onreadystatechange=function(){
    if(request.readyState===XMLHttpRequest.DONE)  {
        //Take some action
        if(req.status===200){
           var counter= request.responseText;
           var span=document.getElementById('count');
             span.innerHTML=counter.toString();
        }
    }
  };
  //Render the variable in the correct span
  //make req
  request.open('GET','http://soumyacool2012.imad.hasura-app.io/counter',true);
  request.send(null);
};