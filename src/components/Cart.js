import {useState} from 'react'
import '../styles/Cart.css'
import poubelle from '../assets/poubelle.svg'

function Cart({cart, updateCart}) {
    const [isOpen, setIsOpen] = useState(true)

    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    )

    function DeleteFromCart(name,price, amount) {
        const currentPlantSaved = cart.find((plant) => plant.name === name)
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            amount === 1 ? updateCart(cart.filter((item => item.name !== name)) ) :
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantSaved.amount - 1 }
            ])
        } else {
            updateCart([...cart, { name, price, amount: 1 }])
        }
    }

    return isOpen ? (
        <div className='lmj-cart'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            {cart.length > 0 ? (
                <div>
                    <h2>Panier</h2>
                    <ul>
                        {cart.map(({name, price, amount}, index) => (
                            <div key={`${name}-${index}`}>
                                {name} {price}€ x {amount}
                                <button onClick={() => DeleteFromCart(name, price, amount)}><img className={'icon-poubelle'} src={poubelle} alt='poubelle-icon'/></button>
                            </div>
                        ))}
                    </ul>
                    <h3>Total :{total}€</h3>
                    <button onClick={() => updateCart([])}>Vider le panier</button>
                </div>
            ) : (
                <div>Votre panier est vide</div>
            )}
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le Panier
            </button>
        </div>
    )
}

export default Cart