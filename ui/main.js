//Counter code

var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
  //MAke a req to the counter end point
  
  //capture respons e and store it in a variable
  
  //Render the variable in the correct span
  counter=counter+1;
  var span=document.getElementbyId('count');
  span.innerHTML=counter.toString();
};