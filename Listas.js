let array = ["cafe", "harina", "leche", "cereal", "arroz"]

array.push ("Aceite de Girasol");

console.log(array)

array.splice(5);

console.log(array)

const listaPeliculas = [
{ titulo : "The amazin spiderman", director: "Marc webb", fecha: "2012-07-05"},

{titulo : "saw", director: "James wan", fecha: "2005-03-24"},

{ titulo : "Avenger: Endgame", director: "Anthony russo y Joe russo", fecha:  "2019-04-26"}
]

const peliculasrecientes = listaPeliculas.filter(obj => obj.fecha > "2010")
console.log(peliculasrecientes)

const nombre = listaPeliculas.map(valor =>{
    return valor.director
})
console.log(nombre)

const portada = listaPeliculas.map(valor =>{
    return valor.titulo
})
console.log(portada)

const listadirectores1 = ["Marc webb", "James wan", "Anthony russo y Joe russo"]

const listatitulos2 = ["The amazing spiderman", "saw", "Avenger Endgame"]

console.log(listadirectores1.concat(listatitulos2))

const lista3 = listadirectores1.concat(listatitulos2)
console.log(lista3)

const lista4 = [...listadirectores1,...listatitulos2] 
console.log(lista4)