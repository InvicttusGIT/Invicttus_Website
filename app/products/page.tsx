import Link from "next/link";
import Image from "next/image";
import styles from "./product.module.css";
import React from "react";

const apps = [
  {
    name: "Fireplace Ambiance",
    image: "/fireplace-ambiance.png",
    featured: false,
    tag: "Utility",
  },
  {
    name: "Jellyfish Aquarium",
    image: "/jellyfish-aquarium.png",
    featured: false,
    tag: "Featured",
  },
  {
    name: "USB Media Player",
    image: "/Usbplayer.png",
    featured: false,
    tag: "Utility",
  },
  {
    name: "Guess The Word",
    image: "/guess-the-word.png",
    featured: false,
    tag: "Game",
  },
  {
    name: "WordScapes",
    image: "/wordscrapes.png",
    featured: false,
    tag: "Utility",
  },
  {
    name: "Word Search",
    image: "/word-search-puzzle.png",
    featured: false,
    tag: "Game",
  },
  {
    name: "Alarm App",
    image: "/alarm-app.png",
    featured: false,
    tag: "Utility",
  },
  {
    name: "Clockfaces",
    image: "/Clockfaces.png",
    featured: false,
    tag: "Utility",
  },
];

export default function ProductsPage() {
  return (
    <div className={styles.ProductPage}>
      <div className={styles.ProductsBottomBg}></div>
      <div className={styles.ContentWrapper}>
        {/* Hero Section */}
        <div className={styles.ProductHero}>
          {/* Background Image */}
          <div className={styles.ProductHerobg} />
          {/* Content */}
          <div className={styles.ProductHeroContent}>
            <h2 className={styles.ProductHeroHeading}>
              Become A Part of Our{" "}
              <span className={styles.Highlight}>Team</span>
            </h2>
            <p className={styles.ProductHeroSubheading}>
              Join Us in Shaping the Future with Innovation.
            </p>
            <Link href="/careers">
              <button className={styles.OurProductButton}>Our Products</button>
            </Link>
          </div>
        </div>

        {/* Combine filter, product section, and app grid in one wrapper */}
        <div>
          {/* Products Section */}
          <section className={styles.ProductsSection}>
            <div className={styles.ProductsSectionbg}></div>
            <div className={styles.ProductsSectiotLeft}>
              <h2 className={styles.LeftHeading}>
                Top Rated <span className={styles.Highlight}>App</span>
              </h2>
              <p className={styles.LeftSubHeading}>
                We create seamless, high-performance solutions — from immersive
                apps and interactive TV to premium content, high-octane games,
                and next-gen VR/MR experiences.
              </p>
            </div>

            {/* Right: Featured App */}
            <div className={styles.productSectionRight}>
              <div className={styles.ProductSectionLeft}>
                <h4 className={styles.ProductSectionAppName}>Guess The Word</h4>
                <Image
                  src="/guess-the-word.png"
                  alt="Guess The Word"
                  fill
                  className={styles.ProductSectionImage}
                />
              </div>
              <div className={styles.ProductSectionRightContent}>
                <span className={styles.ProductSectionFlagship}>
                  <h2> Flagship App </h2>
                </span>
                <div className={styles.ProductSectionStats}>
                  <span className={styles.ProductSectionStatBox}>
                    <p>
                      {" "}
                      <strong>4.9 </strong> Ratings{" "}
                    </p>
                  </span>
                  <span className={styles.ProductSectionStatBox}>
                    <p>
                      {" "}
                      <strong> 1M </strong> Userbase{" "}
                    </p>
                  </span>
                </div>
                <button className={styles.ProductSectionSeeMoreButton}>
                  <Link href="/products/flagshipapp"> See More{">"}</Link>
                </button>
              </div>
            </div>
          </section>

          {/* Filter Buttons */}
          <div className={styles.PrductsSectionFilter}>
            <button className={styles.FilterButton}>Apps</button>
            <button className={styles.FilterButton}>Games</button>

            {/* Devices Dropdown */}
            <div className={styles.DevicesDropdown}>
              <button
                className={`${styles.FilterButton} ${styles.PlatformButtonWithIcon}`}
              >
                Devices
                <span className={styles.PlatformDropdownIcon}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M6 8L10 12L14 8"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <div className={styles.PlatformOptions}>
                <button className={styles.PlatformOption}>Mobile</button>
                <button className={styles.PlatformOption}>Website</button>
                <button className={styles.PlatformOption}>Tablets</button>
              </div>
            </div>

            {/* Platforms Dropdown */}
            <div className={styles.PlatformDropdown}>
              <button
                className={`${styles.FilterButton} ${styles.PlatformButtonWithIcon}`}
              >
                Platforms
                <span className={styles.PlatformDropdownIcon}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M6 8L10 12L14 8"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <div className={styles.PlatformOptions}>
                <button className={styles.PlatformOption}>Roku TV</button>
                <button className={styles.PlatformOption}>Fire TV</button>
                <button className={styles.PlatformOption}>LGTV</button>
                <button className={styles.PlatformOption}>Apple TV</button>
                <button className={styles.PlatformOption}>Play Store</button>
              </div>
            </div>
          </div>

          <div className={styles.productsgridSection}>
            {apps
              .filter((app) => !app.featured)
              .map((app) => (
                <div key={app.name} className={styles.AppsgridContainer}>
                  <div className={styles.AppsGridLeft}>
                    <h4 className={styles.AppsName}>{app.name}</h4>
                    <div className={styles.Appsgridimages}>
                      <Image
                        src={app.image}
                        alt={app.name}
                        fill
                        className={styles.AppsImages}
                      />
                    </div>
                  </div>
                  <div className={styles.AppsGridRight}>
                    <div className={styles.AppsStats}>
                      <span className={styles.AppsStatBox}>
                        <p>
                          {" "}
                          <strong> 4.9 </strong> Ratings
                        </p>
                      </span>
                      <span className={styles.AppsStatBox}>
                        {" "}
                        <p>
                          {" "}
                          <strong>1M</strong> Userbase{" "}
                        </p>
                      </span>
                    </div>
                    <button className={styles.SeemoreButton}>
                      <a href="See More ">See More </a>
                    </button>
                  </div>
                </div>
              ))}
          </div>

          <div className={styles.AppGridLoadmore}>
            <button className={styles.LoadMoreButton}>
              <a href="Load More">Load More</a>
            </button>
          </div>
          <div
            style={{
              position: "relative",
              width: "100%",
            }}
          >
            <div className={styles.ProductsBottomSection}>
              <h2 className={styles.ProductBottomheading}>
                <span className={styles.Block}>ACTION.</span>
                <span className={styles.Block}>VISION.</span>
                <span className={styles.Block}>SPIRIT.</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
