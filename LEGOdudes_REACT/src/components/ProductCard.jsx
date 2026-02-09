export default function ProductCard({p, setCart}) {
    const handleClick = () => {
        setCart((prev) =>
        prev.some(item => item.prodid === p.prodid)
        ?
            prev.map(item => item.prodid === p.prodid 
            ?
                /*Kopier eksisterende egenskaper og øk quantity med 1 hvis produktet allerede finnes.*/
                {...item, quantity: item.quantity + 1}
            :
                item
            )
        :
        /*Hvis produktet ikke finnes så beholder man alle eksisterende produkter,
          kopierer produktdata og setter startverdi på quantity som 1.*/
        [...prev, {...p, quantity: 1}]
        )
    }

    return (
        <article className="product-card">
            <img src={`website_images/PROD_${p.imagefile}`} alt={p.title}/>
            <a href="#">{p.category}</a>
            <h3>{p.title}</h3>
            <p>Kr. {p.price},-</p>
            <button onClick={handleClick}>Legg til handlevogn</button>
        </article>
    )
}

  