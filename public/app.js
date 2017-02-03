

var app = function(){
  var tag = document.getElementById('firstP');
  tag.innerHTML = "Please Enter a Gym Exercise To Use";

  // var selectBox1 = document.getElementById('set-select');
  // selectBox1.onchange = handleSelectSetChange;

  // var selectBox2 = document.getElementById('rep-select');
  // selectBox2.onchange = handleSelectRepChange;

  var button = document.getElementById('add-workout');  
  button.onclick = createWorkout;
};

// -----------------------------------------------------------------

var createWorkout = function(name, weight, set, rep){
  var addName = handleInputExerciseName(name);
  var addWeight = handleInputExerciseWeight(weight);
  var setList = handleSelectSetChange(set);
  var repList = handleSelectRepChange(rep);
}

var handleInputExerciseName = function(name){
  var selected = document.createElement('ul');
  selected.innerText = 'Name' + name;
  var a = document.getElementById('added-result');
  a.appendChild(selected); 
}

var handleInputExerciseWeight = function(weight){
  var selected2 = document.createElement('ul');
  selected2.innerText = weight + ' :kg';
  var a = document.getElementById('added-result');
  a.appendChild(selected2);
}

var handleSelectSetChange = function(set){
  var option1 = document.createElement('ul');
  option1.innerText = set + ' Sets';
  var a = document.getElementById('added-result');
  a.appendChild(option1);
}

var handleSelectRepChange = function(rep){
  var option2 = document.createElement('ul');
  option2.innerText = rep + ' Reps';
  var a = document.getElementById('added-result');
  a.appendChild(option2); 
}

window.onload = app;


