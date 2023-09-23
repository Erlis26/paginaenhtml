var basilio = ["naranja", "limon", "manzana", "mango", "aguacate", "guabya", "papaya", "melocoton", "brocoli"]

//metodos mutables

// agrega un elemento alfinal
basilio.push("banana");

//agrega un elemento al principio
basilio.unshift("casamangola");

//agrega un elemento en una posicion cocreta
//y puede eliminnar un elemento en un array
basilio.splice(3, 0, "lontron");

//una recorida de los objetos de un areglo
for (i = 0; i < basilio.length; i++) {
    console.log(basilio[i]);


}