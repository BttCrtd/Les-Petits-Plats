import Image from "next/image";
import Link from "next/link";
import "@/styles/recipeCard.css";

export function RecipeCard({ recipe }) {
  return (
    <Link href={`/recipe/${recipe.id}`} className="recipe-card-container">
      <article>
        <div className="time">
          <p>{recipe.time}min</p>
        </div>
        <Image
          src={`/images/${recipe.image}`}
          alt={`Photo ${recipe.name}`}
          width={380}
          height={253}
          className="recipe-image"
        />
        <div className="card-contents">
          <h2>{recipe.name}</h2>
          <h3>Recette</h3>
          <p>{recipe.description}.</p>
          <h3>Ingrédients</h3>
          <div className="list-ingredients">
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>
                  <div className="ingredien">
                    <span>{ingredient.ingredient}</span>
                    <p>
                      {ingredient.quantity ? ingredient.quantity : "-"}
                      {ingredient.unit ? ` ${ingredient.unit}` : ""}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </Link>
  );
}