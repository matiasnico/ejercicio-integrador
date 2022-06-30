/**
 * !=======================================
 * !Estamos llegando a la finalización del curso de Javascript Vanilla
 * !y vamos a realizar un repaso de los temas vistos mediante un ejercicio
 * !integrador conectadonos con Api...
 *
 * !Para eso deberas realizar las siguientes consignas siguiendo las buenas practicas vistas en clase
 * !y utilizando todo el conocimiento aprendido en clases anteriores...
 *
 * * ...
 *
 * !Comencemos.
 * !===========================================
 */

/**
 * *=====================================
 * *            PRIMERA  PARTE
 * *-------------------------------------
 */

/**
 * Vamos a trabajar con PokeApi. La Api de Pokemon.
 * ? 1) Almacenar la base url en una constante.
 */
const BASE_URL = 'https://pokeapi.co/'

/**
 * ? 2) Crear la configuración de un fetch para ejecutar en una consola del navegador.
 */
const opts = {
    method : 'GET',
    Headers :{
    'content-Type': 'application/Jason'  
}
}

/**
 * ? 3) Realizar una busqueda de los primeros 20 pokemones
 */
const getpokemon  = async () =>{
 const pokemon = await fetch('${BASE_URL}/pokemon?Limit= -20', opts)
 return pokemon.json()
}
const poke = await getpokemon()
console.log(poke.result)



/**
 * ? 4) Buscar al pokemon 'Charmander', armar un objeto literal con las siguientes propiedades de este pokemon:
 *      id, name, tipo y almenos 2 movimientos
*       Luego mostrar por consola
 */

const result = pokemon.result.find(p=> p.name == 'Charmander')
console.log(result)
const pokemon = async()=> {
    const pokemon = await fetch(result.url.opts)
    return pokemon.jason ()
}
const charm = await getCharmander()

const charmObj = {
    id: charm.id,
    name: charm.name,
    moves: []
}


console.log(`id: ${charmObj.id}`);
console.log(`name:  ${charmObj.name}`);

/**
 * ? 5) Obtener la cadena de evoluciones de Charmander
 */

 console.log('\n\nEJERCICIO 5: ')

 const getEvolution = async (n) => {
     const evolution = await fetch(EVOL_URL + n, opts)
     return evolution.json()
 }
 
 const charmEvol = await getEvolution(2)
 console.log(charmEvol)
 console.log(`Evolución de Charmander: ${charmEvol.chain.evolves_to[0].species.name} y ${charmEvol.chain.evolves_to[0].evolves_to[0].species.name}`)
 

/**
 * *=====================================
 * *            SEGUNDA  PARTE
 * *-------------------------------------
 */


/**
 * ? 6) Indicar cual es el id del tipo psiquico. Armar un objeto con las características que consideres importantes del tipo electrico
 */

/console.log('\n\nEJERCICIO 6: ')
const getPsychic = async () => {
    const pokemon = await fetch(`${TYPE_URL}/psychic`, opts)

    return pokemon.json()
}

const psychic = await getPsychic()


console.log("id Psychic: " + psychic.id);


const pokeElectric = {
    id: psychic.id,
    name: psychic.name,
    moves: psychic.moves.length
};

console.log(pokeElectric)


/**
 * ? 7) Indicar cuantos pokemons electricos hay, y crear objetos literales con alguna descripción de 5 de estos pokemons electricos
 */

 console.log('\n\nEJERCICIO 7: ')
 const getElectric = async () => {
     const pokemon = await fetch(`${TYPE_URL}/electric`, opts)
 
     return pokemon.json()
 }
 
 const electric = await getElectric()
 
 console.log(`La cantidad de Pokemons Eléctricos es: ${electric.pokemon.length}`)
 
 
 function caracteristicasElec(electric) {
     for (let i = 0; i < 5; i++) {
 
         const pokeElect = {
             nameElec: electric.pokemon[i].pokemon.name,
             urlElec: electric.pokemon[i].pokemon.url
         }
         console.log(`Nombre: ${pokeElect.nameElec} - URL: ${pokeElect.urlElec}`)
     }
 }
 caracteristicasElec(electric);

/**
 * ? 8) Que hay de particular en la especie del pokemon Lugia
 */

 console.log('\n\nEJERCICIO 8: ')

 const getSpecieLugia = async () => {
     const pokemon = await fetch(`${BASE_URL}/pokemon-species/lugia`, opts)
 
     return pokemon.json()
 }
 
 const pokeSpecieLugia = await getSpecieLugia('lugia')
 
 // console.log(pokeSpecieLugia)
 const pokeLegendary = (p) => {
     if (p.is_legendary === true) {
         console.log(`La especie ${p.name} es Legendario`)
     } else {
         console.log(`La especie ${p.name} NO es Legendario`)
     }
 }
 
 pokeLegendary(pokeSpecieLugia)



