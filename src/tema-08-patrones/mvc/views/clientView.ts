import { Cliente } from "../models/cliente"

export class ClientView {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        this.cliente = cliente
    }

    render() {
        // Aquí hago mi magia en el DOM
        // Muestro el nombre del cliente
        // Los colores corporativos
    }
}