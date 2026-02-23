//Importerer Outlet som brukes til visning av barneruter.
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from 'react'

export default function CategoryLayout()
{
    const [apiData, setApiData] = useState([])
    const [apiEndpoint, setApiEndpoint] = useState()

    const defaultApiUrl = 'https://pokeapi.co/api/v2/'

    const getData = async() => 
    {
        const response = await fetch(defaultApiUrl)
        const data = await response.json()
        const {pokemon, type, item, ability} = data
        setApiData({pokemon, type, item, ability})
    }

    useEffect(() => 
    {
        getData()
    }, [])

    console.log("Dette er CategoryLayout_apiData: ", apiData)
    console.log("Dette er CategoryLayout_Object.keys(apiData)", Object.keys(apiData))
    console.log("Dette er CategoryLayout_apiEndpoint: ", apiEndpoint)

    return (
        <>
            <nav className='main-nav'>
                {/*Gjør om apiData sine verdier til nøkkel-verdipar
                   for så å gjennom disse verdiene ved å
                   lage en lenke til hver av dem
                   der api-url-en er basert på default api-url-en + den tilhørende item-verdien.*/}
                {Object.keys(apiData)?.map((item) => <Link key={item} to={item} onClick={() => item == "pokemon" ? setApiEndpoint(defaultApiUrl + item + "?offset=983") : setApiEndpoint(defaultApiUrl + item)}>{item}</Link>)}
                {/*apiData?.map((item) => <Link key={item.name} to={item.name} onClick={() => setApiEndpoint(item.url)}>{item.name}</Link>)*/}
            </nav>
            {/*Barneruter ligger i Outlet.
               Når vi er på /categories, så vises <Categories />.
               Når vi er på /category, så vises <Category />*/}
            <Outlet context={{apiEndpoint, defaultApiUrl, setApiEndpoint}} />
        </>
    )

} 