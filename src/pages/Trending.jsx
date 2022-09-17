import { useEffect } from "react"
import { useState } from "react"
import { getTrending } from "../services/requestApi"

export const Trending = () => {
    // ? En este estado recibiremos la informacion proveniente de la funcion get trending 
    // ? El estado de react viene siendo la definicion de un espacio en memoria en donde almacenaremos  valores inmutables (nuestro estado),
    // ? el que solo puede ser modificado mediante el setter del estado
    const [trendingList, setTrendingList] = useState([])


    // get data and reset state
    const fetchTrendingList = async () => {
        const trendingListData = await getTrending()
        setTrendingList(trendingListData)
    }

    // ? useEffect en esencia es un disparador de efectos, el cual se dispara cada vez que el estado de nuestro componente cambie, 
    // ? y este forza a que el componente se renderice nuevamente
    // ? useEffect es un metodo que tiene 2 posibles parametros, el primero es un callback el cual sera el efecto que disparara
    // ? el segundo parametro es un [] de dependencias en donde definiremos los estados o variables que useEffect escuchara y cada vez que estos cambien entonces useEffect se disparara
    // ? si no asignas el segundo parametro a useEffect entonces este se gatilla cada vez que el componente se renderice forzando al componente a re-renderizarse 
    useEffect(() => {
        fetchTrendingList()
    }, [])

    console.log(trendingList)
    return (
        <div>

            <div className="flex gap-2 flex-wrap justify-center items-center">
                {trendingList.data
                    ?
                    trendingList.data.map((gif) => {
                        return (
                            <div key={gif.id} className="bg-sky-500 min-w-[200px] min-h-[200px]">
                                <img width={gif.images.downsized_medium.width} height={gif.images.downsized_medium.height} src={gif.images.downsized_medium.url} alt="" />
                                <h2>{gif.username ? gif.username : "Anonimo"}</h2>

                            </div>
                        )
                    })

                    :
                    <div>NO HAY DATA</div>
                }

            </div>
        </div>
    )
}