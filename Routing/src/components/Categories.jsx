import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";

export default function Categories()
{
    const {slug} = useParams()
    /*Henter verdiene av apiEndpoint og defaultApiUrl fra CategoryLayout sin Outlet*/
    const {apiEndpoint, defaultApiUrl} = useOutletContext()
    const [apiData, setApiData] = useState()

    const getData = async() => 
    {
        //Unngå "Uncaught (in promise) SyntaxError: Unexpected token '<', "<!doctype "... is not valid JSON"
        //Husk å ta imot "defaultApiUrl" fra CategoryLayout_Outlet_context"
        //Henter fra url hvis api-endepunkt fra state ikke eksisterer.
        const response = await fetch(apiEndpoint ? apiEndpoint : slug == "pokemon" ? defaultApiUrl+slug+"?offset=983" : defaultApiUrl+slug)
        const data = await response.json()
        setApiData(data.results)
    }

    console.log("Dette er Categories_apiData", apiData)

    useEffect(() => 
    {
        getData()
    }, [slug])

    return (
        <main>
            {/*Tittel er basert på slug*/}
            <h1>{slug}</h1>
            {/*Lager en CategoryCard med informasjon, for hvert objekt i apiData*/}
            {apiData?.map((item) => <CategoryCard key={item.name} name={item.name} url={item.url} />)}
        </main>
    )
} 