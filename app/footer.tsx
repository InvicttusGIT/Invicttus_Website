"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.classList.add(styles.hovered);
    const arrow = e.currentTarget.querySelector("svg");
    if (arrow) arrow.style.transform = "rotate(-45deg)";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.classList.remove(styles.hovered);
    const arrow = e.currentTarget.querySelector("svg");
    if (arrow) arrow.style.transform = "rotate(0deg)";
  };

  return (
    <footer className={styles.footer}>
      {/* Top Footer Section */}
      <div className={styles.topFooter}>
        {/* Background Image */}
        <div className={`${styles.topFooterBg} ${styles.footerWrapper}`}></div>

        <div className={styles.container}>
          <div className={styles.wrapper}>
            <h2 className={styles.heading}>
              Forging <span className={styles.highlight}>Legacies</span> And
              Beyond
            </h2>
            <p className={styles.subheading}>
              <span className={styles.icon}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%F0%9F%9A%80-QKMl0aA14sYjmN61F32RvzhVoCDKS3.png"
                  alt="Rocket"
                  width={48}
                  height={67}
                  className={styles.image}
                />
              </span>
              Join us in shaping our future and the future
            </p>

            <div className={styles.buttonGroup}>
              {/* <Link
                href="/careers"
                className={styles.button}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span className={styles.buttonText}>Careers</span>
                <svg
                  width="38.324"
                  height="38.324"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.svgIcon}
                >
                  <path
                    d="M7 3L13 9L7 15"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13 9H1"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link> */}

              <div className={styles.buttonWrapper}>
                <Link
                  href="/contact"
                  className={styles.button}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className={styles.buttonText}>Contact Us</span>
                  <svg
                    width="38.324"
                    height="38.324"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.svgIcon}
                  >
                    <path
                      d="M7 3L13 9L7 15"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13 9H1"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className={styles.bottomfooterWrapper}>
        <div className={styles.bottomFooterWrapper}>
          {/* Top Footer Section */}
          <div className={styles.footerTop}>
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Company</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/products">Products</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Follow Us</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link
                    href="https://au.linkedin.com/company/invicttusgc"
                    target="_blank"
                  >
                    <div className={styles.linkWithIcon}>
                      <Image
                        src="/linkedin.svg" // <-- replace with your actual path
                        alt="LinkedIn"
                        width={60}
                        height={60}
                      />
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Reach Us Out</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href="mailto:Info@invicttus.com">Info@invicttus.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section with 350px height */}
          <div className={styles.footerBottom}>
            <div className={styles.homeIconBox}>
              <Link
                href="/"
                className={styles.homeIconBox}
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <div className={styles.homeIcon}>
                  <Image src="/homebtn.svg" alt="Home" width={64} height={64} />
                </div>
                <p className={styles.homeText}>Return to Home</p>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.footerContainer}>
          <p className={styles.footerText}>
            © 2023 All Rights Reserved By Invicttus.
          </p>
          <div className={styles.footerLinks}>
            <Link href="/privacy" className={styles.footerLink}>
              Privacy Policy.
            </Link>
            <Link href="/terms" className={styles.footerLink}>
              Terms & Conditions.
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
