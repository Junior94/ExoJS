'use strict';

/* Exercice 1

var age = prompt("Quel âge avez-vous ?");

if(age < 18) {
    alert("Désolé vous ne pouvez pas entrer")
}else if ((age => 18) && (age <= 41)) { 
    alert("Très bien vous pouvez entrer")
}else {
    alert("Vous êtes maintenant le patron !")
}

*/

/* Exercice 2
 
var rand = Math.floor(Math.random() * (30)) + 1;

if ((rand >= 0) && (rand <= 10)) {
    alert(rand + " : Cool !")
} else if ((rand =>11) && (rand <=20)) {
    alert(rand + " : Tepid !")
} else {
    alert(rand + " : Warm !")
}

*/

/* Exercice 3

var date = new Date();
var getDay = date.getDay();
switch(getDay){
  case 1 :
    console.log("Il est Lundi...");
    break;
  case 2 :
    console.log("Il est mardi");
    break;
  case 3 :
    console.log("Il est mercredi");
    break;
  case 4 :
    console.log("Il est jeudi");
  case 5 :
    console.log("Il est vendredi");
  case 6 :
    console.log("Il est samedi");
    break;
  case 0 :
    console.log("Enfin dimanche !");  
    break;
  default:
      console.log("Je sais pas  ");
} 

*/

/* Exercice 4