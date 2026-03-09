import { useEffect, useState } from "react"
import { useOutletContext, useParams } from "react-router-dom"

export default function Category()
{
    /*slug og pokemon_name path slugs fra App*/
    const {slug, pokemon_name} = useParams()
    const {apiEndpoint, defaultApiUrl} = useOutletContext()
    const [apiData, setApiData] = useState([])

    /*Sprites bilder regnes ut direkte fra apiData hver gang komponenten rendres*/
    const spritesImg = apiData?.sprites ? Object.keys(apiData.sprites) : []

    const getSingleData = async() => 
    {
        //Unngå "Uncaught (in promise) SyntaxError: Unexpected token '<', "<!doctype "... is not valid JSON"
        //Husk å ta imot "defaultApiUrl fra CategoryLayout_Outlet_context"
        const response = await fetch(apiEndpoint ? apiEndpoint : defaultApiUrl+slug+"/"+pokemon_name)
        const data = await response.json()
        setApiData(data)
    }

    console.log("Dette er Category_apiData: ", apiData)
    console.log("Dette er Category_apiEndpoint: ", apiEndpoint)

    useEffect(() => 
    {
        getSingleData()
    }, [pokemon_name, apiEndpoint])

    console.log("Pokemon bilder:", spritesImg)

    return (
        <main>
            <h1>{apiData?.name}</h1>
            <section>
                <h2>Bilder</h2>
                {spritesImg?.map((item) => (
                    /*
                    Først sjekkes det om apiData finnes, om sprites-objektet finnes 
                    og om det finnes en verdi i sprites-objektet med nøkkelen representert av item for hver iterasjon.
                    [item] har brackets fordi den er dynamisk. Uten det tar den item bokstavelig.

                    Hvis det finnes en gyldig bilde-url på denne nøkkelen, så rendres img-elementet.
                    */
                    apiData?.sprites?.[item] ? <img key={item} src={apiData?.sprites?.[item]} alt={apiData?.name} /> : null
                ))}
            </section>
        </main>
    )
} 