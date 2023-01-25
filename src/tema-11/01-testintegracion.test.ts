import axios from "axios"
import { fetchData, muestraPorPantalla } from "./funciones"

describe("Hacemos llamadas a API simuladas", () => {
    // Voy a simular la respuesta de este fetchData
    beforeEach(() => {
        jest.spyOn(axios, "get").mockImplementation(() =>
            Promise.resolve({ data: { cantante: "Julio Iglesias" } }) // Faked Data
        )
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it("Debería obtener información de la fuente simulada", async () => {
        const data = await fetchData()
        expect(data).toEqual({ cantante: "Julio Iglesias" })
        expect(axios.get).toBeCalled()
        expect(axios.get).toBeCalledWith("https://mi-servicio-web.com/data")
    })
})

describe("Mockeando console.log", () => {

    beforeEach(() => {
        jest.spyOn(console, "log")
    })
    afterEach(() => {
        jest.clearAllMocks()
    })
    it("Ha llamado al console.log", () => {
        muestraPorPantalla()
        expect(console.log).toBeCalled()
    })
})
