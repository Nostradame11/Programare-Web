////Sarc1
//document.body.style.background = 'red';
////Sarc2
//setTimeout(() => document.body.style.background = 'green', 3000);
////Sarc3
//function changeBodyBg(){
//    document.body.style.background = 'orange';
//}
//Sarc4
var div = document.getElementById('list');
var ol = document.createElement('ol');

div.appendChild(ol);

var data = ["Первая строка", "Вторая строка", "n строка"];

for (var i = 0, ln = data.length; i < ln; i++) {
  var li = document.createElement('li');
  li.innerHTML = data[i];
  ol.appendChild(li);
}