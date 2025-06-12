"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import styles from "./header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.Header}>
      <div className={styles.LogoContainer}>
        <Link href="/" className={styles.LogoLink}>
          <div className={styles.LogoWrapper}>
            <Image
              src="/logo.png"
              alt="Invicttus Logo"
              width={250}
              height={100}
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <nav className={styles.Navbar}>
          <Link href="/" className={styles.NavLink}>
            Home
          </Link>
          <Link href="/products" className={styles.NavLink}>
            Products
          </Link>

          <Link href="/contact" className={styles.NavLink}>
            Contact Us
          </Link>
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={styles.MobileToggle}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className={styles.MobileMenu}>
          <Link
            href="/"
            className={styles.NavLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className={styles.NavLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>

          <Link
            href="/contact"
            className={styles.NavLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
