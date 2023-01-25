class ContadorGlobal {
    contador: number = 0
    increment(): void {
        this.contador++
    }
}

describe("Probamos los métodos de setup de tests", () => {
    let miContador: ContadorGlobal
    beforeAll(() => {
        // Inicializarlo todo antes de que ejecute el primer test
        miContador = new ContadorGlobal()
    })

    beforeEach(() => {
        // Se ejecuta antes de cada uno de los tests
        miContador.contador = 0
    })

    afterEach(() => {
        console.log(`El contador vale ${miContador.contador}`)
    })

    afterAll(() => {
        console.log("He terminado de ejecutar los tests")
    })

    it("lanzo el método y aumenta en uno, lo vuelvo a lanzar y aumenta uno más", () => {
        miContador.increment()
        expect(miContador.contador).toBe(1)
        miContador.increment()
        expect(miContador.contador).toBe(2)
    })
    // it("una llamada más y se va a tres", () => {
    //     miContador.increment()
    //     expect(miContador.contador).toBe(3)
    // })
    it("lo lanzo dos veces y vale 2", () => {
        miContador.increment()
        miContador.increment()
        expect(miContador.contador).toBe(2)
    })
})
