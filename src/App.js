import './App.css';
import { useEffect, useState } from 'react';
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponent';

function App() {

const MY_ID = "060ff77f";
const MY_KEY = "b4e8dd32de6d62c35d34fe818dc8f1f6";

const [mySearch, setMySearch] = useState('');
const [myRecipes, setMyRecipes] = useState([]);
const [wordSubmitted, setWordSubmitted] = useState('lamb');

useEffect(()=>{
  const getRecipe = async ()=>{
    const responce = await fetch(`https://api.edamam.com/search?q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`)
    const data = await responce.json();
    setMyRecipes(data.hits)
  }
  getRecipe();
},[wordSubmitted])

const myRecipeSearch = (e) =>{
  setMySearch(e.target.value);
}

const finalSearch = (e) =>{
  e.preventDefault();
  setWordSubmitted(mySearch);
}

  return(
    <div className="App">
    <div className="container">
    <video autoPlay muted loop>
    <source src={video} type="video/mp4" />
    </video>
    <h1>Find a Recipe</h1>
    </div>

    <div className="container">
    <h3>Type your favorite ingredients</h3>
    </div>

    <div className="container">
      
    <form onSubmit={finalSearch}>
      <input className="search" placeholder='Search...' onChange={myRecipeSearch} value={mySearch}></input> 
    </form>
    <button onClick={finalSearch}>
      <img className="iconSearch" src="https://img.icons8.com/plasticine/512/search-more.png" alt=""/>
    </button>
    </div>

    {/* <div >
    <button onClick={finalSearch}>
      <img className="iconSearch" src="https://img.icons8.com/plasticine/512/search-more.png" width="32px" alt=""/>
    </button>
    </div> */}


    {myRecipes.map((element,id) => (
      <MyRecipesComponent key={id}
      label={element.recipe.label} 
      image={element.recipe.image} 
      mealType={element.recipe.mealType}
      ingredients={element.recipe.ingredientLines}
      />
    ))}
    </div>
  )
}

export default App;
