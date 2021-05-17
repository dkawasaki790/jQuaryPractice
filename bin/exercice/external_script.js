'use strict';
$(function(){
  alert("HELLO WORLD"); //ポップアップで表示
  console.log("hello world"); //コンソールに表示
});

function change_color(){
  //色の入れ替え
  let targetText = document.getElementById('text'); //対象の要素をidで指定
  if(targetText.style.color == 'blue'){
    targetText.style.color = 'red';
  }
  else{
    targetText.style.color = 'blue';
  }
};
