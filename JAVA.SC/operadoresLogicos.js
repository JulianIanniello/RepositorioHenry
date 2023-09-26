// && AND

function mayorYMenorYPar(num){
if (num > 5 && num < 10 && num % 2 === 0) console.log(true);
else console.log(false);

};

mayorYMenorYPar(8);
mayorYMenorYPar(7);

// ││ OR

function operadorOr(str){
    if(str === "Henry" || str.length<2 ) console.log(true);
    else console.log (false);
    
    };
    
    operadorOr("Java");

// ! NOT

    function negacion(permiso) {
       if(permiso !== true) console.log("Tiene permiso");

    };

    negacion(false);
    
