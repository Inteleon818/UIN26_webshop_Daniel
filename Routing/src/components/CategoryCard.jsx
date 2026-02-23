import { useState, useEffect } from "react"
import { Link, useOutletContext, useParams } from "react-router-dom";

export default function CategoryCard({name, url}) 
{
    const {slug} = useParams()
    const {setApiEndpoint} = useOutletContext()
    //useState skal ha krøllparenteser for objekter, blokkparenteser for lister.
    const [apiData, setApiData] = useState({})

    const getData = async() => 
    {
        const response = await fetch(url)
        const data = await response.json()
        setApiData(data)
    }

    console.log("Dette er CategoryCard_slug", slug)

    useEffect(() => 
    {
        getData()
    }, [])

    return (
        <article>
            <h3>{name}</h3>
            <p>{apiData?.id}</p>
            {slug === "type" ? <img src={`../type_img/${apiData?.name}.png`} /> :  
            <img src={apiData?.sprites?.front_default} alt={apiData?.name}></img> }
            <ul>
                {apiData?.stats?.map((item) => <li key={apiData?.name + item.stat.name}>{item.stat.name}: {item?.base_stat}</li>)}
            </ul>
            <Link to={apiData?.name} onClick={() => setApiEndpoint(url)}>Les mer om {apiData?.name}.</Link>
        </article>
    )
} 