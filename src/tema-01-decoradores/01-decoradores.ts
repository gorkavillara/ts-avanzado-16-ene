// Clases: accediendo al prototipo
function decoradorDeClase(constructor: Function) {
    // Desde aquí dentro puedo acceder al constructor
    // Prototype: Objeto creado en base a esta clase
    constructor.prototype.isDeveloper = true
}

// Propiedades
function decoradorDePropiedad(target: any, propertyName: string | symbol) {
    console.log(`Propiedad: ${propertyName.toString()}`)
}
function otroDecoradorDePropiedad(target: any, propertyName: string) {
    // if (typeof target === "function") { // Esto es lo que ocurre en propiedades estáticas
    //     console.log(`Nombre de la clase: ${target.name}`)
    // } else {
    //     console.log(`Nombre de la clase: ${target.constructor.name}`)
    // }
    console.log(
        `Nombre de la clase: ${
            typeof target === "function" ? target.name : target.constructor.name
        }`
    )
}

// Métodos
function decoradorDeMetodo(
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
) {
    let funcionOriginal = target[methodName]

    let nuevaFuncion = function (this: any) {
        console.log(`--- Se ha llamado al método ${methodName}`)
        for (let i = 0; i < arguments.length; i++) {
            console.log(`----- Parámetro ${i + 1}: ${arguments[i]}`)
        }
        funcionOriginal.apply(this, arguments)
    }

    target[methodName] = nuevaFuncion

    return target
}

// Accessors (getters y los setters)
function Enumerable(isEnum: boolean) {
    const decoradorDeAccessor = (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) => {
        descriptor.enumerable = isEnum
    }

    return decoradorDeAccessor
}

// Parámetros
function decoradorDeParametro(
    target: any,
    propertyKey: string,
    parameterIndex: number
) {
    console.log(
        `-- Decorador de parámetro: ${target.constructor.name} ${propertyKey}, índice ${parameterIndex}`
    )
}

@decoradorDeClase
class Alumno {
    // @decoradorDePropiedad @otroDecoradorDePropiedad private _nombre: string
    @decoradorDePropiedad
    @otroDecoradorDePropiedad
    private _nombre: string

    @otroDecoradorDePropiedad
    static tipoClase = "Persona -> Alumno"

    constructor(n: string) {
        this._nombre = n
    }

    @decoradorDeMetodo
    ponMiNombreEnOrden(@decoradorDeParametro orden: number) {
        console.log(`${orden}. ${this._nombre}`)
    }

    @Enumerable(true)
    get nombre() {
        return this._nombre
    }
}

const miAlumno = new Alumno("Javier") as Alumno & { isDeveloper?: boolean }

//@ts-ignore
console.log(miAlumno.isDeveloper)

console.log(miAlumno.nombre)

// for...in
for (let key in miAlumno) {
    //@ts-ignore
    console.log(`Key: ${key}, Value: ${miAlumno[key]}`)
}

// miAlumno.ponMiNombreEnOrden(18)
export {}