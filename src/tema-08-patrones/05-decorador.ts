const isAuthenticated = () => Math.random() > 0.5

const Autenticado = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const metodoOriginal = descriptor.value

    descriptor.value = function (...args: any[]) {
        // Chequeo de si estamos autenticados o no
        if (isAuthenticated()) {
            // Si estamos autenticados lanzamos la función original
            return metodoOriginal.apply(this, args)
        }
        // Si no lo estamos lanzamos un error
        throw new Error("No autorizado")
    }
}

class MiControlador {
    @Autenticado
    obtenInformacionDelicada() {
        // Método al que solo se puede llamar si el usuario está autenticado
        console.log("Estoy autenticado y puedo obtener esta información delicada")
    }
}

const miControlador = new MiControlador().obtenInformacionDelicada()