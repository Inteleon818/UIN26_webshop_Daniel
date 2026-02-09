export default function CartItem({p, setCart}) {
    const removeFromCart = (prodid) => {
        /*Oppdaterer state på cart med setCart, og går igjennom listen for å sjekke om
          id-en gitt i funksjonen eksisterer i listen.*/
        setCart(prev => prev.map(item => item.prodid === prodid 
        ?
            /*Kopier eksisterende egenskaper og reduser quantity med 1 hvis produktet allerede finnes.
              Deretter bruker vi filter() slik at bare produkter med quantity 1 eller høyere blir i listen.
              Produkter med quantity lavere enn 1 fjernes fra listen og deretter også fra grensesnittet.*/
            {...item, quantity: item.quantity - 1}: item).filter(item => item.quantity > 0)
        )
    }
    return (
        <tr>
            <td className="title">{p.title}</td>
            <td className="price">{p.price}</td>
            <td className="quantity">{p.quantity}</td>
            <td className="delete"><button onClick={() => removeFromCart(p.prodid)}>X</button></td>
        </tr>
    )
}

