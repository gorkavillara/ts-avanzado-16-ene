import axios, { AxiosResponse } from "axios"

export const fetchData = (): Promise<AxiosResponse> => {
    return axios
        .get("https://mi-servicio-web.com/data")
        .then((res) => res.data)
}

export const muestraPorPantalla = () => {
    console.log("Hola mundo")
}