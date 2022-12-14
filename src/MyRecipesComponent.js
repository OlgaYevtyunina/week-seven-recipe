function MyRecipesComponent({label, image, calories, ingredients}){
    return(<div>
        <div className="container">
            <h2>{label}</h2>
            </div>

            <div className="container">
            <img className="tasty" src={image} alt="imagerecipe" />
            </div>

        <ul className="list">
        {ingredients.map((ingredient, index) => (
            <li key={index}><img src="https://icons8.com/icons/set/check--static--cyan" alt="check" className="icons"/>{ingredient}</li>
        ))}
        </ul>

        <div className="container">
            <p className="par">{calories.toFixed()} calories</p>
        </div>
        </div>
    )
}

export default MyRecipesComponent;