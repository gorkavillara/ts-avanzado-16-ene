import { logMethod, cacheableMethod, measureTime, CacheObject } from "proyecto-ts-libreria-decoradores-gv87"

class Autor {
    nombre: string
    constructor(n: string) {
        this.nombre = n
    }
    saluda() {
        console.log(`Hola mi nombre es ${this.nombre}`)
    }
}

const cache: CacheObject = {}

export class Libro {
    titulo: string
    autor: Autor
    constructor(t: string, n: string) {
        this.titulo = t
        this.autor = new Autor(n)
    }

    @logMethod
    @cacheableMethod(cache)
    obtenDatos() {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor.nombre}`)
        return `Título: ${this.titulo}, Autor: ${this.autor.nombre}`
    }
}