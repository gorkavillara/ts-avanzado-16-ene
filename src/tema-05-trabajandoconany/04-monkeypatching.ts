//@ts-ignore
window.manuel = "Hola mundo"

interface Document {
    manuel: "Hola Mundo" | "Hola Manuel" | "Hola Ismael"
}

document.manuel = "Hola Manuel"

// Seguridad de tipos
// Documentación a esa propiedad