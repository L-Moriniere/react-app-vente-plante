import { useState } from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'
import Modal from "react-modal";

function ShoppingList({ cart, updateCart, modalIsOpen, setIsOpen }) {
    const [activeCategory, setActiveCategory] = useState([])
    const [selectedPlant, setSelectedPlant] = useState(null)
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    const customStyles = {
        content: {
            width: '60%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };


    function addToCart(name, price) {
        const currentPlantSaved = cart.find((plant) => plant.name === name)
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantSaved.amount + 1 }
            ])
        } else {
            updateCart([...cart, { name, price, amount: 1 }])
        }
    }


    function openModal(plant) {
        setSelectedPlant(plant)
        setIsOpen(true);
    }


    function closeModal() {
        setSelectedPlant(null);
        setIsOpen(false);
    }



    return (
        <div className='lmj-shopping-list'>
            <Categories
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
            />

            <ul className='lmj-plant-list'>
                {plantList.map(( plant ) =>
                    activeCategory.length === 0 || activeCategory.includes(plant.category) ? (

                        <div key={plant.id}>
                            <PlantItem
                                cover={plant.cover}
                                name={plant.name}
                                water={plant.water}
                                light={plant.light}
                                price={plant.price}
                            />
                            <button onClick={() => addToCart(plant.name, plant.price)}>Ajouter</button>
                            <button onClick={() => openModal(plant)}>Description</button>
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                contentLabel="Description"
                                style={customStyles}

                            >

                                <button onClick={closeModal} className={"close-modal"}>&times;</button>
                                <h2>{selectedPlant && selectedPlant.name}</h2>
                                <div><img className="plant-cover-modal" src={selectedPlant && selectedPlant.cover}  alt="plant cover"/>
                                    {selectedPlant && selectedPlant.description}</div>
                            </Modal>
                        </div>
                    ) : null
                )}
            </ul>
        </div>
    )
}

export default ShoppingList