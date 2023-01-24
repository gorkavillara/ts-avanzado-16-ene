import { Cliente } from "../models/cliente";
import { ClientView } from "../views/clientView";

export class ClientController {
    private cliente: Cliente
    private vistaCliente: ClientView

    constructor(modelo: Cliente, vista: ClientView) {
        this.cliente = modelo
        this.vistaCliente = vista
    }

    actualizaVista() {
        this.vistaCliente.render()
    }

    actualizaModelo(info: { nombre: string, email: string }) {
        this.cliente.setInfo(info)
        this.actualizaVista()
    }
}