import { Link, Outlet } from "react-router-dom";

export default function CategoryLayout()
{
    return (
        <>
            <nav>
                <Link to="Applin">Applin</Link>
                <Link to="Flapple">Flapple</Link>
                <Link to="Appletun">Appletun</Link>
                <Link to="Dipplin">Dipplin</Link>
                <Link to="Hydrapple">Hydrapple</Link>
            </nav>
            <Outlet />
        </>
    )

}