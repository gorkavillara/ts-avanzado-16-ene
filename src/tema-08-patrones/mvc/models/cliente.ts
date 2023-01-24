export class Cliente {
    private nombre: string
    private email: string

    constructor(n: string, e: string) {
        this.nombre = n
        this.email = e
    }

    getInfo() {
        return {
            nombre: this.nombre,
            email: this.email
        }
    }

    setInfo(info: { nombre: string, email: string }) {
        const { nombre, email } = info
        this.nombre = nombre
        this.email = email
    }
}