import Image from "next/image";
import styles from "@/styles/page.module.css";
import recipes from "../../data/recipes.json";
import { RecipeCard } from "@/components/RecipeCard/RecipeCard";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
         <div className={styles.recipes_container}>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </main>
    </div>
  );
}
