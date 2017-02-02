

var app = function(){
  var tag = document.getElementById('firstP');
  tag.innerHTML = "Please Enter a Gym Exercise To Use";

  var selectBox1 = document.getElementById('set-select');
  selectBox1.onchange = handleSelectSetChange;

  var selectBox2 = document.getElementById('rep-select');
  selectBox2.onchange = handleSelectRepChange;

  var button = document.getElementById('add-workout');  
  button.onclick = createWorkout;


  // var workout = function(name, weight, set, rep){
  //   var name = createName(name);
  //   var weight = createWeight(weight);
  //   var set = createSet(set);
  //   var rep = createRep(rep);
  // }
 
};

// -----------------------------------------------------------------

// var createName = function(name){
//   var exName = document.getElementById('added-result');
//   exName.innerText = name
//   return exName;
// }; 

var createWorkout = function(set, rep){
  var setList = handleSelectSetChange(set);
  var repList = handleSelectRepChange(rep);
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


// var handleAddWorkoutButtonClick = function(){
//   var saveSetClick = document.getElementById('set-result');
//   var saveRepClick = document.getElementById('rep-result');
//   saveSetClick.innerText = handleSelectSetChange();
//   saveRepClick.innerText = handleSelectRepChange();
// };





window.onload = app;


