// Metodo antiguo

const persona = {
    nombre: "Camilo",
    edad: 25,
    peso: 63
}
const nombre = persona.nombre
const edad = persona.edad
const peso = persona.peso

console.log( nombre );
console.log( edad );
console.log( peso );

// Desestructuracion

const { nombre, edad, peso } = persona

console.log( nombre );
console.log( edad );
console.log( peso );

// Funcion de desestructuracion antes

const retornaPersona = ( usuario ) => {
    const { nombre, edad, peso } = usuario
    console.log( nombre, edad, peso )
}

// Funcion de desustructuracion en argumento

const retornaPersona = ({ nombre, edad, peso }) => {
    console.log( nombre, edad, peso )
    // Se pueden pasar uno o mas elementos del objeto como parametro
}

// Asignacion de valores por defecto

const retornaPersona = ({ nombre, edad, peso, genero = "Masculino" }) => {
    console.log( nombre, edad, peso, genero )
}

// Ejercicio

const useContext = ({nombre, edad}) => {
    return {
        nombreClave: nombre,
        anios: edad
    }
}
const persona1 = useContext( persona )
const { nombreClave, anios } = persona1
console.log(nombre, anios)

    // Correccion
    const {nombreClave, anios } = useContext ( Persona )


