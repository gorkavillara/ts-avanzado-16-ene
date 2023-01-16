import "reflect-metadata"

function miDecoradorDeClase(constructor: any) {
    console.log(`Class name: ${constructor.name}`)
}

// __metadata("design:type", Function),
// __metadata("design:paramtypes", [String]),
// __metadata("design:returntype", Boolean)
function miDecoradorDeParametrosConMD(target: any, methodName: string, parameterIndex: number) {
    // Aquí haríamos nuestra magia
    const designType = Reflect.getMetadata("design:type", target, methodName)
    console.log(`design type: ${designType}`)
    const paramTypes = Reflect.getMetadata("design:paramtypes", target, methodName)
    console.log(`design type: ${paramTypes}`)
    const returnType = Reflect.getMetadata("design:returntype", target, methodName)
    console.log(`design type: ${returnType}`)
}

@miDecoradorDeClase
class Dummy {
    holaMundo() {
        console.log("Hola Mundo")
    }

    saluda(@miDecoradorDeParametrosConMD nombre: string): boolean {
        console.log(`Hola ${nombre}`)
        return true
    }
}