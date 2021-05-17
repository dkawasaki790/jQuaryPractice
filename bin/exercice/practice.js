console.log("川崎");
document.write("<p>お元気ですか？</p>");
var lastName = "川崎";
var firstName = "大佑";

console.log(lastName);
console.log(firstName);

var age = 30;
if(age>=0 && age<=4){
  console.log("【幼年期】");
}
else if(age>=5 && age<=14){
  console.log("【少年期】");
}
else if(age>=15 && age<=24){
  console.log("【⻘年期】");
}
else if(age>=25 && age<=44){
  console.log("【壮年期】");
}
else if(age>=45 && age<=64){
  console.log("【中年期】");
}
else if(age>=65){
  console.log("【高年期】");
}
let result = 0;
for (let i = 1; i <= 10; i++) {
  result = result + i;
}
console.log(result);

var total;
var array = [1,2,3,4,5,6,7,8,9,10]
for (var num of array) {
  total += num;
}

for (var num of array) {
  if(num%2==1){
    console.log(num)
  }
}

var country_info = {
  "日本": "東京",
  "スリランカ": "スリジャヤワルダナプラコッテ",
  "タイ": 　"クルンテープ・マハーナコーン・アモーンラッタナコーシン・マヒンタラアユッタヤー・マハーディロッカポップ・ノッパラッターナラーチャタニーブリーロム・ウドンラーチャニウェットマハーサターン・アモーンラピーンアワターンサティット・サッカタットティヤウィサヌカムプラシット",
}
  //要素へのアクセス
  var japan = country_info["日本"]; // "東京"を取得
  console.log(japan);

  country_info["タイ"] = "バンコク";
  var thai = country_info["タイ"];
  console.log(thai)

  function printName(){
    "use strict";
    console.log("川崎大佑");
  }
  printName();

  function add(num1,num2){
    return num1 + num2;
  }
  function sub(num1,num2){
    return num1 - num2;
  }
  function multi(num1,num2){
    return num1 * num2;
  }
  function div(num1,num2){
    return num1 / num2;
  }
  console.log(add(5,3));
  console.log(sub(5,3));
  console.log(multi(5,3));
  console.log(div(5,3));

  //匿名functionをprintNameVariableに代入
  let printNameVariable = function (){
    console.log("dすけ");
    printNameVariable();
  }

  const addVariable = function(num1,num2){
    return num1 + num2;
  }
  const subVariable = function(num1,num2){
    return num1 - num2;
  }
  const multiVariable = function(num1,num2){
    return num1 * num2;
  }
  const divVariable = function(num1,num2){
    return num1 / num2;
  }
  addVariable(5,3);
  subVariable(5,3);
  multiVariable(5,3);
  divVariable(5,3);

  //演習14JavaScript
  var items = [
    { name: 'じゃがいも', price: 50, count: 3 },
    { name: 'にんじん', price: 60, count: 1 },
    { name: '豚肉', price: 200, count: 1 },
    { name: '玉ねぎ', price: 50, count: 2 }
  ];
  // targetPriceより小計の高額な商品を出力
  function higherPrice (targetPrice) {
    // ここにソースコードを追記しましょう
    //配列の要素数繰り返す
    for (let i = 0; i < items.length; i++) {
      //itemsの個数×値段がtargetPriceより高い場合その商品名を出力。
      if(items[i].price * items[i].count > targetPrice){
        console.log(items[i].name);
      }
    }
  }
  higherPrice(120);


  var globalVal = 10; // ←グローバルスコープの変数
  function func1() {
    var localVal = 20; // ←ローカルスコープ(関数スコープ)の変数
    console.log("globalVal:" + globalVal); // 10
    console.log("localVal:" + localVal); // 20
  }
  func1();
  console.log("globalVal:" + globalVal); // 10 console.log("localVal:" + localVal); // エラー

  let answer = 0;
for (let i = 1; i <= 9; i++){
  for (let j = 1; j <= 9; j++){
    answer = answer + i*j
    if(answer<10){
      process.stdout.write(" "+answer);
    }else{
      process.stdout.write(answer);
    }
    console.log("");
  }
}
