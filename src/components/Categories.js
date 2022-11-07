import '../styles/Categories.css'

function Categories({setActiveCategory, categories, activeCategory}) {

    function checkValue(e){
        e.target.checked ?
            setActiveCategory(cat => [...cat, e.target.value]) :
            setActiveCategory(categories => categories.filter(category => category !== e.target.value))

    }

    console.log(activeCategory)
    return (
        <fieldset>
            <legend>Choisir la catégorie de plante</legend>
            <div className='lmj-categories'>
                {categories.map((cat) => (
                    <div key={cat}>
                        <input type='checkbox' value={cat} onChange={(e) => checkValue(e)}/>
                        <label>{cat}</label>
                    </div>
                ))}

                <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
            </div>

        </fieldset>
    )
}

export default Categories