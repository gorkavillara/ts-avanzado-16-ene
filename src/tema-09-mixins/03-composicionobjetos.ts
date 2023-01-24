class Persona {
    nombre: string
    constructor(n: string) {
        this.nombre = n
    }
    saluda() {
        console.log(`Hola ${this.nombre}`)
    }
}

class Coche {
    modelo: string
    constructor(m: string) {
        this.modelo = m
    }
    conduce() {
        console.log(`Estoy conduciendo un ${this.modelo}`)
    }
}

class Piloto {
    persona: Persona
    coche: Coche
    constructor(n: string, m: string) {
        this.persona = new Persona(n)
        this.coche = new Coche(m)
    }
    saluda() {
        this.persona.saluda()
    }
    conduce() {
        this.coche.conduce()
    }
}

const piloto = new Piloto("Paco", "TypeR")

piloto.saluda()
piloto.conduce()

export {}