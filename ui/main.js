console.log('Loaded!');
//Change the txt of main-text 

var element= document.getElementById('main-text');
element.innerHTML='new value';

//moving image

var img=document.getElementById('srm');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,100);
};