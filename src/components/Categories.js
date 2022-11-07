import '../styles/Categories.css'

function Categories({setActiveCategory, categories, activeCategory}) {

    //permet de filtrer la page, ajoute ou supprime
    //les catégories de plante à afficher
    function checkValue(e){
        e.target.checked ?
            setActiveCategory(cat => [...cat, e.target.value]) :
            setActiveCategory(categories => categories.filter(category => category !== e.target.value))

    }

    return (
        <fieldset className='fieldset'>
            <legend>Choisir la catégorie de plante</legend>
            <div className='lmj-categories'>
                {categories.map((cat) => (
                    <div key={cat} className={"categories-input"}>
                        <input type='checkbox' value={cat} onChange={(e) => checkValue(e)}/>
                        <label>{cat}</label>
                    </div>
                ))}
                <br/>
                <button className="button-reset" onClick={() => setActiveCategory([])}>Réinitialiser</button>
            </div>

        </fieldset>
    )
}

export default Categories