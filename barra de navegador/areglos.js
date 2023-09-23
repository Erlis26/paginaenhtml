var paises = ["guinea ecuatorial", "españa", "estado unidos ", "camerun", "londres", "belgica"]

//metodos mutables

//elimina elementos la final de un array
paises.pop();

//elimina elementos al comienso de los array
paises.shift();

//llamada de la funcion
matriz(paises);

//una matriz con parametro
function matriz(elemento) {
    for (var i = 0; i < elemento.length; i++) {
        console.log(elemento[i]);

    }


}