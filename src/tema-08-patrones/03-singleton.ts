class Auth {
    private static instance: Auth
    private constructor() {}

    static obtenAuth(): Auth {
        if (!Auth.instance) {
            Auth.instance = new Auth()
        }
        return Auth.instance
    }

    metodosPublicos() {
        // Lo que queramos
        console.log("He llamado al método público")
    }
}

const auth = Auth.obtenAuth()
const segundoAuth = Auth.obtenAuth()

console.log(auth === segundoAuth) // true

auth.metodosPublicos()