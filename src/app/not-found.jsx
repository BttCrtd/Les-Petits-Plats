import Image from "next/image";
import "@/styles/no-found.css";
import { Banner } from "@/components/Banner/Banner";

export default function NotFound() {
  return (
     <Banner>
      <div className="title">
        <h1>404 :(</h1>
        <p>La page que vous demandez est introuvable.</p>
      </div>
      <div className="calc"></div>
    </Banner>
  );
}