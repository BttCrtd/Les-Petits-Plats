import styles from "@/styles/page.module.css";
import "@/styles/recipe.css";
import Image from "next/image";
import recipes from "../../../../data/recipes.json";
import { Banner } from "@/components/Banner/Banner";
import NotFound from "@/app/not-found";

export default async function RecipePage({ params }) {
  const { slug } = await params;

  const recipe = recipes.find((r) => r.slug === slug);

  if (!recipe) {
    return <NotFound />;
  }
  return (
    <div className={styles.page}>
      <Banner />
      <main className={styles.main}>
        <div className={styles.grid_container}>
          <Image
            src={`/images/${recipe.image}`}
            alt={`Photo de la recette ${recipe.name}`}
            width={606}
            height={738}
            className="recipe-picture"
          />
          <div className="recipe-explain">
            <h1>{recipe.name}</h1>
            <div className="info">
              <h2>Temps de préparation</h2>
              <p className="recipe-time">{recipe.time}min</p>
            </div>
            <div className="info">
              <h2>Ingrédients</h2>
              <div className="list-container">
                <ul>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>
                      <div className="element">
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
            <div className="info">
              <h2>Ustensiles nécessaires</h2>
              <div className="list-container">
                <ul>
                  {recipe.ustensils.map((ustensil, index) => (
                    <li key={index}>
                      <div className="element">
                        <span>{ustensil}</span>
                        <p>1</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="info">
              <h2>Appareils nécessaires</h2>
              <div className="list-container">
                <ul>
                  <li>
                    <div className="element">
                      <span>{recipe.appliance}</span>
                      <p>1</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="info">
              <h2>Recette</h2>
              <div className="description">
                <p>{recipe.description}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}