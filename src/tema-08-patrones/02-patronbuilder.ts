class LlamadaApi {
    private url: string | null = null
    private method: "GET" | "POST" | null = null
    private body: object | null = null
    setUrl(u: string) {
        this.url = u
        return this
    }
    setMethod(m: "GET" | "POST") {
        this.method = m
        return this
    }
    setBody(b: object) {
        this.body = b
        return this
    }
    async send() {
        // Aquí enviamos la petición
    }
}


const miLlamada = new LlamadaApi()
    .setUrl("https://miendpoint.com")
    .setMethod("POST")
    .setBody({ action: "accept" })

miLlamada
    .send()
    .then(res => console.log(res))
    .catch(error => console.error(error))