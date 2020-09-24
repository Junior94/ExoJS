"use strict";


    var demand = prompt ("Saississez quelque chose !")
    function myPutStr(value){
        if(typeof value === "string"){
        return ("ok")
    } else if (typeof value === "number"){
        return ("et pourquoi pas 42 ?")
    }

     myPutStr(18)
       
    }