declare class Autor {
    nombre: string;
    constructor(n: string);
    saluda(): void;
}
export declare class Libro {
    titulo: string;
    autor: Autor;
    constructor(t: string, n: string);
    obtenDatos(): void;
}
export {};
