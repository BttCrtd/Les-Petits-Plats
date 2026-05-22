"use client";

import "@/styles/filter.css";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function Filter({ name, category, select, abbleRecipe, actifTag }) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  let list = [];

  abbleRecipe.forEach((recipe) => {
    if (name === "Ingrédients") {
      recipe.ingredients.forEach((item) => {
        list.push(item.ingredient);
      });
    }
    if (name === "Appareils") {
      list.push(recipe.appliance);
    }
    if (name === "Ustensiles") {
      recipe.ustensils.forEach((u) => {
        list.push(u);
      });
    }
  });

  const result = [...new Set(list)];

  return (
    <div className="filter">
      <button onClick={() => setIsOpen(!isOpen)}>
        {name} <FontAwesomeIcon icon={faAngleDown} className="arrow" style={{transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",}}/>
      </button>
      <div className={`filter-content ${isOpen ? "open" : ""}`}>
        <SearchBar
          placeholderText={""}
          value={search}
          onChange={setSearch}
        />

        <ul className="filter-list">
          {result
            .filter((tag) => !actifTag[category].includes(tag))
            .filter((tag) =>
              tag.toLowerCase().includes(search.toLowerCase())
            )
            .map((tag, index) => (
              <li
                key={index}
                onClick={() => select(category, tag)}
              >
                {tag}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}