type Calzado = {
    objetivo: string
}

class Zapato implements Calzado {
    objetivo = "Ir a las bodas"
}

class Zapatilla implements Calzado {
    objetivo = "Hacer deporte"
}

class Chancla implements Calzado {
    objetivo = "Ir a la playa"
}

class Bota implements Calzado {
    objetivo = "Cortar troncos"
}

// Factoría de objetos
// Aquí vamos a crear un método que cree objetos
type TipoCalzado = "Bota" | "Zapato" | "Zapatilla" | "Chancla"

let Calzado = {
    crear(tipo: TipoCalzado) {
        switch(tipo) {
            case "Bota": return new Bota()
            case "Zapato": return new Zapato()
            case "Zapatilla": return new Zapatilla()
            case "Chancla": return new Chancla()
        }
    }
}

let miBota = Calzado.crear("Bota")

console.log(`miBota: ${JSON.stringify(miBota)}`)