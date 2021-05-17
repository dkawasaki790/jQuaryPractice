'use strict';

function validation(){
  let nameValue = document.sampleForm.name.value;
  let mailValue = document.sampleForm.mail.value;
  let passwordValue = document.sampleForm.password.value;
  if(nameValue==''){
    alert('名前を入力してください！');
  }
  else if(mailValue==''){
    alert('メールアドレスを入力してください！');
  }
  else if(passwordValue==''){
    alert('パスワードを入力してください！');
  }
  else{
    document.sampleForm.submit();
  }
}
