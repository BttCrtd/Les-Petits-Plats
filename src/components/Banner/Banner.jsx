import Image from "next/image";
import "@/styles/banner.css";
import { SearchBar } from "@/components/SearchBar/SearchBar";

export function Banner() {
  return (
    <header className="banner">
      <div className="logo-container">
        <Image
          src="/Logo.svg"
          alt="Logo les petits plat"
          width={200}
          height={25}
        />
      </div>
      <div className="title-and-research">
        <h1>
          DÉCOUVREZ NOS RECETTES <br /> DU QUOTIDIEN,SIMPLES ET DÉLICIEUSES
        </h1>
        <SearchBar
          placeholderText={"Rechercher une recette, un ingrédient, ..."}
        />
      </div>
    </header>
  );
}