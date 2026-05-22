import "@/styles/tag.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export function Tag({ name, onClick }) {
  return (
    <div className="tag">
      <p>{name}</p>
      <button onClick={onClick}>
        <FontAwesomeIcon icon={faXmark} className="x-mark"/>
      </button>
    </div>
  );
}