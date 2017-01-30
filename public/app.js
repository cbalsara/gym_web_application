
var app = function(){
  var tag = document.getElementById('firstP');
  tag.innerHTML = "Please Enter a Gym Exercise To Use";

  var selectBox1 = document.getElementById('first-Select');
  selectBox1.onchange = handleSelectSetChange;

  var selectBox2 = document.getElementById('second-Select');
  selectBox2.onchange = handleSelectRepChange;

  var button = document.getElementById('save-Button');
  button.onclick = handleSaveButtonClick;
  var saved = localStorage.getItem('selection');
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
  saveClick.innerText = 'Save Button Clicked!';

  localStorage.setItem('selection', saveClick.value)
  saveClick.value = "";
}



// When, I click the save button, I want all the information to be saved into local Storage.

// so far it is saving a blank object





window.onload = app;


