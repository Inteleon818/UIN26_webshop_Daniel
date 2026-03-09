//Importerer Outlet som brukes til visning av barneruter.
import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from 'react'

export default function CategoryLayout()
{
    /*slug henter den siste verdien gitt i url-en*/
    const {slug} = useParams()
    const [apiData, setApiData] = useState([])
    const [apiEndpoint, setApiEndpoint] = useState()

    const defaultApiUrl = 'https://pokeapi.co/api/v2/'

    const getData = async() => 
    {
        const response = await fetch(defaultApiUrl)
        const data = await response.json()
        /*apiData får verdier som representerer
        unike url-er basert på siste verdi, der veiene leder til forskjellig data fra hverandre*/
        const {pokemon, type, item, ability} = data
        setApiData({pokemon, type, item, ability})
    }

    console.log("Dette er CategoryLayout_apiData: ", apiData)
    console.log("Dette er CategoryLayout_apiEndpoint: ", apiEndpoint)

    useEffect(() => 
    {
        getData()
    }, [slug])

    return (
        <>
            <nav className='main-nav'>
                {/*Gjør om nøkkel-verdiparene til listeobjekter slik at de kan mappes igjennom.
                   Deretter vil det gjennom disse verdiene lages en lenke til hver
                   api-url i apiData basert på default api-url-en + den tilhørende item-verdien.*/}
                {Object.keys(apiData)?.map((item) => <Link key={item} to={item} onClick={() => item == "pokemon" ? setApiEndpoint(defaultApiUrl + item + "?offset=983") : setApiEndpoint(defaultApiUrl + item)}>{item}</Link>)}
            </nav>
            {/*
                Barneruter ligger i Outlet.
                Når vi er på /categories, så vises <Categories />.
                Når vi er på /category, så vises <Category />
                Det bestemmes av routene definert i App.jsx
            */}
            <Outlet context={{apiEndpoint, defaultApiUrl, setApiEndpoint}} />
        </>
    )

} 