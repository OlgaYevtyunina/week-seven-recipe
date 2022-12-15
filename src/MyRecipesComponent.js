import checkImage from './check.png';

function MyRecipesComponent({label, image,mealType, ingredients}){
    return(<div>
        <div className="container">
            <h2>{label}</h2>
            </div>

            <div className="container">
            <img className="tasty" src={image} alt="imagerecipe" />
            </div>

        <ul className="list">
        {ingredients.map((ingredient, index) => (
            <li key={index}><img src={checkImage} width="32px" alt="check" className="icon"/>{ingredient}</li>
        ))}
        </ul>

        <div className="container">
            <p className="par">{mealType}</p>
        </div>

        </div>
    )
}

export default MyRecipesComponent;