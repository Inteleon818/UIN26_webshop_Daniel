import CartItem from './CartItem.jsx'

export default function Cart({isOpen, cart, setCart, totalSum}) {
    return (
        /*Handlekurven vises basert på om isOpen er true eller false.*/
        <section id="cart" className={isOpen ? "" : "hidden"}>
        <table id ="cart-items">
            <tbody>
                {cart.length <= 0 
                ? 
                    (<tr>
                        <td>Ingen varer i handlevognen enda.</td>
                    </tr>)
                : 
                    (cart.map(p => <CartItem key={p.prodid} p={p} setCart={setCart}/>))}
            </tbody>
        </table>
            <p>Total pris: <span id="total-price">{totalSum}</span>NOK</p>
        </section>
    )
}

