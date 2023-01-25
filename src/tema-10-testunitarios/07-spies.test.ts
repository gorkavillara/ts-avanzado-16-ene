class MiClaseEspiada {
    funcionTest() {
        console.log("Se ha llamado a la funcionTest()")
        this.funcionTestDerivada()
    }

    funcionTestDerivada() {
        console.log("Se ha llamado a la función derivada")
    }
}

test("Debería funcionar el spy", () => {
    const miClase = new MiClaseEspiada()

    const funcionEspiada = jest.spyOn(miClase, "funcionTest")

    miClase.funcionTest()
    expect(funcionEspiada).toBeCalled()
})

test("Debería llamarse la función derivada", () => {
    const miClase = new MiClaseEspiada()

    const funcionDerivadaEspiada = jest.spyOn(miClase, "funcionTestDerivada")

    miClase.funcionTest()
    expect(funcionDerivadaEspiada).toBeCalledTimes(1)
})

