import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from 'react'

export default function CategoryLayout()
{
    const [apiData, setApiData] = useState([])
    const [apiEndpoint, setApiEndpoint] = useState()
    const getData = async() => 
    {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=960&limit=10')
        const data = await response.json()
        setApiData(data.results)
    }

    console.log(apiData)
    console.log(apiEndpoint)

    useEffect(() => 
    {
        getData()
    }, [])

    return (
        <>
            <nav className='main-nav'>
                {apiData?.map((item) => <Link key={item.name} to={item.name} onClick={() => setApiEndpoint(item.url)}>{item.name}</Link>)}
            </nav>
            <Outlet />
        </>
    )

} 