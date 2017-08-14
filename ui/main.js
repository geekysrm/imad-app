console.log('Loaded!');
//Change the txt of main-text 

var element= document.getElementById('main-text');
element.innerHTML='new value';

//moving image

var img=document.getElementById('srm');
img.onclick=function(){
  img.style.marginleft='100px';  
};