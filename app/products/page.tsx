"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./product.module.css";
import React, { useState } from "react";

const apps = [
  {
    name: "Fireplace Ambiance",
    image: "/fireplace.png",
    featured: false,
    tag: "Utility",
    platform: ["LGTV", "Meta"],
    device: ["Website"],
  },
  {
    name: "Jellyfish Aquarium",
    image: "/jellyfish-aquarium.png",
    featured: false,
    tag: "Featured",
    platform: ["LGTV"],
    device: ["Website"],
  },
  {
    name: "USB Media Player",
    image: "/Usbplayer.png",
    featured: false,
    tag: "Utility",
    platform: ["LGTV"],
    device: ["Website"],
  },
  {
    name: "Guess The Word",
    image: "/guess-the-word.png",
    featured: false,
    tag: "Game",
    platform: ["LGTV"],
    device: ["Website"],
  },
  {
    name: "WordScapes",
    image: "/wordscrapes.png",
    featured: false,
    tag: "Utility",
    platform: ["LGTV"],
    device: ["Website"],
  },
  {
    name: "Word Search",
    image: "/word-search-puzzle.png",
    featured: false,
    tag: "Game",
    platform: ["LGTV"],
    device: ["Website"],
  },
  {
    name: "Alarm App",
    image: "/alarm-app.png",
    featured: false,
    tag: "Utility",
    platform: ["LGTV"],
    device: ["Website"],
  },
  {
    name: "Clockfaces",
    image: "/Clockfaces.png",
    featured: false,
    tag: "Utility",
    platform: ["LGTV"],
    device: ["Website"],
  },
];
const platformIcons: Record<string, string> = {
  LGTV: "/7a5d366f552fa89268ad31d4dd492c8905557359.png",
  Roku: "/24a3ecae62b20e1e34d699d3530f0fae45e74927.jpg",
  FireTV: "/ff213f0660c12d6c8fc25c2cd96dc875cebd2f79.png",
  Meta: "3ea30ddbd3c24854d46f1c9bd26285e77bed7fe6.png",
  PlayStore: "e46ce093f4c3a285ee5bca933588d6cefa59a398.png",
};
export default function ProductsPage() {
  const [isDevicesOpen, setIsDevicesOpen] = useState(false);
  const [isPlatformsOpen, setIsPlatformsOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  const toggleDevicesDropdown = () => {
    setIsDevicesOpen(!isDevicesOpen);
    setIsPlatformsOpen(false);
  };

  const togglePlatformsDropdown = () => {
    setIsPlatformsOpen(!isPlatformsOpen);
    setIsDevicesOpen(false);
  };

  const filteredApps = apps.filter((app) => {
    const tagMatch = !selectedTag || app.tag === selectedTag;
    const deviceMatch = !selectedDevice || app.device?.includes(selectedDevice);
    const platformMatch =
      !selectedPlatform || app.platform?.includes(selectedPlatform);
    return tagMatch && deviceMatch && platformMatch && !app.featured;
  });

  return (
    <div className={styles.ProductPage}>
      <div className={styles.ContentWrapper}>
        <div className={styles.ProductHero}>
          <div className={styles.ProductHerobg} />
          <div className={styles.ProductHeroContent}>
            <h2 className={styles.ProductHeroHeading}>
              Become A Part of Our{" "}
              <span className={styles.Highlight}>Team</span>
            </h2>
            <p className={styles.ProductHeroSubheading}>
              Join Us in Shaping the Future with Innovation.
            </p>
            <Link href="/products">
              <button className={styles.OurProductButton}>Our Products</button>
            </Link>
          </div>
        </div>

        <div>
          <div className={styles.ProductSection}>
            <section className={styles.ProductsSection}>
              <div className={styles.topApp}>
                <div className={styles.ProductsSectionLeft}>
                  <h2 className={styles.LeftHeading}>
                    Top Rated <span className={styles.Highlight2}>App</span>
                  </h2>
                  <p className={styles.LeftSubHeading}>
                    We create seamless, high-performance solutions — from
                    immersive apps and interactive TV to premium content,
                    high-octane games, and next-gen VR/MR experiences.
                  </p>
                </div>
                <div className={styles.productSectionRight}>
                  <div className={styles.ProductSectionLeft}>
                    <h4 className={styles.ProductSectionAppName}>
                      Guess The Word
                    </h4>
                    <Image
                      src="/guess-the-word.png"
                      alt="Guess The Word"
                      width={357}
                      height={293}
                      className={styles.ProductSectionImage}
                    />
                  </div>
                  <div className={styles.ProductSectionRightContent}>
                    <div className={styles.ProductSectionStats}>
                      <span className={styles.ProductSectionStatBox}>
                        <p>
                          <strong>4.9 </strong> Ratings
                        </p>
                      </span>
                      <span className={styles.ProductSectionStatBox}>
                        <p>
                          <strong> 1M </strong> Userbase
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.PrductsSectionFilter}>
                <button
                  className={styles.FilterButton}
                  onClick={() => {
                    setSelectedTag(null);
                    setSelectedPlatform(null);
                    setSelectedDevice(null);
                  }}
                >
                  Apps
                </button>
                <button
                  className={styles.FilterButton}
                  onClick={() => {
                    setSelectedTag("Game");
                    setSelectedPlatform(null);
                    setSelectedDevice(null);
                  }}
                >
                  Games
                </button>

                <div
                  className={styles.DevicesDropdown}
                  onMouseEnter={() => setIsDevicesOpen(true)}
                  onMouseLeave={() => setIsDevicesOpen(false)}
                >
                  <button
                    className={`${styles.FilterButton} ${styles.PlatformButtonWithIcon}`}
                  >
                    Devices
                    <span
                      className={`${styles.PlatformDropdownIcon} ${
                        isDevicesOpen ? styles.iconRotated : ""
                      }`}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
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

                  {isDevicesOpen && (
                    <div className={styles.PlatformOptions}>
                      <button
                        className={styles.PlatformOption}
                        onClick={() => setSelectedDevice("Mobile")}
                      >
                        Mobile
                      </button>
                      <button
                        className={styles.PlatformOption}
                        onClick={() => setSelectedDevice("Website")}
                      >
                        Website
                      </button>
                      <button
                        className={styles.PlatformOption}
                        onClick={() => setSelectedDevice("Tablets")}
                      >
                        Tablets
                      </button>
                    </div>
                  )}
                </div>

                <div
                  className={styles.DevicesDropdown}
                  onMouseEnter={() => setIsPlatformsOpen(true)}
                  onMouseLeave={() => setIsPlatformsOpen(false)}
                >
                  <button
                    className={`${styles.FilterButton} ${styles.PlatformButtonWithIcon}`}
                  >
                    Platforms
                    <span
                      className={`${styles.PlatformDropdownIcon} ${
                        isPlatformsOpen ? styles.iconRotated : ""
                      }`}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
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

                  {isPlatformsOpen && (
                    <div className={styles.PlatformOptions}>
                      <button
                        className={styles.PlatformOption}
                        onClick={() => setSelectedPlatform("Roku TV")}
                      >
                        Roku TV
                      </button>
                      <button
                        className={styles.PlatformOption}
                        onClick={() => setSelectedPlatform("Fire TV")}
                      >
                        Fire TV
                      </button>
                      <button
                        className={styles.PlatformOption}
                        onClick={() => setSelectedPlatform("LGTV")}
                      >
                        LGTV
                      </button>
                      <button
                        className={styles.PlatformOption}
                        onClick={() => setSelectedPlatform("Apple TV")}
                      >
                        Apple TV
                      </button>
                      <button
                        className={styles.PlatformOption}
                        onClick={() => setSelectedPlatform("Play Store")}
                      >
                        Play Store
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.productsgridSection}>
                {filteredApps.map((app) => (
                  <div key={app.name} className={styles.AppsgridContainer}>
                    <div className={styles.AppsGridLeft}>
                      <h4 className={styles.AppsName}>{app.name}</h4>
                      <div className={styles.platformIcons}>
                        {app.platform.map((platform, index) => (
                          <img
                            key={index}
                            src={platformIcons[platform]}
                            alt={platform}
                            className={styles.platformIcon}
                          />
                        ))}
                      </div>
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
                            <strong> 4.9 </strong> Ratings
                          </p>
                        </span>
                        <span className={styles.AppsStatBox}>
                          <p>
                            <strong>1M</strong> Userbase
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.AppGridLoadmore}>
                <button className={styles.LoadMoreButton}>
                  <a href="#">Load More</a>
                </button>
              </div>
              <div className={styles.ProductsBottomSection}>
                <h2 className={styles.ProductBottomheading}>
                  <span className={styles.Block}>ACTION.</span>
                  <span className={styles.Block}>VISION.</span>
                  <span className={styles.Block}>SPIRIT.</span>
                </h2>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
