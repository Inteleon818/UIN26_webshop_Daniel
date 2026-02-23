//Importerer Link fra react-router-dom som bruks for navigasjon uten at siden må lastes inn på nytt.
import { Link } from "react-router-dom";

//children er alle komponentene som ligger nestet inni Layout i App.jsx
export default function Layout({children}) 
{
    return (
        <>
            <nav className='main-nav'>
                {/*Lenker til ulike sider*/}
                <Link to="/">Hjem</Link>
                <Link to="categories">Kategorier</Link>
                <Link to="about">Om oss</Link>
            </nav>
            {/*Rendrer alle barnekomponentene til Layout*/}
            {children}
            <footer>
                <p>2026 Utvikling av interaktive nettsider - React router</p>
            </footer>
        </>
    )
}