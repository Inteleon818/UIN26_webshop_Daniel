import { useEffect, useState } from "react"
import { useOutletContext, useParams } from "react-router-dom"

export default function Category()
{
    const {slug} = useParams()

    const {apiEndpoint, defaultApiUrl} = useOutletContext()
    const [apiData, setApiData] = useState([])
    const [spritesImg, setSpritesImg] = useState([])

    const getSingleData = async() => 
    {
        //Unngå "Uncaught (in promise) SyntaxError: Unexpected token '<', "<!doctype "... is not valid JSON"
        //Husk å ta imot "defaultApiUrl fra CategoryLayout_Outlet_context"
        const response = await fetch(apiEndpoint ? apiEndpoint : defaultApiUrl+slug)
        const data = await response.json()
        setApiData(data)
    }

    console.log("Dette er Category_apiData: ", apiData)
    console.log("Dette er Category_apiEndpoint: ", apiEndpoint)

    useEffect(() => 
    {
        getSingleData()
    }, [slug, apiEndpoint])

    console.log("Pokemon bilder:", spritesImg)

    return (
        <main>
            <h1>{apiData?.name}</h1>
            <section>
                <h2>Bilder</h2>
                <img src={apiData?.sprites?.front_default} alt={apiData?.name} />
            </section>
        </main>
    )
} 