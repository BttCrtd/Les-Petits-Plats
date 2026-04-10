import Image from "next/image";
import styles from "@/styles/page.module.css";
import recipes from "../../data/recipes.json";
import { RecipeCard } from "@/components/RecipeCard/RecipeCard";
import { Filter } from "@/components/Filter/Filter";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.filters_container}>
          <div className={styles.filters}>
            <Filter category="Ingrédients" />
            <Filter category="Appareils" />
            <Filter category="Ustensiles" />
          </div>
          <div className={styles.counter_recipes}>
            <p>50 recettes</p>
          </div>
        </div>
         <div className={styles.recipes_container}>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </main>
    </div>
  );
}
