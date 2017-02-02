

var app = function(){
  var tag = document.getElementById('firstP');
  tag.innerHTML = "Please Enter a Gym Exercise To Use";

  var selectBox1 = document.getElementById('set-select');
  selectBox1.onchange = handleSelectSetChange;

  var selectBox2 = document.getElementById('rep-select');
  selectBox2.onchange = handleSelectRepChange;

  var button = document.getElementById('save-button');
  button.onclick = handleSaveButtonClick;
  var saved = localStorage.getItem('exercise');

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
  var saveClick = document.getElementById('save-result');
  saveClick.innerText = "button clicked to save";
  localStorage.setItem('exercise', saveClick.value);
  saveClick.value = "";
};





window.onload = app;


