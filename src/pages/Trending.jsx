import { useEffect } from "react"
import { useState } from "react"

export const Trending = () => {
    // En este estado recibiremos la informacion proveniente de la funcion get trending 
    // ? El estado de react viene siendo la definicion de un espacio en memoria en donde almacenaremos un valor inmutable (nuestro estado), el que solo puede ser modificado mediante el setter del estado
    const [trendingList, setTrendingList] = useState([])
    const [contador, setContador] = useState(0)
    console.log('montando componente')

    // ? useEffect en esencia es un disparador de efectos, el cual se dispara cada vez que el estado de nuestro componente cambie, 
    // ? y este forza a que el componente se renderice nuevamente
    // ? useEffect es un metodo que tiene 2 posibles parametros, el primero es un callback el cual sera el efecto que disparara
    // ? el segundo parametro es un [] de dependencias en donde definiremos los estados o variables que useEffect escuchara y cada vez que estos cambien entonces useEffect se disparara
    // ? si no asignas el segundo parametro a useEffect entonces este se gatilla cada vez que el componente se renderice forzando al componente a re-renderizarse 
    useEffect(() => {
        console.log(`valor actual del ${contador}`)
    }, [contador])

    return (
        <div>
            Trending View
            <div className="flex gap-2">

                {contador}
                <button onClick={() => setContador(contador + 1)}> incrementar</button>
            </div>
        </div>
    )
}