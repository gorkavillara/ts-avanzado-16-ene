function devuelveArrayConPosiciones(inicio: number, final: number) {
    const salida = []
    for (let i = inicio; i <= final; i++) {
        salida.push(i)
    }
    return salida
}

let valor // Desactivar TODOS los chequeos futuros

if (Math.random() > 0.5) {
    valor = "hola"
    valor
} else {
    valor = false
    valor
}

valor

function procesaValor(valor: unknown) {
    // Type guards
    if (valor instanceof Date) {
        valor
    }
}

// type guards personalizados con predicados
type Libro = {
    titulo: string,
    autor: string
}

function esUnLibro(valor: unknown): valor is Libro {
    return (typeof valor === "object" && valor !== null && "titulo" in valor && "autor" in valor)
}

function procesaValor2(valor: unknown) {
    // Se va a inferir el tipo en función de los type guards
    if (esUnLibro(valor)) {
        valor // type: Libro
        valor.titulo 
    }
}