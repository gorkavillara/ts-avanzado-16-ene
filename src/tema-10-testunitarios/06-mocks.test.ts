// Los mocks son formas de asegurarnos
// de que ciertas funciones están siendo ejecutadas
// correctamente

// jest.fn()

class MiCallback {
    ejecutaCallback(valor: string, funcionCallback: (valor: string) => null) {
        console.log("Ejecutando el callback")
        funcionCallback(valor)
    }
}


it("debería simular la función callback", () => {
    const mock = jest.fn()
    const miCallback = new MiCallback()

    const parametro = "testeando mocks"

    miCallback.ejecutaCallback(parametro, mock)
    expect(mock).toBeCalled()
    expect(mock).toBeCalledWith(parametro)
})