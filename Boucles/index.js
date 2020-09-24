'use strict';

/*Exercice 1

var ar = [1, 2, 3, 5, 8];

for(var key in ar){ 
   for(var i = 0; i <= 10; i++) {
     var result = ar[key] * i
     console.log(result);
}

}

*/

// Exercice 2 

// Exercice 2 

 for(var i = 0; i <= 10; i++) {
     var elementul = document.createElement('ul');
     var elementli = document.createElement('li');
     var toMultiple = elementli.innerHTML = 5 + "*" + i + " = " + 5 * i;

     console.log(toMultiple);

    }
    
