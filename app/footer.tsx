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
        <div className={`${styles.topFooterBg} ${styles.footerWrapper}`}>
          {/* <Image
            src="/footer-background.png"
            alt="Footer Background"
            width={1920}
            height={859}
            className={styles.footerImage}
          /> */}
        </div>

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
              <Link
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
              </Link>

              <Link
                href="/contact"
                className={styles.button}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span className={styles.buttonText}>Contact</span>
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

      {/* Bottom Footer Section */}
      <div className={styles.bottomfooterWrapper}>
        <div className={styles.bottomcontainer}>
          <div className={styles.footerBgImage}>
            <Image
              src="/invicttus footer.png"
              alt="bottomFooter bg"
              fill
              className={styles.bottomfooterImage}
              priority
            />
          </div>

          <div className={styles.gridSection}>
            <div className={styles.companyColumn}>
              <h4 className={styles.columnTitle}>Company</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/" className={styles.link}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/products" className={styles.link}>
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className={styles.link}>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={styles.link}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.socialColumn}>
              <h4 className={styles.columnTitleWide}>
                Follow us on Social Media
              </h4>
              <div className={styles.socialIcons}>
                <Link href="#">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className={styles.iconSvg}
                    width="54"
                    height="55"
                    viewBox="0 0 54 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Group 44761">
                      <g id="Group 44755">
                        <g id="Group 44757">
                          <path
                            id="Vector"
                            d="M17 36.2428H21.7957V23.3828H17V36.2428Z"
                            fill="white"
                          />
                          <path
                            id="Vector_2"
                            d="M24.2742 23.382H27.976V25.1669C27.976 25.1669 28.545 23.3652 31.9673 23.3652C34.794 23.3652 36.8132 24.4206 36.8132 27.3213V36.242H32.8599C32.8599 36.242 32.8819 28.7403 32.9032 28.5092C32.9268 28.2768 32.6852 26.3855 30.669 26.3855C28.6529 26.3855 28.0178 27.7724 28.0178 28.8226V36.242H24.2734V23.382H24.2742Z"
                            fill="white"
                          />
                          <path
                            id="Vector_3"
                            d="M21.795 19.3133C21.795 20.5836 20.7223 21.6142 19.3975 21.6142C18.0726 21.6142 17 20.5836 17 19.3133C17 18.043 18.0726 17.0117 19.3975 17.0117C20.7223 17.0117 21.795 18.0423 21.795 19.3133Z"
                            fill="white"
                          />
                        </g>
                      </g>
                      <path
                        id="Ellipse 9"
                        d="M27 0.729492C41.5081 0.729492 53.2704 12.4991 53.2705 27.0186C53.2705 41.538 41.5082 53.3076 27 53.3076C12.4918 53.3076 0.729492 41.538 0.729492 27.0186C0.729579 12.4991 12.4919 0.729492 27 0.729492Z"
                        stroke="white"
                        strokeWidth="1.45946"
                      />
                    </g>
                  </svg>
                </Link>
                <Link href="#">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className={styles.iconSvg}
                    width="55"
                    height="55"
                    viewBox="0 0 55 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      width: "54px",
                      height: "54.037px",
                      flexShrink: 0,
                    }}
                  >
                    <g id="Group 44759">
                      <g id="Group 44756">
                        <g id="Group 44758">
                          <path
                            id="Vector"
                            d="M22.298 18.5292C19.7285 18.5292 17.6367 20.5355 17.6367 23.0014V31.6512C17.6367 34.1179 19.7285 36.1234 22.298 36.1234H31.3218C33.8947 36.1234 35.9873 34.1179 35.9873 31.6512V23.0014C35.9873 20.5355 33.8947 18.5292 31.3218 18.5292H22.298ZM31.3227 38.6467H22.2988C18.2786 38.6467 15.0039 35.5088 15.0039 31.6512V23.0014C15.0039 19.1446 18.2778 16.0059 22.2988 16.0059H31.3227C35.3454 16.0059 38.6201 19.1446 38.6201 23.0014V31.6512C38.6201 35.5088 35.3454 38.6467 31.3227 38.6467Z"
                            fill="white"
                          />
                          <path
                            id="Vector_2"
                            d="M26.8132 23.8088C24.7907 23.8088 23.1456 25.386 23.1456 27.3242C23.1456 29.2624 24.7907 30.8404 26.8132 30.8404C28.8357 30.8404 30.4791 29.2624 30.4791 27.3242C30.4791 25.386 28.834 23.8088 26.8132 23.8088ZM26.8132 33.1102C23.4837 33.1102 20.7773 30.5147 20.7773 27.3242C20.7773 24.1338 23.4846 21.5391 26.8132 21.5391C30.1418 21.5391 32.8474 24.1346 32.8474 27.3242C32.8474 30.5138 30.1401 33.1102 26.8132 33.1102Z"
                            fill="white"
                          />
                          <path
                            id="Vector_3"
                            d="M34.1734 21.2013C34.1734 21.741 33.7157 22.1799 33.1536 22.1799C32.5914 22.1799 32.1328 21.741 32.1328 21.2013C32.1328 20.6615 32.588 20.2227 33.1536 20.2227C33.7191 20.2227 34.1734 20.6615 34.1734 21.2013Z"
                            fill="white"
                          />
                        </g>
                      </g>
                      <circle
                        id="Ellipse 10"
                        cx="27.0094"
                        cy="27.0094"
                        r="26.3067"
                        stroke="white"
                        strokeWidth="1.40541"
                      />
                    </g>
                  </svg>
                </Link>
              </div>
            </div>

            <div className={styles.contactColumn}>
              <h4 className={styles.ContactTitle}>Reach us out</h4>
              <p className={styles.contactText}>
                <a href="mailto:info@invicttus.com">info@invicttus.com</a>
              </p>
            </div>

            <div className={styles.homeButtonColumn}>
              <Link href="/" className={styles.homeButton}>
                <div className={styles.homeButtonCircle}>
                  <svg
                    className={styles.homeButtonIcon}
                    width="58"
                    height="104"
                    viewBox="0 0 58 104"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="home btn">
                      <rect
                        id="Rectangle 14215"
                        x="0.604651"
                        y="0.604651"
                        width="56.7907"
                        height="102.791"
                        rx="28.3953"
                        stroke="#979797"
                        strokeWidth="1.2093"
                      />
                      <path
                        id="Vector"
                        d="M24.8149 61.3821V56.8883C24.8149 55.7496 25.7408 54.8244 26.8878 54.8173H31.0992C32.2513 54.8173 33.1853 55.7445 33.1853 56.8883V61.369C33.1852 62.3567 33.9879 63.1594 34.9827 63.1666H37.8559C39.1978 63.17 40.4859 62.6432 41.436 61.7024C42.3861 60.7615 42.9201 59.484 42.9201 58.1518V45.3869C42.9201 44.3107 42.4396 43.2899 41.6081 42.5994L31.847 34.8493C30.1408 33.4937 27.7039 33.5375 26.0481 34.9535L16.497 42.5994C15.6262 43.2695 15.1058 44.2934 15.0801 45.3869V58.1387C15.0801 60.9155 17.3474 63.1666 20.1443 63.1666H22.9519C23.4309 63.17 23.8914 62.9835 24.2313 62.6485C24.5713 62.3135 24.7624 61.8576 24.7624 61.3821H24.8149Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                  <p className={styles.homeButtonText}>Back To Home</p>
                </div>
              </Link>
            </div>
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
    </footer>
  );
}
