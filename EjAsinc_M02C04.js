function imprimirIntervalo() {
    var inputValorIntervalo = document.getElementById("intervaloFB").value;
    document.getElementById("valorImpresoIntervalo").innerHTML =
      inputValorIntervalo;
    return inputValorIntervalo;
  }
  
  function imprimirIntervaloTope() {
    var inputValorIntervalo = document.getElementById("topeIntervaloFB").value;
    document.getElementById("valorImpresoIntervaloTope").innerHTML =
      inputValorIntervalo;
    return inputValorIntervalo;
  }
  
  function primerMODimprimir() {
    var firstMod = document.getElementById("primerModaResiduo").value;
    document.getElementById("primerModaResiduoImprimir").innerHTML = firstMod;
    return firstMod;
  }
  
  function segundoMODimprimir() {
    var secundMod = document.getElementById("segundoModaResiduo").value;
    document.getElementById("segundoModaResiduoImprimir").innerHTML = secundMod;
    return secundMod;
  }
  
  var btnEjecutar = document.getElementById("btnEjecutar");
  var intervDeCuantoEnCuanto = imprimirIntervalo();
  var finalHastaDondeRecorer = imprimirIntervaloTope();
  var primerModDivisor = primerMODimprimir();
  var segundoModDivisor = segundoMODimprimir();
  
  // JavaScript Básico - Ejercicio asincrónico 04
  
  function contarDeA_n(intervDeCuantoEnCuanto, finalHastaDondeRecorer) {
    var i = 1;
  
    while (i <= finalHastaDondeRecorer) {
      if (i % intervDeCuantoEnCuanto == 0) {
        console.log(i);
      }
  
      i = i + 1;
    }
  }
  
  var contarDeA_nGeneral = contarDeA_n(
    intervDeCuantoEnCuanto,
    finalHastaDondeRecorer
  );
  
  console.log(contarDeA_nGeneral);
  
  // JavaScript Básico - Ejercicio asincrónico 04
  
  function fizzBuzz2(intervDeCuantoEnCuanto, finalHastaDondeRecorer) {
      console.log(intervDeCuantoEnCuanto, finalHastaDondeRecorer);
    var i = 1;
    var number = document.getElementById("numbers");
    var htmlNumbers = "";
  
    while (i <= finalHastaDondeRecorer) {

      if (i % intervDeCuantoEnCuanto == 0) {
        if (i % primerModDivisor == 0) {
          console.log("MiDolor1 porque es el numero " + i);
          htmlNumbers += i + ",";
        }
        if (i % segundoModDivisor == 0) {
          console.log("MiDolor2 porque es el numero " + i);
          htmlNumbers += i + ",";
        }
        if (i % primerModDivisor == 0 && i % segundoModDivisor == 0) {
          console.log("MiDolor1MiDolor2 porque es el numero " + i);
          htmlNumbers += i + ",";
        }
      }
  
      i = i + 1;
    }
    number.innerHTML = htmlNumbers;
    console.log(htmlNumbers);
  }
  
  var fizzBuzz2General = fizzBuzz2(
    intervDeCuantoEnCuanto,
    finalHastaDondeRecorer
  );
  
  btnEjecutar.addEventListener("click", function () {
      var intervaloFB = document.getElementById("intervaloFB").value;
      var topeIntervaloFB = document.getElementById("topeIntervaloFB").value;
      console.log(intervaloFB);
      console.log(topeIntervaloFB);
      
    fizzBuzz2(intervaloFB, topeIntervaloFB);
  });
  
  console.log(fizzBuzz2General);