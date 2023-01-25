class MockAsync {
    ejecutaFuncionLenta(completado: (valor: string) => void) {
        setTimeout(() => {
            completado("Completado")
        }, 1000)
    }
}

// Ejecutar esta función asíncrona -> MAL
describe("Ejecutando funciones asíncronas", () => {
    xit("Ejecuta la función correctamente", () => {
        let miAsinc = new MockAsync()
        console.log("1 - Hemos creado el objeto")
        let valorRetornado: string
        miAsinc.ejecutaFuncionLenta((valor: string) => {
            console.log("2 - Hemos llamado a la función callback")
            valorRetornado = valor
        })
        console.log("3 - Assert del valor retornado")
        // expect(valorRetornado).toBe("Completado")
    })
})

// Ejecutamos la función asíncrona jest done
describe("Ejecutando funciones asíncronas -> con done", () => {
    let valorRetornado: string
    beforeEach((done: jest.DoneCallback) => {
        let miAsinc = new MockAsync()
        console.log("1 - Hemos creado el objeto")
        miAsinc.ejecutaFuncionLenta((valor: string) => {
            console.log("2 - Lanzamos la función callback")
            valorRetornado = valor
            done()
        })
    })
    xit("Debería retornar el valor después de un segundo", () => {
        // Assert del valor Retornado
        console.log("3 - Hacemos el assert del valor retornado")
        expect(valorRetornado).toBe("Completado")
    })
    xit("Debería tardar un segundo también", () => {
        console.log("4 - Después de otro segundo")
        expect(valorRetornado).toBeDefined()
    })
})

/// Utilizando asincronía con async await
class MiPromesa {
    lanzaLlamadaApi(): Promise<string> {
        return new Promise<string>(resolve => {
            setTimeout(() => {
                resolve("Completada promesa")
            }, 1000)
        })
    }
}

describe("Ejecutando tests asíncronos con async await", () => {
    it("Debería esperar a la resolución de la promesa", async () => {
        let miPromesa = new MiPromesa()
        console.log("Se ha creado el objeto")
        const valorRetornado = await miPromesa.lanzaLlamadaApi()
        expect(valorRetornado).toBe("Completada promesa")
    })
})