"use client";

import "@/styles/filter.css";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function Filter({ category }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="filter">
      <button onClick={() => setIsOpen(!isOpen)}>
        {category} <FontAwesomeIcon icon={faAngleDown} className="arrow" />
      </button>
      {isOpen ? (
        <div className="filter-content">
          <SearchBar placeholderText={""} />
          <ul className="filter-list">
            <li>Jus de citrons</li>
            <li>Jus de citrons</li>
            <li>Jus de citrons</li>
            <li>Jus de citrons</li>
            <li>Jus de citrons</li>
            <li>Jus de citrons</li>
            <li>Jus de citrons</li>
            <li>Jus de citrons</li>
            <li>Jus de citrons</li>
            <li>Jus de citrons</li>
            <li>Jus de citrons</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}