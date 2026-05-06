function  comprobar (){
    let plato = document.getElementById("plato").value;
    let vegano = document.getElementById("vegano").checked;
    let gluten = document.getElementById("gluten").checked;
    let lactosa = document.getElementById("lactosa").checked;


    let puedeComer = true;

    if(plato === "carne" && vegano){
        puedeComer = false;
    }
    if(plato === "pasta" && gluten){
        puedeComer = false;
    }
    if(plato === "risotto" && lactosa){
        puedeComer = false;
    }
    
    let resultado = document.getElementById("resultado");
    if(puedeComer){
        resultado.textContent = "Perfecto, pedido correcto";
        resultado.className = "mt-4 text-center font-semibold text-green-600";
    }
    else {
        resultado.textContent = "Usted no puede comer este plato.";
        resultado.className = "mt-4 text-center font-semibold text-red-600";
    }
}