import { ClientController } from "./mvc/controllers/clientController"
import { Cliente } from "./mvc/models/cliente"
import { ClientView } from "./mvc/views/clientView"

const modeloCliente = new Cliente("Jorge", "jorge@frutos.com")
const vistaCliente = new ClientView(modeloCliente)
const controladorCliente = new ClientController(modeloCliente, vistaCliente)

controladorCliente.actualizaModelo({
    nombre: "Ismael",
    email: "isma@estaenzoom.com",
})

console.log(modeloCliente)