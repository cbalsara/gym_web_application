
var app = function(){
  var tag = document.getElementById('firstP');
  tag.innerHTML = "The gym table with workout options will go in here";

  var selectBox1 = document.getElementById('firstSelect');
  selectBox1.onchange = handleSelectSetChange;

  
};

var handleSelectSetChange = function(){
  var newOption = document.getElementById('set-result');
  newOption.innerText = this.value;
}



window.onload = app;


