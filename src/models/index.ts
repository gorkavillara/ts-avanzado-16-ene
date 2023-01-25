class Autor {
    nombre: string
    constructor(n: string) {
        this.nombre = n
    }
    saluda() {
        console.log(`Hola mi nombre es ${this.nombre}`)
    }
}

export class Libro {
    titulo: string
    autor: Autor
    constructor(t: string, n: string) {
        this.titulo = t
        this.autor = new Autor(n)
    }

    obtenDatos() {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor.nombre}`)
    }
}