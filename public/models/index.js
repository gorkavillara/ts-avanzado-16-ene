"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libro = void 0;
class Autor {
    constructor(n) {
        this.nombre = n;
    }
    saluda() {
        console.log(`Hola mi nombre es ${this.nombre}`);
    }
}
class Libro {
    constructor(t, n) {
        this.titulo = t;
        this.autor = new Autor(n);
    }
    obtenDatos() {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor.nombre}`);
    }
}
exports.Libro = Libro;
