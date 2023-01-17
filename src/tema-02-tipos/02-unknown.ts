const llamadaAUnaAPI = () => "Hola"



let a: unknown = llamadaAUnaAPI()
let b = a === "Adiós"
if (typeof a === "number") { // Type guard
    let c = a + 10 // tipo de a: number
    let d = a.toFixed(2)
}















export {}