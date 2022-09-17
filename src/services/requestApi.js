
const API_BASE = "https://api.giphy.com/v1/gifs/"
const API_KEY = "TWo5VaW5b9Z6b9oSJcYBlab53piGasRK"


export const getTrending = async () => {
    // mas informacion acerca de fetch 
    // Docs https://dmitripavlutin.com/javascript-fetch-async-await/
    // Peticion hacia la api para obtener la informacion proveniente de determinado endpoint
    const fetching = await fetch(`${API_BASE}trending?api_key=${API_KEY}&limit=25`)
    // Respuesta de la peticion con los datos obtenidos del endpoint asignado
    // Esta respuesta debe siempre ser transformada mediante el uso de json(),
    // de esta manera sera utilizable en una aplicacion 
    const res = await fetching.json()
    console.log(res)
    return res
}