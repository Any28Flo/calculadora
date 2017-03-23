function enPantalla(valor){

  var numero = document.getElementById("pantalla").value += valor;
}

function operacion(){

  var expMath= document.getElementById("pantalla").value;
  console.log(expMath);

var res = expMath.split("+");
//console.log(res);
  //console.log(resultado);
  //console.log(expMath);
  for(var i = 0 ; i<expMath.length ; i++){
    if(expMath[i]==="+"){
      var add = expMath.split("+");
      var resultado = parseInt(add[0])+ parseInt(add[1]);
      console.log(resultado);
      document.getElementById("resultado").innerHTML= resultado;
      console.log(res);
    }else if (expMath[i]==="-" ){
      var resta = expMath.split("-");
      var resultado = parseInt(resta[0])- parseInt(resta[1]);
      console.log(resultado)
    }else if (expMath[i]==="*" ){
      var mul = expMath.split("*");
      var resultado = parseInt(resta[0])* parseInt(resta[1]);

      console.log(resultado);

    }else if (expMath[i]==="/" ){
      var mul = expMath.split("/");
      var resultado = parseInt(resta[0]) / parseInt(resta[1]);

      console.log(resultado)
  //  cifra.push()
}
}
}
