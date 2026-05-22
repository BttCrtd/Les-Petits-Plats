import Image from "next/image";
import "@/styles/banner.css";
import Link from "next/link";

export function Banner({ children }) {
  return (
    <header className="banner">
      <div className="logo-container">
        <Link href="/">
          <Image
            src="/Logo.svg"
            alt="Logo les petits plat"
            width={200}
            height={25}
          />
        </Link>
      </div>
      {children}
    </header>
  );
}