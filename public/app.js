
var app = function(){
  var tag = document.getElementById('firstP');
  tag.innerHTML = "Please Enter a Gym Exercise To Use";

  var selectBox1 = document.getElementById('first-Select');
  selectBox1.onchange = handleSelectSetChange;

  var selectBox2 = document.getElementById('second-Select');
  selectBox2.onchange = handleSelectRepChange;

  var button = document.getElementById('save-Button');
  button.onclick = handleSaveButtonClick;
};

// -----------------------------------------------------------------

var handleSelectSetChange = function(){
  var newOption = document.getElementById('set-result');
  newOption.innerText = this.value + ' Sets';
}

var handleSelectRepChange = function(){
  var newOption = document.getElementById('rep-result');
  newOption.innerText = this.value + ' Reps';
}

var handleSaveButtonClick = function(){
  var saveClick = document.getElementById('save-Text-Result')
  saveClick.innerText = 'Exercise has been saved!';
}



window.onload = app;


